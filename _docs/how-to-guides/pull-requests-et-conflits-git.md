---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true
type: how-to

title: Utiliser les Pull Requests et résoudre un conflit Git
subtitle: Utilisation avancée de Git, pas indispensable pour tous les projets
description: Faire relire son travail avant de le fusionner dans la branche principale via une Pull Request, et résoudre proprement un conflit quand deux modifications se percutent.
author: Adrien Bracq

time: 1
difficulty: 3

prerequisites:
  - label: Connaître le cycle stage / commit / push
    link: /workshops/methodologie-de-projet/tutorials/git-github-desktop-vscode/
softwares:
  - label: GitHub Desktop ou VSCode
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---

## Contexte

{% include message.html title="Pas indispensable pour tous les projets" message="La plupart des petites équipes travaillent très bien directement sur main avec le cycle stage / commit / push de base. Ce guide devient utile quand l'équipe grandit, que plusieurs personnes touchent souvent aux mêmes fichiers, ou que vous voulez qu'un camarade relise le code avant qu'il ne parte dans le projet. Ne vous sentez pas obligés d'en être là." status="is-info" icon="fas fa-info-circle" %}

Ce guide combine deux compétences liées : proposer son travail via une
**Pull Request** pour qu'il soit relu avant d'atteindre la branche
principale, et résoudre un **conflit Git**, qui survient justement le
plus souvent au moment de fusionner une Pull Request.

## Prérequis

- Être à l'aise avec le cycle stage / commit / push de base : voir
  [Git, GitHub Desktop et VSCode](/workshops/methodologie-de-projet/tutorials/git-github-desktop-vscode/).

## Procédure

### 1. Pourquoi ne pas pousser directement sur `main`

Travailler directement sur la branche principale (`main`) fonctionne tant
qu'on est seul. À plusieurs, ça mène vite à des conflits et à du code non
relu qui casse ce qui marchait. Une **Pull Request** (PR) propose vos
modifications, les rend visibles avant qu'elles n'atteignent `main`, et
donne à quelqu'un d'autre l'occasion de les relire.

```mermaid!
graph LR
    A[Créer une branche] --> B[Travailler, committer]
    B --> C[Ouvrir une Pull Request]
    C --> D[Relecture par un camarade]
    D -->|à corriger| B
    D -->|approuvé| E[Merge dans main]
    E -.parfois.-> F[Conflit à résoudre]
```

### 2. Créer une branche

{% include step-tuto.html
  greyBackground=true
  title="Nouvelle branche"
  content="**Avec GitHub Desktop** : `Current branch` en haut, puis `New branch`, donnez un nom court décrivant la tâche (ex. `moteur-pas-a-pas`, pas `fix` ou `test`).

**Avec VSCode** : cliquez sur le nom de branche en bas à gauche, `Create new branch`, entrez le nom.

Travaillez et committez normalement sur cette branche : voir [Git, GitHub Desktop et VSCode](/workshops/methodologie-de-projet/tutorials/git-github-desktop-vscode/)." %}

### 3. Ouvrir la Pull Request

{% include step-tuto.html
  greyBackground=true
  title="Créer la PR"
  content="Une fois vos commits pushés sur la branche, allez sur GitHub.com : un bandeau propose directement **Compare & pull request**. Sinon, onglet **Pull requests**, bouton **New pull request**, choisissez votre branche.

Donnez un titre clair et une description : ce qui a changé, pourquoi, et ce qu'il faut vérifier en particulier. Dans le panneau de droite, ajoutez un **Reviewer** (la personne qui va relire)." %}

### 4. Relire le travail d'un camarade

{% include step-tuto.html
  greyBackground=true
  title="Faire une review"
  content="Sur la PR, onglet **Files changed** : chaque ligne modifiée est affichée avec un `+`/`-`. Survolez une ligne et cliquez sur le `+` bleu pour laisser un commentaire dessus. Une fois la relecture terminée, bouton **Review changes** en haut à droite : choisissez **Comment** (remarques sans bloquer), **Approve** (validé), ou **Request changes** (à corriger avant de merger)." %}

{% include message.html title="Relire, ce n'est pas juste dire oui" message="Une bonne relecture pose des questions : « pourquoi ce choix ? », « ça fonctionne aussi dans tel cas ? ». Ce n'est pas un obstacle administratif, c'est le moment où un deuxième regard attrape ce que le premier n'a pas vu." status="is-info" icon="fas fa-info-circle" %}

### 5. Fusionner (merge)

{% include step-tuto.html
  greyBackground=true
  title="Merge"
  content="Une fois la PR approuvée, bouton **Merge pull request** puis **Confirm merge**. Supprimez ensuite la branche (bouton proposé juste après) : elle a fait son travail, la garder ne sert à rien.

Si GitHub affiche **This branch has conflicts that must be resolved**, passez à la section suivante avant de pouvoir merger." %}

### 6. Si un conflit apparaît

Un conflit survient quand deux personnes ont modifié **les mêmes lignes**
du même fichier, sur des branches différentes. Git sait fusionner
automatiquement des modifications sur des lignes différentes. Sur les
mêmes lignes, il ne peut pas deviner laquelle garder, et vous le demande.

{% include message.html title="Ce n'est pas une erreur" message="Un conflit n'est pas le signe que vous avez mal fait quelque chose. C'est le fonctionnement normal de Git dès qu'une équipe travaille en parallèle sur les mêmes fichiers." status="is-info" icon="fas fa-info-circle" %}

Il apparaît généralement lors d'un `git pull`, d'un merge, ou en essayant
de fusionner une Pull Request. Git affiche un message du type
`CONFLICT (content): Merge conflict in <fichier>`, et le fichier concerné
contient des marqueurs spéciaux :

```text
<<<<<<< HEAD
Votre version des lignes en conflit
=======
La version de l'autre branche
>>>>>>> nom-de-la-branche
```

{% include step-tuto.html
  greyBackground=true
  title="Ouvrir le fichier en conflit dans VSCode"
  content="VSCode détecte automatiquement les marqueurs de conflit et affiche, au-dessus de chaque bloc, des liens cliquables : **Accept Current Change** (garder votre version), **Accept Incoming Change** (garder l'autre), **Accept Both Changes** (garder les deux), ou **Compare Changes** (voir les deux côte à côte)." %}

{% include step-tuto.html
  greyBackground=true
  title="Choisir la bonne version"
  content="Ne cliquez pas au hasard : lisez les deux versions, et si besoin, discutez-en avec la personne qui a écrit l'autre version. Le résultat final ne doit contenir **aucun** marqueur `<<<<<<<`, `=======`, `>>>>>>>` restant : vérifiez en relisant le fichier entier une fois terminé." %}

{% include step-tuto.html
  greyBackground=true
  title="Finaliser"
  content="Une fois tous les conflits du fichier résolus : stage le fichier, committez avec un message du type « Résout le conflit sur main.ino », puis push normalement." %}

{% include message.html title="En cas de doute" message="Un conflit mal résolu peut faire disparaître silencieusement le travail de quelqu'un. Dans le doute, contactez la personne dont vous écrasez potentiellement le travail plutôt que de trancher seul." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Pourquoi les conflits arrivent moins souvent qu'on ne le croit

Des commits petits et fréquents, plutôt que d'énormes commits accumulés
pendant des jours, réduisent fortement la fréquence et la taille des
conflits : voir [Git, GitHub Desktop et VSCode](/workshops/methodologie-de-projet/tutorials/git-github-desktop-vscode/).
Travailler sur des branches séparées par brique du projet (voir
[Constituer et organiser son équipe](/workshops/methodologie-de-projet/concepts/constituer-organiser-equipe/))
aide aussi, puisque les mêmes fichiers sont alors modifiés par moins de
personnes en parallèle.

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| Bouton "Merge" grisé | Un reviewer a demandé des changements, pas encore résolus | Corrigez, repushez sur la même branche, la PR se met à jour automatiquement |
| Personne ne relit jamais les PR | Pas de reviewer assigné, ou pas d'habitude d'équipe prise | Assignez systématiquement un reviewer, décidé au point de synchro |
| Le fichier contient encore `<<<<<<<` après commit | Marqueurs oubliés, non retirés avant de committer | Rouvrez le fichier, supprimez les marqueurs restants, recommittez |
| Conflit sur presque tous les fichiers | Les deux branches ont trop divergé | Faites des `pull`/merges plus fréquents à l'avenir pour rester proche de `main` |
| Peur de perdre du travail en résolvant | Compréhensible, mais Git garde l'historique | Les deux versions restent visibles dans l'historique des commits, rien n'est perdu définitivement |

## Exercice

Sur votre projet, faites une PR pour votre prochaine petite modification :
créez une branche, committez, ouvrez la PR, demandez à un camarade de la
relire avant de merger. Si un conflit se présente à cette occasion (ou
provoquez-en un volontairement à deux, sans enjeu réel, pour vous
entraîner), résolvez-le en suivant la procédure ci-dessus.
