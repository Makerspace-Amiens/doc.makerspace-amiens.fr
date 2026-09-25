---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Documenter les tests et résultats
subtitle: La preuve que le projet fonctionne, pas juste l'affirmation
description: Rédiger un protocole de test simple et présenter des résultats mesurés, pour prouver (pas seulement affirmer) que votre projet répond au besoin.
author: Adrien Bracq

time: 1
difficulty: 2
todo: 55

prerequisites:
  - label: Avoir un prototype testable
    link: ""
softwares:
  - label: Aucun logiciel requis
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---

## Le grand oublié de la documentation

Beaucoup de documentation de projet s'arrête à "voici comment ça marche",
sans jamais montrer "voici la preuve que ça marche vraiment, mesurée". Les
tests et leurs résultats sont pourtant ce qui distingue une affirmation
d'une preuve.

## Repartir des critères de réussite

Vos tests ne s'inventent pas au dernier moment : ils découlent directement
des critères de réussite du cahier des charges. Voir
[Définir son besoin](/workshops/methodologie-de-projet/concepts/definir-son-besoin/)
et son tableau des fonctions. Si le critère est "taux de tri ≥ 80% sur 20
essais", le test consiste littéralement à faire les 20 essais et compter.

## Un protocole de test simple

La page `docs/tests.md` de votre template suit cette structure : un tableau
de **synthèse** en tête (critère, valeur attendue, valeur mesurée, validé ou
non), puis une section par test. Dupliquez la section d'exemple pour chaque
critère de votre cahier des charges.

{% capture snippet_protocole %}## Test : taux de tri correct

**Critère visé :** ≥ 80 % sur 20 essais (voir le cahier des charges)

**Méthode :** déposer 20 déchets connus (mélange plastique/verre/métal)
un par un sur le tapis, noter la catégorie détectée par le robot.

**Conditions :** éclairage du Forum des Sciences (simulé avec ...),
température ambiante.

## Résultats

| Essai | Déchet réel | Détection | Correct ? |
|---|---|---|---|
| 1 | Plastique | Plastique | ✅ |
| 2 | Verre | Métal | ❌ |
| ... | ... | ... | ... |

**Résultat :** 17/20 = 85 % ; critère atteint.
{% endcapture %}
{% include code-snippet.html label="Copier le gabarit de protocole (Markdown)" content=snippet_protocole %}

## Présenter les résultats clairement

- **Un tableau** pour des mesures répétées (comme ci-dessus).
- **Une vidéo courte** pour un comportement dynamique (un mécanisme qui
  bouge, un système en fonctionnement) : souvent plus parlant qu'une
  description écrite.
- **Un graphique** si vous avez des mesures continues (température dans le
  temps, vitesse selon la charge). Le template sait en tracer un à partir
  d'un fichier CSV (voir juste en dessous).

### Tracer un graphique depuis un fichier CSV

Exportez vos mesures en CSV (tableur, moniteur série...) avec une ligne
d'en-tête : la première colonne sert d'axe X, chaque autre colonne est une
courbe, et le nom des colonnes sert de légende. Placez le fichier dans
`docs/assets/data/`, puis dans votre page :

{% raw %}
```liquid
{% include graphique.html csv="assets/data/mesures.csv" titre="Décharge de la batterie" y="Tension (V)" %}
```
{% endraw %}

L'option `type="bar"` trace un histogramme, `type="scatter"` des points
seuls. Un lien de téléchargement du CSV s'affiche sous le graphique. Le
template contient un exemple complet dans `docs/tests.md`, à remplacer par
vos mesures.

{% include message.html title="Montrez aussi les échecs" message="Un test qui échoue (3 essais ratés sur 20 dans l'exemple ci-dessus) n'est pas à cacher. Notez dans quelles conditions ça échoue : c'est une information aussi utile que le taux de succès, et ça rejoint la section « Limites connues » vue dans Rendre son projet transmissible." status="is-info" icon="fas fa-info-circle" %}

## Prouver par le calcul, pas seulement par la mesure

Un résultat mesuré ne prend tout son sens que s'il est comparé à une valeur
attendue. Pour tout ce qui relève de la mécanique, de l'électricité ou de
l'énergie, cette valeur se calcule à l'avance : c'est la **démonstration**.
Elle répond à « pourquoi ça devrait marcher ? » avant que le test réponde à
« est-ce que ça marche ? ».

Quand on compare le calcul et la mesure, trois cas sont possibles :

- **Ils concordent** : vous avez une preuve solide, et la formule vous dit
  jusqu'où vous pouvez pousser (charge maximale, autonomie, vitesse...).
- **Ils divergent un peu** : un écart est normal (frottements, tolérances,
  composants imparfaits), à condition de le chiffrer et de l'expliquer.
- **Ils divergent beaucoup** : une de vos hypothèses est fausse. C'est une
  information précieuse, à documenter comme un échec (voir l'encart
  ci-dessus).

Une démonstration lisible suit toujours les mêmes cinq temps :

1. **Hypothèses** : ce que vous supposez (batterie pleine, courant constant,
   frottements négligés...).
2. **Formule** : la loi physique ou la relation utilisée, avec le sens de
   chaque symbole et son unité.
3. **Calcul littéral** : isoler la grandeur cherchée *avant* de remplacer
   par des nombres.
4. **Application numérique** : remplacer par les valeurs, en gardant les
   unités.
5. **Comparaison avec la mesure** : écart, explication, conclusion.

{% include message.html title="Un calcul n'est pas une mesure" message="Le calcul donne la valeur d'un monde idéal, la mesure donne celle de votre prototype réel. Aucun des deux ne remplace l'autre : le calcul explique, la mesure confirme." status="is-info" icon="fas fa-info-circle" %}

## Écrire une formule dans une page Markdown

Markdown ne sait pas écrire de mathématiques. Le site de votre projet
s'appuie sur **MathJax**, une bibliothèque qui lit une formule écrite en
**LaTeX** (le langage de formules des scientifiques) et la dessine dans le
navigateur. Vous n'écrivez donc que du texte, et la mise en forme se fait
à l'affichage. Le trajet, de votre fichier à l'écran :

1. Vous écrivez la formule en LaTeX, entre deux `$$`, dans votre fichier
   `.md`.
2. Jekyll (le générateur du site) repère les `$$` et met la formule de
   côté, sans lui appliquer les règles du Markdown : les `_` et les `*`
   d'une formule ne deviennent donc pas de l'italique.
3. MathJax, chargé dans chaque page, repère ces formules et les dessine.

**Toujours deux `$$`, jamais un seul `$`.** Un `$` simple n'est pas reconnu :
la formule s'afficherait en texte brut, et le Markdown pourrait même la
déformer (un `*x*` deviendrait de l'italique).

Selon l'endroit où vous placez les `$$`, la formule reste dans le texte ou
se détache, centrée :

| Vous voulez | Vous écrivez | Résultat |
|---|---|---|
| Une formule **dans une phrase** | les `$$` au milieu d'une ligne de texte | la formule reste dans la ligne |
| Une formule **centrée**, mise en avant | les `$$` seuls sur leur ligne, avec **une ligne vide avant et une après** | la formule est centrée, sur sa propre ligne |

La ligne vide est indispensable : sans elle, la formule reste collée au
paragraphe précédent et redevient une formule « dans le texte ».

Voici ce que l'on écrit dans le fichier :

```markdown
Avec une batterie de capacité $$C = 2000\ \text{mAh}$$ et un courant moyen
de $$I_{\text{moy}} = 570\ \text{mA}$$, l'autonomie théorique vaut :

$$
t = \frac{C}{I_{\text{moy}}} = \frac{2000}{570} \approx 3{,}5\ \text{h}
$$
```

Et voici ce que le lecteur voit :

Avec une batterie de capacité $$C = 2000\ \text{mAh}$$ et un courant moyen
de $$I_{\text{moy}} = 570\ \text{mA}$$, l'autonomie théorique vaut :

$$
t = \frac{C}{I_{\text{moy}}} = \frac{2000}{570} \approx 3{,}5\ \text{h}
$$

### Les commandes les plus utiles

| Pour écrire | Vous tapez | Résultat |
|---|---|---|
| Une fraction | `\frac{a}{b}` | $$\frac{a}{b}$$ |
| Un exposant | `x^{2}` | $$x^{2}$$ |
| Un indice | `I_{\text{moy}}` | $$I_{\text{moy}}$$ |
| Une racine carrée | `\sqrt{x}` | $$\sqrt{x}$$ |
| Multiplier, environ, comparer | `\times` `\approx` `\geq` `\leq` | $$\times\ \approx\ \geq\ \leq$$ |
| Des lettres grecques | `\tau` `\Omega` `\pi` `\Delta` | $$\tau\ \Omega\ \pi\ \Delta$$ |
| Une valeur avec son unité | `2000\ \text{mAh}` | $$2000\ \text{mAh}$$ |
| Une virgule décimale | `3{,}5` | $$3{,}5$$ |
| Un pourcentage | `85\,\%` | $$85\,\%$$ |

Trois pièges classiques :

- **La virgule décimale** s'écrit `{,}` : avec une virgule seule, LaTeX ajoute
  une espace derrière et `3,5` s'affiche « 3, 5 ».
- **Le pourcentage** s'écrit `\%` : un `%` seul est pris pour un
  commentaire, et le reste de la ligne est ignoré.
- **Les mots et les unités** vont dans `\text{...}` : sans cela, `mAh` est
  affiché en italique comme un produit de trois variables `m`, `A` et `h`.
  Une espace s'écrit avec un antislash suivi d'une espace (comme dans
  `2000\ \text{mAh}`) ou avec `\,` (espace fine).

{% include message.html title="La formule s'affiche telle quelle ?" message="Si vous voyez les `$$` et les `\frac` en texte brut, MathJax n'est pas chargé dans votre site. Vérifiez que le fichier `docs/_includes/head_custom.html` contient la ligne ci-dessous (créez-le, ainsi que le dossier `_includes`, s'il n'existe pas). S'il existe déjà, ajoutez la ligne à la suite sans rien effacer." status="is-warning" icon="fas fa-exclamation-triangle" %}

```html
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-chtml.js"></script>
```

Pour aller plus loin (les bases du Markdown sont dans
[Syntaxe Markdown](/workshops/methodologie-de-projet/tutorials/syntaxe-markdown/)) :

- [Documentation de MathJax](https://docs.mathjax.org/en/latest/) : la
  référence officielle.
- [Commandes TeX/LaTeX reconnues par MathJax](https://docs.mathjax.org/en/latest/input/tex/macros/index.html) :
  la liste complète des commandes utilisables.
- [Aide-mémoire MathJax (Mathematics Stack Exchange)](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference) :
  tutoriel et référence rapide, très utilisé.
- [Lettres grecques et symboles mathématiques (Overleaf)](https://www.overleaf.com/learn/latex/List_of_Greek_letters_and_math_symbols) :
  pour retrouver la commande d'un symbole.

## Exemple complet : l'autonomie sur batterie du robot de tri

Reprenons le critère « autonomie ≥ 4 h » et déroulons les cinq temps de la
démonstration.

**1. Hypothèses.** Batterie pleine, courant moyen constant pendant toute la
durée, capacité utile égale à la capacité annoncée (pas de perte).

**2. Formule.** La capacité d'une batterie est la charge électrique qu'elle
peut fournir : elle vaut le courant multiplié par la durée.

$$
C = I_{\text{moy}} \times t
$$

avec $$C$$ la capacité (en mAh), $$I_{\text{moy}}$$ le courant moyen (en mA) et
$$t$$ la durée (en h).

**3. Calcul littéral.** On isole $$t$$, la grandeur cherchée. Les `&` alignent
les signes égal et `\\` passe à la ligne :

```markdown
$$
\begin{aligned}
C &= I_{\text{moy}} \times t \\
t &= \frac{C}{I_{\text{moy}}}
\end{aligned}
$$
```

$$
\begin{aligned}
C &= I_{\text{moy}} \times t \\
t &= \frac{C}{I_{\text{moy}}}
\end{aligned}
$$

**4. Application numérique.** On remplace, unités comprises :

$$
t = \frac{2000\ \text{mAh}}{570\ \text{mA}} \approx 3{,}5\ \text{h}
$$

Les unités se simplifient bien en heures ($$\text{mAh} / \text{mA} = \text{h}$$) :
c'est un contrôle gratuit. Si vous obtenez une autre unité que celle
attendue, la formule est fausse.

**5. Comparaison avec la mesure.** Le test donne 3 h 30, soit $$3{,}5\ \text{h}$$ :
le calcul et la mesure concordent, le modèle est bon. Mais le critère du
cahier des charges (≥ 4 h) n'est pas atteint, et la même formule dit quoi
changer :

$$
I_{\text{moy}} \leq \frac{C}{t_{\text{visé}}} = \frac{2000}{4} = 500\ \text{mA}
\qquad \text{ou} \qquad
C \geq I_{\text{moy}} \times t_{\text{visé}} = 570 \times 4 = 2280\ \text{mAh}
$$

Il faut donc ramener la consommation moyenne de 570 mA à 500 mA (mise en
veille du capteur entre deux déchets, par exemple), ou passer à une batterie
d'au moins 2280 mAh. C'est cette démonstration, et pas seulement le chiffre
mesuré, qui rend votre choix de solution crédible.

{% capture snippet_demo %}## Démonstration : autonomie théorique

**Hypothèses** : batterie pleine, courant moyen constant, pas de perte.

**Formule** :

$$
t = \frac{C}{I_{\text{moy}}}
$$

avec $$C$$ la capacité (mAh), $$I_{\text{moy}}$$ le courant moyen (mA) et
$$t$$ la durée (h).

**Application numérique** :

$$
t = \frac{... \text{ mAh}}{... \text{ mA}} \approx ...\ \text{h}
$$

**Mesure** : ... h. **Écart** : ... %. **Conclusion** : ...
{% endcapture %}
{% include code-snippet.html label="Copier le gabarit de démonstration (Markdown)" content=snippet_demo %}

## Exercice

Choisissez un critère de réussite de votre cahier des charges, écrivez son
protocole de test avec le gabarit ci-dessus, exécutez-le réellement, et
notez les résultats, y compris les échecs.

Si votre critère est chiffré (une masse soulevée, un courant, une vitesse,
une durée...), écrivez d'abord la démonstration qui prédit le résultat, avec
les formules, puis comparez-la à ce que vous avez mesuré.
