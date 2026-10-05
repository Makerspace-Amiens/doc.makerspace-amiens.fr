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

## Installer Ruby 3.3 et Bundler

{% include message.html title="Attention à la version : Ruby 3.3.x" message="Installez **Ruby 3.3** (n'importe quelle version 3.3.x), pas la dernière version de Ruby. Le site du template utilise la gem `github-pages`, qui fige des versions anciennes de Jekyll ; avec Ruby 3.4 ou plus récent, `bundle install` ou `jekyll serve` échouent (par exemple `cannot load such file -- csv`). C'est aussi la version utilisée par GitHub pour construire votre site (`ruby-version: '3.3'` dans `.github/workflows/ci.yml` et `pages.yml`) : même version en local et en ligne, même résultat." status="is-warning" icon="fas fa-exclamation-triangle" %}

{% capture tab1 %}

Sur la page de téléchargement de [RubyInstaller](https://rubyinstaller.org/downloads/), ne prenez pas la version mise en avant : choisissez **Ruby+Devkit 3.3.x (x64)** dans la liste (la version 3.3 la plus récente).

Pendant l'installation, gardez cochée l'option qui ajoute Ruby au PATH. À la fin, laissez cochée la case **`ridk install`** : une console s'ouvre et propose d'installer MSYS2 et la chaîne de compilation, appuyez sur `Entrée` pour accepter le choix par défaut. Ce Devkit est indispensable : sous Windows, `bundle install` doit compiler certaines gems.

Fermez puis rouvrez le terminal, et vérifiez :

```bash
ruby -v
gem install bundler
```

`ruby -v` doit afficher `ruby 3.3.x`.

{% endcapture %}

{% capture tab2 %}

Avec [Homebrew](https://brew.sh), installez la version 3.3 explicitement (`brew install ruby` installerait la dernière version) :

```bash
brew install ruby@3.3
echo 'export PATH="$(brew --prefix ruby@3.3)/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
ruby -v
gem install bundler
```

`ruby@3.3` ne remplace pas le Ruby fourni par macOS : la ligne ajoutée à `~/.zshrc` le place en premier dans le PATH. `ruby -v` doit afficher `ruby 3.3.x`, et non `ruby 2.6` (celui de macOS).

{% endcapture %}

{% capture tab3 %}

Commencez par vérifier la version proposée par votre distribution :

```bash
apt-cache policy ruby
```

**Si la version candidate commence par `1:3.3`** (c'est le cas d'Ubuntu 26.04, par exemple), installez-la directement :

```bash
sudo apt update
sudo apt install ruby-full build-essential zlib1g-dev
gem install bundler
```

**Sinon** (Ubuntu 24.04 et Debian 12 fournissent une version plus ancienne, d'autres une plus récente), installez Ruby 3.3 avec [rbenv](https://github.com/rbenv/rbenv), qui compile Ruby dans votre dossier personnel :

```bash
sudo apt update
sudo apt install git build-essential libssl-dev libyaml-dev zlib1g-dev libffi-dev libreadline-dev
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'eval "$(~/.rbenv/bin/rbenv init - bash)"' >> ~/.bashrc
source ~/.bashrc
rbenv install $(rbenv install -l | grep -E '^3\.3\.' | tail -1)
rbenv global $(rbenv versions --bare | grep -E '^3\.3\.' | tail -1)
gem install bundler
```

La compilation prend quelques minutes. Dans tous les cas, `ruby -v` doit afficher `ruby 3.3.x`.

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

{% include message.html title="Pas de droits administrateur ?" message="rbenv (onglet Linux) installe Ruby dans votre dossier personnel : seule l'installation des outils de compilation (`apt install`) demande sudo. S'ils sont déjà présents sur la machine, vous pouvez sauter cette ligne." status="is-info" icon="fas fa-info-circle" %}

## Installer les dépendances du projet

{% include step-tuto.html
  greyBackground=true
  title="bundle install"
  content="Le site se trouve dans le dossier `docs/` de votre repo, avec son propre `Gemfile`. Dans un terminal, placez-vous dans ce dossier :

```bash
cd docs
bundle install
```

Ça installe toutes les gems nécessaires (Jekyll, le thème, etc.), listées dans le fichier `docs/Gemfile` du template. Toutes les commandes de ce tutoriel se lancent depuis `docs/`, pas depuis la racine du repo." %}

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
  content="Toujours depuis le dossier `docs/` :

```bash
bundle exec jekyll serve
```

Ouvrez ensuite [http://localhost:4000](http://localhost:4000) dans votre navigateur. Le site se recharge automatiquement à chaque fichier modifié et sauvegardé. `Ctrl+C` dans le terminal pour arrêter le serveur." %}

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| `cannot load such file -- csv` (ou `base64`, `bigdecimal`...) au lancement de `jekyll serve` | Ruby 3.4 ou plus récent : ces bibliothèques n'y sont plus intégrées, et les versions figées de Jekyll en ont besoin | Installez Ruby 3.3 (voir plus haut), vérifiez avec `ruby -v`, puis relancez `bundle install` |
| `ruby -v` n'affiche pas `3.3.x` alors que Ruby 3.3 est installé | Une autre version de Ruby passe avant dans le PATH (Ruby de macOS, paquet système sous Linux) | Rouvrez le terminal après avoir modifié `~/.zshrc` ou `~/.bashrc` ; `which ruby` indique quel Ruby est utilisé |
| Sous Windows, `bundle install` échoue en compilant une gem (`Failed to build gem native extension`) | Le Devkit (MSYS2) n'est pas installé | Lancez `ridk install` dans un terminal et acceptez le choix par défaut, puis relancez `bundle install` |
| `bundle: commande introuvable` alors que l'installation semblait réussie | La gem `bundler` est installée dans un dossier absent du PATH (fréquent sans droits root, dossier type `~/.local/share/gem/ruby/<version>/bin`) | Ajoutez ce dossier au PATH : `export PATH="$PATH:$(ruby -e 'puts Gem.user_dir')/bin"`, puis ajoutez cette ligne à `~/.bashrc` pour que ce soit permanent |
| `bundle install` échoue avec une erreur de permission sur un dossier système | Pas de droits root pour écrire dans le dossier de gems partagé | Voir l'encart ci-dessus : configurez `bundle config set --local path 'vendor/bundle'` |
| Un terminal ne voit ni `ruby` ni `bundle` alors qu'un autre terminal les voit | Le terminal utilisé tourne en mode `sh` non interactif (ne charge pas `~/.bashrc`), ou (sous Linux avec VSCode installé en Flatpak) le terminal intégré tourne dans le bac à sable Flatpak, isolé du système hôte | Essayez `exec bash -l` ; si le souci persiste avec VSCode en Flatpak, réinstallez-le en `.deb`/`.rpm` natif, ou utilisez `flatpak-spawn --host bash -l` |
| `Could not locate Gemfile` ou `bundle exec jekyll` introuvable | Vous êtes à la racine du repo, pas dans `docs/` | Faites `cd docs`, puis relancez la commande |
| Le site build mais une page affiche une erreur ou ne s'affiche pas | Erreur dans le front matter YAML (indentation, guillemets manquants) | Lisez le message d'erreur affiché dans le terminal au moment du build, il indique généralement le fichier en cause |

## Exercice

Installez Ruby et Bundler si ce n'est pas déjà fait, lancez
`bundle exec jekyll serve` depuis le dossier `docs/` de votre repo, et vérifiez que
`http://localhost:4000` affiche bien votre site avec vos dernières
modifications.
