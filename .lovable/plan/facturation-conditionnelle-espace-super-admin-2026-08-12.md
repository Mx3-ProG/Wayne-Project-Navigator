# Facturation conditionnelle + Espace super admin

## 1. Facturation : plus de faux paiement

Aujourd'hui la page Facturation affiche « Payer en toute sécurité » sur l'acompte alors qu'aucune offre n'a été émise et qu'aucun paiement réel n'existe. On remplace ça par un flux piloté par vous.

Nouvelle notion : **Proposition** (une par projet, créée depuis l'espace admin).

- Tant qu'aucune proposition n'est publiée : la section Acompte s'affiche en état **verrouillé / en attente** (cadenas, texte « Nous préparons votre proposition »), aucun bouton de paiement, aucun montant.
- Dès que vous publiez la proposition : une carte **Proposition** apparaît avec le titre, la description du périmètre, et un bouton unique qui ouvre votre lien Stripe (nouvel onglet). **Aucun prix affiché** côté portail — le montant est visible sur le Checkout Stripe.
- Le statut « payé » n'est plus auto-déclaré par le client : c'est vous qui marquez la facture payée depuis l'admin (ce qui fait avancer le parcours vers Lancement, comme aujourd'hui).
- La fiche facture détaillée reste consultable/téléchargeable, avec statut payé / en attente, sans bouton de paiement fictif.

Les factures futures (solde) restent affichées en « à venir » et deviennent payables de la même façon (lien Stripe posé par vous).

## 2. Espace super admin

Nouvelle zone réservée au rôle admin, accessible via un lien dans la barre latérale visible seulement pour un admin.

**Vue d'ensemble (liste des comptes)**
- Tous les clients/projets : nom, société, email, étape actuelle, qui doit agir (client / Wayne), progression, avancement de la fiche entreprise (x/7), brief soumis ou non, montant payé / total.
- Filtres rapides : en attente de nous, en attente du client, brief à valider, proposition à envoyer.

**Fiche client (détail)**
- Profil et coordonnées, fiche entreprise complète (activité, SIRET, contact, réseaux, budget…), réponses du brief avec son historique de versions, documents, factures, agrément signé.
- Actions : créer / modifier / publier la proposition (titre, description, lien Stripe), marquer une facture payée, faire avancer l'étape du parcours, valider le brief.
- Export PDF de la fiche entreprise et du brief déjà en place, réutilisés ici.

**Voir comme le client (lecture seule)**
- Bouton « Voir son portail » : ouvre le parcours du client tel qu'il le voit (tableau de bord, bienvenue, brief, facturation) en **lecture seule**, avec un bandeau permanent « Mode consultation — <nom du client> » et un bouton pour revenir à l'admin. Aucune action ne peut être déclenchée dans ce mode.

## 3. Déconnexion

- Compte client normal : pas de bouton Déconnexion (comportement actuel conservé).
- Compte super admin : bouton Déconnexion disponible, plus le sélecteur « Voir comme le client » décrit ci-dessus.

## Détails techniques

- Migration : table `public.offers` (`project_id`, `title`, `description`, `stripe_url`, `status` draft/published, `published_at`) avec GRANT + RLS : lecture par les membres du projet uniquement si `status = 'published'`, écriture réservée à `has_role(auth.uid(),'admin')`. RPC `publish_offer` / `upsert_offer` en security definer avec contrôle admin.
- Migration : RPC admin `admin_list_projects()` (security definer, réservée admin) retournant l'agrégat de la vue d'ensemble ; les policies existantes couvrent déjà l'accès admin en lecture aux projets, profils, briefs, factures et documents.
- Attribution du rôle : une instruction SQL dans la migration pour donner `admin` à votre compte (email à confirmer au moment de l'application).
- Routes : `src/routes/_authenticated/_admin/route.tsx` (garde sur `has_role`), `_admin/index.tsx` (liste), `_admin/clients.$projectId.tsx` (détail), et paramètre de consultation client réutilisant les vues portail existantes via un contexte `readOnly`.
- Front : `usePortal.ts` étend `Workspace` avec `offer`; `useAdminProjects` / `useAdminProject` pour l'admin ; `usePayInvoice` retiré du portail client.
- i18n : nouvelles clés dans `billing.ts` (état en attente, proposition, note « le montant s'affiche sur Stripe ») + nouveau namespace `admin.ts`, traduits FR/EN/DE/ES/RU, contrôle `check:i18n` maintenu à 100 %.
