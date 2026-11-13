#!/usr/bin/env python3
"""Vérifie la cohérence des liens d'un atelier avant un commit.

Usage : python3 .claude/skills/commit/scripts/check-workshop.py <slug> [<slug>...]

- Liens morts : toute URL interne (/docs/..., /workshops/..., /ressources/...)
  citée dans l'index (listes du front matter, special_sections), dans les pages
  de l'atelier ou dans ses slides, qui ne correspond à aucune page.
- Pages orphelines : pages de l'atelier citées nulle part dans l'atelier.
- Fichiers statiques cités (images, CSV, PDF) : présence sur le disque.
Les ancres (#...) et paramètres (?project=...) sont ignorés.

Calcule les URL depuis les fichiers (permalink du front matter, sinon
/<collection>/<chemin sans .md>/), sans construire le site.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[4]
COLLECTIONS = {"_docs": "docs", "_workshops": "workshops", "_ressources": "ressources"}
URL_RE = re.compile(r"(?<![\w.:/])(/(?:docs|workshops|ressources)/[^\s)\"'`#?<>|}]*)")


def front_matter(text):
    if text.startswith("---"):
        end = text.find("\n---", 3)
        if end != -1:
            return text[3:end]
    return ""


def page_url(path):
    text = path.read_text(encoding="utf-8")
    m = re.search(r"^permalink:\s*(\S+)", front_matter(text), re.M)
    if m:
        return m.group(1).strip("\"'")
    rel = path.relative_to(ROOT)
    coll = COLLECTIONS[rel.parts[0]]
    stem = "/".join(rel.with_suffix("").parts[1:])
    return f"/{coll}/{stem}/"


def all_pages():
    pages = {}
    for folder in COLLECTIONS:
        for p in (ROOT / folder).rglob("*.md"):
            pages[page_url(p)] = p
    return pages


def norm(url):
    url = url.rstrip(".,;:")
    if not url.endswith("/") and "." not in url.rsplit("/", 1)[-1]:
        url += "/"
    return url


def check(slug, pages):
    base = ROOT / "_workshops" / slug
    if not base.is_dir():
        print(f"[{slug}] dossier introuvable : {base}")
        return 1
    files = sorted(base.rglob("*.md"))
    problems = 0
    cited = set()
    for f in files:
        text = f.read_text(encoding="utf-8")
        for m in URL_RE.finditer(text):
            url = norm(m.group(1))
            if "." in url.rstrip("/").rsplit("/", 1)[-1]:
                # fichier statique (image, pdf, csv...) : vérifier sa présence
                target = ROOT / ("_" + url.lstrip("/"))
                if not target.exists():
                    line = text.count("\n", 0, m.start()) + 1
                    print(f"[{slug}] fichier absent  {f.relative_to(ROOT)}:{line}  {url}")
                    problems += 1
                continue
            cited.add(url)
            if url not in pages:
                line = text.count("\n", 0, m.start()) + 1
                print(f"[{slug}] lien mort       {f.relative_to(ROOT)}:{line}  {url}")
                problems += 1
    for f in files:
        if f.name in ("index.md", "notes.md", "README.md"):
            continue
        url = page_url(f)
        if url not in cited:
            print(f"[{slug}] page orpheline  {f.relative_to(ROOT)}  ({url})")
            problems += 1
    if not problems:
        print(f"[{slug}] OK : {len(files)} pages, {len(cited)} liens internes vérifiés")
    return problems


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        return 2
    pages = all_pages()
    total = sum(check(slug, pages) for slug in sys.argv[1:])
    return 1 if total else 0


if __name__ == "__main__":
    sys.exit(main())
