# Document de bienvenue + tunnel de brief interactif

## 1. Traduire les noms venant de la base

Aujourd'hui les libellés « Welcome Document », « Deposit Invoice », « Project Brief » sont
écrits en anglais dans la base au moment de la création du compte, donc ils ne changent
jamais de langue.

Correctif :
- Ajouter une clé de traduction stable sur les documents, factures et jalons
  (`welcome`, `invoice_deposit`, `brief`, `agreement`, `delivery`…).
- Le portail affiche le libellé traduit dans les 5 langues ; si Wayne saisit un nom
  personnalisé, ce nom-là s'affiche tel quel et remplace la traduction.
- Même traitement pour les types de documents (Contrat, Facture, Brief, Livrable).

## 2. Nouvel ordre du parcours

`Contrat → Bienvenue → Brief → Acompte → Lancement → Production → Revue → Livraison → Live`

- Le brief passe avant l'acompte : le client précise son projet, puis paie en connaissance de cause.
- Le brief reste modifiable (« Modifier mon brief ») tant que l'acompte n'est pas payé ;
  après paiement il devient lecture seule avec un lien « Demander une modification » vers le support.
- Les jalons, la barre de progression et la carte « Prochaine action » suivent ce nouvel ordre.

## 3. Document de bienvenue (`/welcome`)

Page interactive, traduite en 5 langues, avec version imprimable/PDF propre (bouton Imprimer) :
- Mot de bienvenue personnalisé (nom, société, nom du projet).
- Comment nous travaillons : rythme, canaux, délais de réponse, votre interlocuteur.
- Les étapes à venir, avec la position actuelle mise en évidence.
- Ce que nous attendons de vous / ce que vous pouvez attendre de nous.
- Checklist « Je suis prêt » à cocher (persistée) : lecture faite, contenus rassemblés, accès prêts.
- Bouton final « J'ai lu, passons au brief » qui fait avancer le projet.
- Le document apparaît dans Documents et s'ouvre sur cette page.

## 4. Brief : tunnel de qualification interactif

Étape 1 — **Type de projet** (cartes cliquables, une seule sélection) :
site e-commerce · site vitrine · application web · maintenance / reprise · autre (à préciser).

Étapes suivantes — **questions conditionnelles selon le type** :
- E-commerce : nombre de produits, moyens de paiement, livraison/zones, gestion des stocks, migration d'un site existant.
- Vitrine : pages souhaitées, prise de contact/réservation, référencement local, contenus existants.
- Application : utilisateurs et rôles, fonctionnalités clés, données à gérer, connexions à des outils externes.
- Maintenance : site/plateforme actuelle, accès disponibles, problèmes rencontrés, niveau d'accompagnement souhaité.
- Autre : description libre guidée.

Puis les étapes communes déjà en place (entreprise, objectifs, style & références, contenus & délais).

Étape finale — **récapitulatif validable** : toutes les réponses regroupées par section, chaque
bloc modifiable d'un clic, puis « Valider mon brief ». Animation de célébration, brief archivé
dans Documents, projet avancé vers l'acompte.

Confort d'usage : progression sauvegardée à chaque étape (reprise possible plus tard), barre de
progression dynamique (le nombre d'étapes dépend du type choisi), transitions fluides,
navigation avant/arrière, tout en verre liquide comme le reste du portail.

## Détails techniques

- Migration : colonne `i18n_key` (nullable) sur `documents`, `invoices`, plus `name_override`
  pour le nom libre ; mise à jour de `handle_new_user()` et `sync_milestones()` pour
  seeder ces clés et le nouvel ordre de phases ; adaptation de `advance_project` /
  `submit_brief` (après brief → phase `deposit`) et ajout d'une fonction
  `reopen_brief(project_id)` autorisée uniquement si l'acompte n'est pas payé.
- `briefs.answers` (jsonb) accueille `project_type` + les réponses conditionnelles ;
  `current_step` reste la reprise de parcours. Pas de nouvelle table.
- `src/lib/journey.ts` : nouvel `PHASE_ORDER`, `computeNextAction` mis à jour (welcome → brief → deposit).
- `src/lib/brief-flow.ts` (nouveau) : définition déclarative des étapes et branches, purement
  en clés i18n, pour rester traduisible et validable par le checker.
- Nouvelles routes `_authenticated/_portal.welcome.tsx` ; refonte de `_portal.brief.tsx` en
  tunnel multi-étapes + écran récapitulatif.
- Nouveaux namespaces `src/locales/welcome.ts` et extension de `src/locales/brief.ts`,
  `documents.ts`, `billing.ts`, `journey.ts` dans les 5 langues ; `bun scripts/check-i18n.mjs`
  doit rester vert (0 clé manquante).
- Impression : feuille de style `@media print` dédiée sur la page bienvenue (fond blanc, sans
  navigation) pour un export PDF navigateur propre.
