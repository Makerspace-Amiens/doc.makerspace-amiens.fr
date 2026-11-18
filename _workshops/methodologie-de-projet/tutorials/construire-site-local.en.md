---
layout: documentation
lang: en
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Building your Jekyll site locally
subtitle: See the final result before publishing, without waiting for GitHub
description: Install Ruby and Jekyll to preview your documentation site on your machine, with automatic reloading at every change.
author: Adrien Bracq

time: 2
difficulty: 2
todo: 60

prerequisites:
  - label: Have cloned your repo (see the dedicated tutorial)
    link: /workshops/methodologie-de-projet/tutorials/creer-repo-template/
softwares:
  - label: Ruby and Bundler
    link: "https://www.ruby-lang.org"
hardwares:
  - label: No machine required
    link: ""
---

## Why build locally

Editing from GitHub (previous tutorial) does not show the final result
with the site's real theme. Locally, `jekyll serve` rebuilds the site at
every save and displays it in your browser within a few seconds:
you see the result immediately, without publishing anything.

## Installing Ruby 3.3 and Bundler

{% include message.html title="Mind the version: Ruby 3.3.x" message="Install **Ruby 3.3** (any 3.3.x version), not the latest version of Ruby. The template's site uses the `github-pages` gem, which pins old versions of Jekyll; with Ruby 3.4 or later, `bundle install` or `jekyll serve` fail (for example `cannot load such file -- csv`). It is also the version GitHub uses to build your site (`ruby-version: '3.3'` in `.github/workflows/ci.yml` and `pages.yml`): same version locally and online, same result." status="is-warning" icon="fas fa-exclamation-triangle" %}

{% capture tab1 %}

On the [RubyInstaller](https://rubyinstaller.org/downloads/) download page, do not take the highlighted version: choose **Ruby+Devkit 3.3.x (x64)** in the list (the most recent 3.3 version).

During installation, keep the option that adds Ruby to the PATH ticked. At the end, leave the **`ridk install`** box ticked: a console opens and offers to install MSYS2 and the build toolchain; press `Enter` to accept the default choice. This Devkit is essential: on Windows, `bundle install` has to compile some gems.

Close and reopen the terminal, then check:

```bash
ruby -v
gem install bundler
```

`ruby -v` must display `ruby 3.3.x`.

{% endcapture %}

{% capture tab2 %}

With [Homebrew](https://brew.sh), install version 3.3 explicitly (`brew install ruby` would install the latest version):

```bash
brew install ruby@3.3
echo 'export PATH="$(brew --prefix ruby@3.3)/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
ruby -v
gem install bundler
```

`ruby@3.3` does not replace the Ruby supplied with macOS: the line added to `~/.zshrc` puts it first in the PATH. `ruby -v` must display `ruby 3.3.x`, and not `ruby 2.6` (the macOS one).

{% endcapture %}

{% capture tab3 %}

Start by checking the version offered by your distribution:

```bash
apt-cache policy ruby
```

**If the candidate version starts with `1:3.3`** (this is the case with Ubuntu 26.04, for example), install it directly:

```bash
sudo apt update
sudo apt install ruby-full build-essential zlib1g-dev
gem install bundler
```

**Otherwise** (Ubuntu 24.04 and Debian 12 provide an older version, others a more recent one), install Ruby 3.3 with [rbenv](https://github.com/rbenv/rbenv), which compiles Ruby in your home folder:

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

Compilation takes a few minutes. In all cases, `ruby -v` must display `ruby 3.3.x`.

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

{% include message.html title="No administrator rights?" message="rbenv (Linux tab) installs Ruby in your home folder: only the installation of the build tools (`apt install`) requires sudo. If they are already present on the machine, you can skip that line." status="is-info" icon="fas fa-info-circle" %}

## Installing the project dependencies

{% include step-tuto.html
  greyBackground=true
  title="bundle install"
  content="The site is in the `docs/` folder of your repo, with its own `Gemfile`. In a terminal, go to that folder:

```bash
cd docs
bundle install
```

This installs all the gems needed (Jekyll, the theme, etc.), listed in the template's `docs/Gemfile` file. All the commands in this tutorial are run from `docs/`, not from the root of the repo." %}

{% include message.html title="Permission error on /var/lib/gems or /usr/lib/ruby" message="Without root rights, Bundler cannot write to the system gems folder. Configure it to install locally to the project instead:

```bash
bundle config set --local path 'vendor/bundle'
bundle install
```

The `vendor/` folder is already ignored by Git (see `.gitignore`), so it does not clutter your repo." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Starting the local server

{% include step-tuto.html
  greyBackground=true
  title="jekyll serve"
  content="Still from the `docs/` folder:

```bash
bundle exec jekyll serve
```

Then open [http://localhost:4000](http://localhost:4000) in your browser. The site reloads automatically every time a file is modified and saved. `Ctrl+C` in the terminal stops the server." %}

## Troubleshooting

| Symptom | Likely cause | Solution |
|---|---|---|
| `cannot load such file -- csv` (or `base64`, `bigdecimal`...) when starting `jekyll serve` | Ruby 3.4 or later: these libraries are no longer built in, and the pinned versions of Jekyll need them | Install Ruby 3.3 (see above), check with `ruby -v`, then run `bundle install` again |
| `ruby -v` does not display `3.3.x` although Ruby 3.3 is installed | Another version of Ruby comes first in the PATH (macOS Ruby, system package on Linux) | Reopen the terminal after editing `~/.zshrc` or `~/.bashrc`; `which ruby` shows which Ruby is used |
| On Windows, `bundle install` fails while compiling a gem (`Failed to build gem native extension`) | The Devkit (MSYS2) is not installed | Run `ridk install` in a terminal and accept the default choice, then run `bundle install` again |
| `bundle: command not found` although the installation seemed to succeed | The `bundler` gem is installed in a folder missing from the PATH (frequent without root rights, a folder like `~/.local/share/gem/ruby/<version>/bin`) | Add this folder to the PATH: `export PATH="$PATH:$(ruby -e 'puts Gem.user_dir')/bin"`, then add this line to `~/.bashrc` to make it permanent |
| `bundle install` fails with a permission error on a system folder | No root rights to write to the shared gems folder | See the box above: configure `bundle config set --local path 'vendor/bundle'` |
| One terminal sees neither `ruby` nor `bundle` although another terminal sees them | The terminal used runs in non-interactive `sh` mode (does not load `~/.bashrc`), or (on Linux with VSCode installed as a Flatpak) the integrated terminal runs in the Flatpak sandbox, isolated from the host system | Try `exec bash -l`; if the problem persists with VSCode as a Flatpak, reinstall it as a native `.deb`/`.rpm`, or use `flatpak-spawn --host bash -l` |
| `Could not locate Gemfile` or `bundle exec jekyll` not found | You are at the root of the repo, not in `docs/` | Run `cd docs`, then run the command again |
| The site builds but a page shows an error or does not display | Error in the YAML front matter (indentation, missing quotes) | Read the error message displayed in the terminal at build time; it generally names the file at fault |

## Exercise

Install Ruby and Bundler if you have not already done so, run
`bundle exec jekyll serve` from the `docs/` folder of your repo, and check that
`http://localhost:4000` does display your site with your latest
changes.
