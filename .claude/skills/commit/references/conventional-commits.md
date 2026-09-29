# Conventional Commits 1.0.0

Résumé de la spécification officielle : <https://www.conventionalcommits.org/en/v1.0.0/>
(licence CC BY 3.0). En cas de doute, la page en ligne fait foi.

## Format

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Les 16 règles de la spécification

1. Un commit **DOIT** être préfixé par un type (un nom, ex. `feat`, `fix`), suivi d'un
   scope optionnel, d'un `!` optionnel, puis d'un **deux-points suivi d'une espace**,
   obligatoire.
2. Le type `feat` **DOIT** être utilisé quand le commit ajoute une fonctionnalité.
3. Le type `fix` **DOIT** être utilisé quand le commit corrige un bug.
4. Un scope **PEUT** suivre le type : un nom entre parenthèses décrivant une section du
   code (ex. `fix(parser):`).
5. Une description **DOIT** suivre immédiatement ce deux-points et résumer brièvement le
   changement.
6. Un corps plus long **PEUT** suivre la description, après **une ligne vide**.
7. Le corps est libre et **PEUT** contenir plusieurs paragraphes séparés par des retours
   à la ligne.
8. Un ou plusieurs footers **PEUVENT** apparaître après une ligne vide suivant le corps.
   Chaque footer est composé d'un token, d'un séparateur (deux-points + espace, ou
   espace + `#`) et d'une valeur.
9. Un token de footer **DOIT** utiliser des tirets à la place des espaces
   (ex. `Acked-by`), à l'exception de `BREAKING CHANGE`.
10. La valeur d'un footer **PEUT** contenir espaces et retours à la ligne ; l'analyse
    s'arrête au prochain couple token + séparateur valide.
11. Un changement cassant **DOIT** être signalé dans le préfixe type/scope **ou** dans un
    footer.
12. En footer, un changement cassant s'écrit `BREAKING CHANGE:` suivi d'une espace et de
    sa description.
13. Dans le préfixe, un changement cassant s'écrit avec un `!` avant les deux-points ; le
    footer `BREAKING CHANGE:` **PEUT** alors être omis.
14. D'autres types que `feat` et `fix` **PEUVENT** être utilisés (ex. `docs:`).
15. Les unités d'information ne sont **PAS** sensibles à la casse, sauf `BREAKING CHANGE`
    qui **DOIT** être en majuscules.
16. `BREAKING-CHANGE` est synonyme de `BREAKING CHANGE` en tant que token de footer.

## Exemples canoniques

Description seule :

```text
docs: correct spelling of CHANGELOG
```

Avec scope :

```text
feat(lang): add Polish language
```

Changement cassant signalé par `!` :

```text
feat!: send an email to the customer when a product is shipped
```

Changement cassant signalé par un footer :

```text
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

Corps multi-paragraphes et footers :

```text
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## Pourquoi cette convention

- Génération automatique de CHANGELOG.
- Détermination automatique de la version sémantique (`fix` → PATCH, `feat` → MINOR,
  `BREAKING CHANGE` → MAJOR).
- Communication claire de la nature des changements aux autres personnes du projet.
- Déclenchement de builds et de publications automatisés.
- Historique lisible, facilitant l'exploration du projet par les contributeurs.
