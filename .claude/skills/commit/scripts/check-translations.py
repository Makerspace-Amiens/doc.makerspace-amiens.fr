#!/usr/bin/env python3
"""Vérifie la concordance entre les pages françaises et leurs traductions avant un commit.

Usage :
  python3 .claude/skills/commit/scripts/check-translations.py            # changements en cours
  python3 .claude/skills/commit/scripts/check-translations.py --base main  # depuis une réf.
  python3 .claude/skills/commit/scripts/check-translations.py --all        # tout le dépôt

Le site est bilingue (jekyll-polyglot, voir CLAUDE.md) : la traduction de `<nom>.md` est le
fichier frère `<nom>.en.md`. Par défaut, le script examine les fichiers modifiés par rapport
à HEAD (indexés ou non, et non suivis) :

ERREUR (bloque le commit, exit 1)
  - traduction orpheline : `<nom>.en.md` dont la page française a été supprimée ou renommée ;
  - `lang: en` absent d'une traduction, ou `permalink` différent de l'URL française ;
  - front matter divergent : un champ non traduisible (layout, type, kind, images, durée,
    difficulté, listes d'URL des ateliers, liens des prérequis...) diffère entre les langues ;
  - `_data/i18n.yml` : clé présente dans une langue et pas dans l'autre, ou valeur vide ;
  - menus : `_data/navigation.yml` / `_data/en/navigation.yml` (idem footer) n'ont pas les
    mêmes liens dans le même ordre.

À VÉRIFIER (signalé, ne bloque pas)
  - à traduire : la page française a changé, pas sa traduction (ou l'inverse) ;
  - structure : titres `##`, includes, images ou blocs de code différents entre les langues ;
  - libellé en dur : texte ajouté dans un layout ou un include, au lieu de `_data/i18n.yml`.

Avec --all : tous les couples de pages, et « à traduire » quand le dernier commit de la page
française est postérieur à celui de sa traduction.
"""
import argparse
import json
import re
import subprocess
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[4]
LANG = "en"
SKIP_DIRS = {".git", ".claude", "_site", "node_modules", "vendor", ".jekyll-cache", ".bundle"}
COLLECTIONS = {"_docs": "docs", "_workshops": "workshops", "_ressources": "ressources", "_projects": "projects"}

# Champs qui se traduisent : ignorés dans la comparaison du front matter (à tout niveau).
TRANSLATABLE = {
    "title", "subtitle", "description", "author", "lang", "label", "desc", "toc_title",
    "special_section_label", "special_section_desc", "project_tags", "kicker", "hero_title",
    "hero_subtitle", "todo", "excerpt", "tags", "permalink", "redirect_from",
}
MENUS = [("_data/navigation.yml", "_data/en/navigation.yml"),
         ("_data/footer_navigation.yml", "_data/en/footer_navigation.yml")]
I18N = "_data/i18n.yml"

errors, warnings = [], []


def err(msg):
    errors.append(msg)


def warn(msg):
    warnings.append(msg)


def git(*args):
    return subprocess.run(["git", *args], cwd=ROOT, capture_output=True, text=True).stdout


def load_yaml(text):
    """YAML -> Python, via Ruby (toujours présent avec Jekyll ; PyYAML ne l'est pas)."""
    script = ("require 'yaml'; require 'json'; require 'date'; "
              "puts JSON.generate(YAML.safe_load(STDIN.read, permitted_classes: [Date, Time], aliases: true))")
    res = subprocess.run(["ruby", "-e", script], input=text, capture_output=True, text=True)
    if res.returncode != 0:
        raise ValueError(res.stderr.strip().splitlines()[-1] if res.stderr else "YAML invalide")
    return json.loads(res.stdout or "null")


def split_page(path):
    text = (ROOT / path).read_text(encoding="utf-8")
    if text.startswith("---"):
        end = text.find("\n---", 3)
        if end != -1:
            return text[3:end], text[end + 4:]
    return "", text


def front_matter(path):
    fm, _ = split_page(path)
    try:
        return load_yaml(fm) or {}
    except ValueError as e:
        err(f"[YAML] {path} : front matter illisible ({e})")
        return None


def is_translation(path):
    return path.endswith(f".{LANG}.md")


def fr_of(path):
    return path[: -len(f".{LANG}.md")] + ".md"


def en_of(path):
    return path[:-3] + f".{LANG}.md"


def page_url(path, fm):
    """URL française d'une page (même règle que check-workshop.py et polyglot)."""
    if fm and fm.get("permalink"):
        return str(fm["permalink"])
    p = Path(path)
    stem = re.sub(rf"\.{LANG}$", "", str(p.with_suffix("")))
    parts = Path(stem).parts
    if parts and parts[0] in COLLECTIONS:
        return "/" + "/".join([COLLECTIONS[parts[0]], *parts[1:]]) + "/"
    if parts and parts[-1] == "index":
        parts = parts[:-1]
    return "/" + "/".join(parts) + ("/" if parts else "")


def strip_translatable(value):
    if isinstance(value, dict):
        return {k: strip_translatable(v) for k, v in value.items() if k not in TRANSLATABLE}
    if isinstance(value, list):
        return [strip_translatable(v) for v in value]
    return value


# ------------------------------------------------------------------ couples de pages
def all_pages():
    for p in ROOT.rglob("*.md"):
        rel = p.relative_to(ROOT)
        if not set(rel.parts) & SKIP_DIRS:
            yield str(rel)


def check_pair(fr, en):
    fm_fr, fm_en = front_matter(fr), front_matter(en)
    if fm_fr is None or fm_en is None:
        return
    if fm_en.get("lang") != LANG:
        err(f"[lang] {en} : ajouter `lang: {LANG}` au front matter")
    if fm_fr.get("lang") not in (None, "fr"):
        err(f"[lang] {fr} : la page française a `lang: {fm_fr.get('lang')}`")
    url_fr = page_url(fr, fm_fr)
    if fm_en.get("permalink") and str(fm_en["permalink"]) != url_fr:
        err(f"[permalink] {en} : `{fm_en['permalink']}` au lieu de `{url_fr}` (URL française)")
    if Path(fr).name == "index.md" and not fm_en.get("permalink") and fr.count("/") == 0:
        err(f"[permalink] {en} : mettre `permalink: {url_fr}` (sinon l'URL serait /index/)")

    a, b = strip_translatable(fm_fr), strip_translatable(fm_en)
    for key in sorted(set(a) | set(b)):
        if a.get(key) != b.get(key):
            err(f"[front matter] `{key}` diffère : {fr} = {json.dumps(a.get(key), ensure_ascii=False)[:90]}"
                f" | {en} = {json.dumps(b.get(key), ensure_ascii=False)[:90]}")

    _, body_fr = split_page(fr)
    _, body_en = split_page(en)
    for label, fn in STRUCTURE.items():
        sf, se = fn(body_fr), fn(body_en)
        if sf != se:
            warn(f"[structure] {en} : {label} différents de {Path(fr).name} ({describe(sf, se)})")


def describe(fr, en):
    """Résumé lisible de l'écart entre deux listes (éléments en trop, ou ordre)."""
    cf, ce = Counter(fr), Counter(en)
    only_fr, only_en = list((cf - ce).elements()), list((ce - cf).elements())
    if not only_fr and not only_en:
        i = next(i for i, (x, y) in enumerate(zip(fr, en)) if x != y)
        return f"mêmes éléments, ordre différent à partir du n° {i + 1} : FR {short(fr[i:i + 3])}, EN {short(en[i:i + 3])}"
    parts = []
    if only_fr:
        parts.append(f"seulement en FR : {short(only_fr)}")
    if only_en:
        parts.append(f"seulement en EN : {short(only_en)}")
    return " ; ".join(parts)


def short(v):
    s = json.dumps(v, ensure_ascii=False) if not isinstance(v, (int, str)) else str(v)
    return s if len(s) <= 100 else s[:97] + "..."


def _headings(body):
    return [m.group(1) for m in re.finditer(r"^(#{2,6}) ", strip_code(body), re.M)]


def _includes(body):
    return re.findall(r"{%-?\s*include\s+([\w./-]+)", body)


def _images(body):
    refs = re.findall(r"!\[[^\]]*\]\(([^)\s]+)", body)
    refs += re.findall(r"\b(?:image(?:_\d)?|src|poster)=[\"']([^\"'{}]+\.\w{2,5})[\"']", body)
    return sorted(set(refs))


def _code_blocks(body):
    return re.findall(r"^\s*```(\S*)", body, re.M)[::2]


def strip_code(body):
    return re.sub(r"^\s*```.*?^\s*```", "", body, flags=re.S | re.M)


STRUCTURE = {
    "niveaux des titres": _headings,
    "includes": _includes,
    "images": _images,
    "blocs de code": _code_blocks,
}


# ------------------------------------------------------------------ données d'interface
def flatten(d, prefix=""):
    out = {}
    for k, v in (d or {}).items():
        key = f"{prefix}{k}"
        if isinstance(v, dict):
            out.update(flatten(v, key + "."))
        else:
            out[key] = v
    return out


def check_i18n():
    path = ROOT / I18N
    if not path.exists():
        return
    try:
        data = load_yaml(path.read_text(encoding="utf-8")) or {}
    except ValueError as e:
        err(f"[i18n] {I18N} illisible ({e})")
        return
    fr, en = flatten(data.get("fr")), flatten(data.get(LANG))
    for k in sorted(set(fr) - set(en)):
        err(f"[i18n] {I18N} : clé `{k}` présente en fr, absente en {LANG}")
    for k in sorted(set(en) - set(fr)):
        err(f"[i18n] {I18N} : clé `{k}` présente en {LANG}, absente en fr")
    for lang, d in (("fr", fr), (LANG, en)):
        for k, v in d.items():
            if v in (None, ""):
                err(f"[i18n] {I18N} : `{lang}.{k}` est vide")


def check_menus():
    for fr, en in MENUS:
        if not (ROOT / fr).exists() or not (ROOT / en).exists():
            if (ROOT / fr).exists():
                err(f"[menu] {en} absent : le menu {fr} ne serait pas traduit")
            continue
        try:
            a = load_yaml((ROOT / fr).read_text(encoding="utf-8")) or []
            b = load_yaml((ROOT / en).read_text(encoding="utf-8")) or []
        except ValueError as e:
            err(f"[menu] {fr} ou {en} illisible ({e})")
            continue
        sig = lambda menu: [(i.get("link"), bool(i.get("dropdown"))) for i in menu]  # noqa: E731
        if sig(a) != sig(b):
            err(f"[menu] {fr} et {en} n'ont pas les mêmes liens dans le même ordre : "
                f"FR {[l for l, _ in sig(a)]} | EN {[l for l, _ in sig(b)]}")


# ------------------------------------------------------------------ libellés en dur
TEXT_NODE = re.compile(r">([^<>]*[A-Za-zÀ-ÿ]{3,}[^<>]*)<")
TEXT_ATTR = re.compile(r"\b(?:title|placeholder|aria-label|alt)=\"([^\"]*[A-Za-zÀ-ÿ]{3,}[^\"]*)\"")


def hardcoded_labels(path, added_lines):
    text = (ROOT / path).read_text(encoding="utf-8")
    # Neutralise commentaires Liquid/HTML et balises <script>/<style> en gardant les numéros de ligne.
    blank = lambda m: re.sub(r"[^\n]", " ", m.group(0))  # noqa: E731
    for pat in (r"{%-?\s*comment\s*-?%}.*?{%-?\s*endcomment\s*-?%}", r"<!--.*?-->",
                r"<script\b.*?</script>", r"<style\b.*?</style>"):
        text = re.sub(pat, blank, text, flags=re.S)
    lines = text.splitlines()
    for n in added_lines:
        if n > len(lines):
            continue
        line = re.sub(r"{{.*?}}|{%.*?%}", "", lines[n - 1])
        for m in list(TEXT_NODE.finditer(line)) + list(TEXT_ATTR.finditer(line)):
            txt = m.group(1).strip()
            if txt and not re.fullmatch(r"[\W\d_]*", txt):
                warn(f"[libellé en dur] {path}:{n} : « {txt[:60]} » (passer par {I18N}, clés fr et {LANG})")


def added_line_numbers(base, path, untracked):
    if path in untracked:
        return range(1, len((ROOT / path).read_text(encoding="utf-8").splitlines()) + 1)
    nums = []
    for m in re.finditer(r"^@@ -\S+ \+(\d+)(?:,(\d+))? @@", git("diff", "-U0", base, "--", path), re.M):
        start, count = int(m.group(1)), int(m.group(2) or 1)
        nums.extend(range(start, start + count))
    return nums


def label_files(paths):
    return [p for p in paths
            if p.endswith(".html") and p.split("/")[0] in ("_layouts", "_includes")
            and (ROOT / p).exists()]


# ------------------------------------------------------------------ modes
def changed_files(base):
    status = {}
    for line in git("diff", "--name-status", "-M", base).splitlines():
        parts = line.split("\t")
        code = parts[0][0]
        if code == "R":
            status[parts[1]] = "D"
            status[parts[2]] = "A"
        else:
            status[parts[-1]] = code
    untracked = set(git("ls-files", "--others", "--exclude-standard").splitlines())
    for p in untracked:
        status[p] = "A"
    return status, untracked


def diff_size(base, path, untracked):
    if path in untracked:
        return f"nouveau, {len((ROOT / path).read_text(encoding='utf-8').splitlines())} lignes"
    out = git("diff", "--numstat", base, "--", path).split()
    return f"+{out[0]} -{out[1]} lignes" if len(out) >= 2 else "modifié"


def run_changes(base):
    status, untracked = changed_files(base)
    pages = [p for p in status if p.endswith(".md")]
    pairs = set()
    for p in pages:
        if is_translation(p):
            fr = fr_of(p)
            if status[p] != "D" and not (ROOT / fr).exists():
                err(f"[traduction orpheline] {p} : la page française {fr} n'existe pas "
                    f"(supprimée ou renommée ? renommer/supprimer aussi la traduction)")
                continue
            if status[p] == "A" and fr not in status:
                warn(f"[nouvelle traduction] {p} : vérifier qu'elle est fidèle à {fr} "
                     f"(contenu complet, mêmes étapes, mêmes valeurs)")
            elif status[p] != "D" and fr not in status:
                warn(f"[à traduire] {p} modifiée ({diff_size(base, p, untracked)}) sans {fr} : "
                     f"vérifier qu'elle reste fidèle à la version française")
            if status[p] != "D":
                pairs.add((fr, p))
        else:
            en = en_of(p)
            if not (ROOT / en).exists():
                continue
            if status[p] == "D":
                err(f"[traduction orpheline] {p} supprimée ou renommée, mais {en} existe encore")
                continue
            if en not in status:
                warn(f"[à traduire] {p} modifiée ({diff_size(base, p, untracked)}), pas {en} : "
                     f"reporter les changements (git diff {base} -- {p})")
            pairs.add((p, en))
    for fr, en in sorted(pairs):
        check_pair(fr, en)

    if I18N in status:
        check_i18n()
    if any(p in status for menu in MENUS for p in menu):
        check_menus()
    for p in label_files(status):
        hardcoded_labels(p, added_line_numbers(base, p, untracked))
    return len(pairs)


def last_commit(path):
    out = git("log", "-1", "--format=%ct", "--", path).strip()
    return int(out) if out else 0


def run_all():
    pairs = []
    for p in all_pages():
        if is_translation(p):
            fr = fr_of(p)
            if not (ROOT / fr).exists():
                fm = front_matter(p)
                if fm is not None and fm.get("lang") == LANG:
                    # Page seulement anglaise (ex. initiation-makerspace) : légitime si voulu.
                    warn(f"[sans version française] {p} : page seulement en anglais, est-ce voulu ?")
                continue
            pairs.append((fr, p))
    for fr, en in sorted(pairs):
        check_pair(fr, en)
        t_fr, t_en = last_commit(fr), last_commit(en)
        if t_fr > t_en:
            since = git("log", "-1", "--format=%h", "--", en).strip()
            warn(f"[à traduire] {fr} a été modifiée après sa traduction : "
                 f"git diff {since} HEAD -- {fr}")
    check_i18n()
    check_menus()
    return len(pairs)


def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("--base", default="HEAD", help="référence de comparaison (défaut : HEAD)")
    ap.add_argument("--all", action="store_true", help="vérifier tout le dépôt")
    args = ap.parse_args()

    n = run_all() if args.all else run_changes(args.base)
    for e in errors:
        print(f"ERREUR      {e}")
    for w in warnings:
        print(f"À VÉRIFIER  {w}")
    if not errors and not warnings:
        print(f"[traductions] OK : {n} couple(s) de pages FR/EN vérifié(s), interface et menus concordants")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
