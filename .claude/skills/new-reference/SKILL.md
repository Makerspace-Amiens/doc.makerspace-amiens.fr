---
name: new-reference
description: Crée une nouvelle fiche de référence dans `_docs/references/` de ce site Jekyll MakerSpace (machine, composant électronique, logiciel, plan, ressource externe) avec le front matter propre à chaque sous-dossier. À utiliser quand l'utilisateur demande une fiche machine ou équipement, une fiche composant, une fiche logiciel, des specs, un BOM ou un pinout. Pas pour une procédure : voir `new-tutorial` ou `new-how-to`, ni pour une explication théorique (`new-concept`), ni pour une fiche de liens dans `_ressources/` (`new-ressource`).
---

# Nouvelle fiche de référence

Crée une fiche dans `_docs/references/`. Une référence est factuelle et consultable :
caractéristiques, specs, BOM, brochage, liens. Aucune procédure.

**Arguments attendus** : `$ARGUMENTS`
Format : `<type>/<slug>` où `<type>` est l'un des sous-dossiers ci-dessous.

## 1. Choisir le sous-dossier

| Type | Sous-dossier | Exemples | Champ `type` |
|---|---|---|---|
| `software` | `_docs/references/software/` | Arduino IDE, OnShape, KiCad | aucun |
| `hardware` | `_docs/references/hardware/` | Arduino Uno, CNC Shield, servomoteur | aucun |
| `machines` | `_docs/references/machines/` | Bambulab X1C, Laserbox, Mayku | `equipment` |
| `plans` | `_docs/references/plans/` | index de plans OnShape | aucun |
| `others` | `_docs/references/others/` | ressources externes, livres, cours PDF | aucun |

Le filtre de `/docs/` déduit la catégorie du sous-dossier (`path_prefix` +
`category_path_offset`) : **seules les machines portent un `type`** (`equipment`, lu par
`/equipment/`). En mettre un ailleurs est du bruit.

Confusion fréquente : une fiche de liens, d'outil ou de revendeur destinée à la page
`/ressources/` relève de `new-ressource` (`_ressources/`), pas d'ici.

## 2. Chemins

- Fichier : `_docs/references/<type>/<slug>.md`
- Dossier images : `_docs/references/<type>/<slug>/` (y créer un `.gitkeep`)

## 3. Front matter et squelette

Lire le gabarit correspondant au type retenu, puis l'appliquer :

- [references/software.md](references/software.md) : logiciels et outils
- [references/hardware.md](references/hardware.md) : composants électroniques
- [references/machines.md](references/machines.md) : équipements du MakerSpace
- `plans` et `others` : partir du gabarit `software` sans `manufacturer`, en gardant
  `external_link` si la fiche pointe vers une ressource externe.

## 4. Rappels

- Pas de champ `type` pour `software` / `hardware` / `plans` / `others` ; `type: equipment`
  uniquement pour `machines`.
- `external_link` fait pointer le clic sur la carte directement vers l'URL externe : la
  page interne n'est alors plus visitée, donc ne pas y mettre de contenu utile.
- Corps en `##`, jamais `#`.
- Jamais de tiret cadratin `—` dans le contenu rédigé, front matter inclus
  (cf. `CLAUDE.md`).
- Une valeur de front matter contenant ` : ` doit être entre guillemets.
- Photos réelles et libres uniquement, jamais générées par IA, avec crédit en fin de page
  (`---` puis le texte suivi de `{: .is-size-7 .has-text-grey }`).

## 5. Rendre compte

Afficher le chemin, le type détecté et le front matter généré. Proposer de câbler la
fiche dans les listes `hardware:` / `software:` / `ressources:` des ateliers concernés.
