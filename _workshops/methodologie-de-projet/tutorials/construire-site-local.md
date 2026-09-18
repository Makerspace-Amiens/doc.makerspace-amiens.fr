---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Construire son site Jekyll en local
subtitle: Voir le rendu final avant de publier, sans attendre GitHub
description: Installer Ruby et Jekyll pour prévisualiser votre site de documentation sur votre machine, avec rechargement automatique à chaque modification.
author: Adrien Bracq

time: 2
difficulty: 2
todo: 60

prerequisites:
  - label: Avoir cloné votre repo (voir le tutoriel dédié)
    link: /workshops/methodologie-de-projet/tutorials/creer-repo-template/
softwares:
  - label: Ruby et Bundler
    link: "https://www.ruby-lang.org"
hardwares:
  - label: Aucune machine requise
    link: ""
---

## Pourquoi construire en local

L'édition depuis GitHub (tutoriel précédent) ne montre pas le rendu final
avec le vrai thème du site. En local, `jekyll serve` reconstruit le site à
chaque sauvegarde et l'affiche dans votre navigateur en quelques secondes :
vous voyez immédiatement le résultat, sans rien publier.

## Installer Ruby et Bundler

{% capture tab1 %}

Téléchargez et installez Ruby via
[RubyInstaller](https://rubyinstaller.org) (cochez l'option qui ajoute
Ruby au PATH pendant l'installation). Redémarrez l'ordinateur, puis dans un
terminal :

```bash
ruby -v
gem install bundler
```

{% endcapture %}

{% capture tab2 %}

Avec [Homebrew](https://brew.sh) :

```bash
brew install ruby
gem install bundler
```

{% endcapture %}

{% capture tab3 %}

```bash
sudo apt update
sudo apt install ruby-full build-essential zlib1g-dev
gem install bundler
```

{% endcapture %}

{% include content-tabs.html
  id="install-ruby"
  tab_title1="Windows"
  tab_title2="macOS"
  tab_title3="Linux (Debian/Ubuntu)"
  tab1=tab1
  tab2=tab2
  tab3=tab3
%}

{% include message.html title="Pas de droits administrateur ?" message="Si vous ne pouvez pas installer de paquets système (pas de sudo), installez Ruby en espace utilisateur avec rbenv (github.com/rbenv/rbenv), plus long à mettre en place, mais ne nécessite aucun droit root." status="is-info" icon="fas fa-info-circle" %}

## Installer les dépendances du projet

{% include step-tuto.html
  greyBackground=true
  title="bundle install"
  content="Dans un terminal, à la racine de votre repo cloné :

```bash
bundle install
```

Ça installe toutes les gems nécessaires (Jekyll, le thème, etc.), listées dans le fichier `Gemfile` du template." %}

{% include message.html title="Erreur de permission sur /var/lib/gems ou /usr/lib/ruby" message="Sans droits root, Bundler ne peut pas écrire dans le dossier système des gems. Configurez-le pour installer localement au projet à la place :

```bash
bundle config set --local path 'vendor/bundle'
bundle install
```

Le dossier `vendor/` est déjà ignoré par Git (voir `.gitignore`), ça ne pollue pas votre repo." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Lancer le serveur local

{% include step-tuto.html
  greyBackground=true
  title="jekyll serve"
  content="

```bash
bundle exec jekyll serve
```

Ouvrez ensuite [http://localhost:4000](http://localhost:4000) dans votre navigateur. Le site se recharge automatiquement à chaque fichier modifié et sauvegardé. `Ctrl+C` dans le terminal pour arrêter le serveur." %}

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| `bundle: commande introuvable` alors que l'installation semblait réussie | La gem `bundler` est installée dans un dossier absent du PATH (fréquent sans droits root, dossier type `~/.local/share/gem/ruby/<version>/bin`) | Ajoutez ce dossier au PATH : `export PATH="$PATH:$(ruby -e 'puts Gem.user_dir')/bin"`, puis ajoutez cette ligne à `~/.bashrc` pour que ce soit permanent |
| `bundle install` échoue avec une erreur de permission sur un dossier système | Pas de droits root pour écrire dans le dossier de gems partagé | Voir l'encart ci-dessus : configurez `bundle config set --local path 'vendor/bundle'` |
| Un terminal ne voit ni `ruby` ni `bundle` alors qu'un autre terminal les voit | Le terminal utilisé tourne en mode `sh` non interactif (ne charge pas `~/.bashrc`), ou (sous Linux avec VSCode installé en Flatpak) le terminal intégré tourne dans le bac à sable Flatpak, isolé du système hôte | Essayez `exec bash -l` ; si le souci persiste avec VSCode en Flatpak, réinstallez-le en `.deb`/`.rpm` natif, ou utilisez `flatpak-spawn --host bash -l` |
| Le site build mais une page affiche une erreur ou ne s'affiche pas | Erreur dans le front matter YAML (indentation, guillemets manquants) | Lisez le message d'erreur affiché dans le terminal au moment du build, il indique généralement le fichier en cause |

## Exercice

Installez Ruby et Bundler si ce n'est pas déjà fait, lancez
`bundle exec jekyll serve` sur votre repo, et vérifiez que
`http://localhost:4000` affiche bien votre site avec vos dernières
modifications.
