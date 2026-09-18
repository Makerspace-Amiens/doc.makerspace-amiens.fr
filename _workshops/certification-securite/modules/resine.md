---
layout: documentation
hide_hero: false
hero_image: resine.jpg
hero_darken: true
image: resine.jpg
component_toc: true
doc_header: true

title: Résine
subtitle: "Niveau 2 : Accompagnée, sessions programmées"
description: Contact cutané, isopropanol et exposition UV à maîtriser avant d'utiliser l'imprimante résine.
author: Adrien Bracq

hardwares:
  - label: Phrozen Sonic Mighty 4K
    link: /docs/references/machines/phrozen_mighty_4k/
  - label: Station de lavage et polymérisation UV
    link: /docs/references/machines/station-lavage-polymerisation-uv/
  - label: Sorbonne ChemFAST Elite 15
    link: /docs/references/machines/sorbonne-chemfast-elite-15/
---

## À qui s'adresse ce module

À tout usager du Campus souhaitant utiliser l'imprimante résine ou la station de lavage et polymérisation UV du MakerSpace. L'usage de ces machines est encore marginal : ce module n'est pas ouvert en continu, mais proposé via quelques sessions dédiées programmées dans l'année. Contactez le responsable MakerSpace pour connaître les prochaines dates ou exprimer votre intérêt.

## Pourquoi ce niveau de vigilance

Contrairement au FDM, la résine liquide non polymérisée est un irritant, voire un sensibilisant cutané, et l'isopropanol (IPA) utilisé pour le nettoyage des pièces est inflammable. Certains effets ne sont pas immédiats mais s'aggravent avec des expositions répétées : le fait de ne rien ressentir sur le moment ne veut pas dire qu'il n'y a pas de conséquence à terme.

## Risques identifiés

{% include risk-item.html level="modere" icon="fas fa-hand-dots" title="Contact cutané avec la résine liquide (risque cumulatif)" content="Risque d'irritation et, à répétition, de sensibilisation allergique : les effets peuvent s'aggraver avec des expositions répétées dans le temps, même sans réaction visible au début. La résine ne doit jamais être manipulée à mains nues." %}

{% include risk-item.html level="modere" icon="fas fa-smog" title="Inhalation de vapeurs" content="Pendant l'impression et le nettoyage, des composés volatils sont émis." %}

{% include risk-item.html level="eleve" icon="fas fa-fire" title="Isopropanol (IPA)" content="Inflammable et irritant, à manipuler et stocker avec précaution, à l'écart de toute source de chaleur ou de flamme, et des produits incompatibles." %}

{% include risk-item.html level="modere" icon="fas fa-sun" title="Exposition UV" content="La post-cure utilise un rayonnement UV, jamais à l'air libre en présence d'autres personnes." %}

## EPI et équipements requis

<div class="epi-list">
{% include epi-item.html icon="fas fa-mitten" label="Gants nitrile (jetables)" %}
{% include epi-item.html icon="fas fa-glasses" label="Lunettes de protection" %}
{% include epi-item.html icon="fas fa-head-side-mask" label="Masque FFP2 ou demi-masque à cartouche" %}
</div>

Les gants nitrile sont obligatoires pour toute manipulation de résine liquide. Le masque (FFP2 ou demi-masque à cartouche) est nécessaire si la ventilation de la zone est insuffisante.

## Consignes avant / pendant l'utilisation

<div class="consigne-list">
{% include consigne-item.html type="do" content="Vérifier que la machine n'est pas signalée en maintenance ou hors service avant de l'utiliser." %}
{% include consigne-item.html type="do" content="Consulter la fiche de données de sécurité (FDS) et les pictogrammes de danger du produit utilisé (résine, IPA) avant toute manipulation, surtout si vous changez de résine." %}
{% include consigne-item.html type="do" content="La sorbonne (hotte chimique) doit être en fonctionnement pendant toute manipulation de résine liquide ou d'isopropanol." %}
{% include consigne-item.html type="dont" content="Ne jamais manipuler la résine liquide sans gants." %}
{% include consigne-item.html type="do" content="Travailler capot fermé pendant l'impression." %}
{% include consigne-item.html type="do" content="Nettoyer avec l'isopropanol dans une zone ventilée, à l'écart de toute source de chaleur ou de flamme." %}
{% include consigne-item.html type="do" content="Stocker la résine et l'IPA à l'écart de toute source de chaleur et des produits incompatibles, si possible dans un bac de rétention." %}
{% include consigne-item.html type="do" content="Jeter la résine non polymérisée et les lingettes souillées avec les déchets chimiques dédiés, jamais avec les déchets courants." %}
</div>

## Conduite à tenir en cas d'incident

{% include message.html title="La règle absolue" message="Quel que soit l'incident, prévenez immédiatement le référent MakerSpace présent : c'est lui qui prend la direction des opérations. Votre sécurité passe avant tout : en cas de doute sur un geste, ne le faites pas, alertez et évacuez plutôt que d'intervenir." status="is-danger" icon="fas fa-triangle-exclamation" %}

**Contact cutané :** retirer les gants et vêtements souillés, laver abondamment à l'eau, avis médical si irritation persistante.

**Projection oculaire :** rincer abondamment à l'eau claire pendant au moins 15 minutes, avis médical systématique.
