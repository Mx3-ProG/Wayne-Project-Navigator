# Wayne Client Portal — Architecture & V1 Plan

## Analyse de la codebase actuelle

Projet vierge (template par défaut) :
- Stack : TanStack Start v1 (React 19, SSR), Vite 7, Tailwind v4 via `src/styles.css`, shadcn/ui complet dans `src/components/ui`.
- Routing : fichiers dans `src/routes` (`__root.tsx` + `index.tsx` placeholder).
- Auth : aucune. Base de données : aucune. Aucun composant métier existant.
- À conserver : design tokens, shadcn, root layout, error/404 components.
- À remplacer : `src/routes/index.tsx` (placeholder), métadonnées `__root` ("Lovable App").
- Risque de régression : quasi nul (rien de métier n'existe). Le seul point sensible est le passage en SSR des pages protégées → tout l'espace client vivra sous un layout protégé côté client.

Backend : j'active Lovable Cloud (auth email + base Postgres avec RLS) — nécessaire pour login, brief, documents, facturation.

## A — Architecture technique
- TanStack Start + server functions (`*.functions.ts`) pour toute lecture/écriture data ; pas d'edge functions.
- Auth Lovable Cloud (email/mot de passe), sessions côté client, sous-arbre protégé `_authenticated/`.
- TanStack Query pour le cache, Motion (framer-motion) pour les animations, `prefers-reduced-motion` respecté.
- Rôles dans une table `user_roles` séparée (client / admin) + fonction `has_role` security definer.
- Paiements V1 : pas d'intégration Stripe. Une facture a un statut et un `payment_url` optionnel ; "Pay now" ouvre ce lien ou affiche les instructions. Prix, échéances et conditions toujours visibles.

## B — Architecture UX
- Règle unique : chaque écran est organisé autour d'une **Next Action** calculée côté serveur depuis l'état du projet.
- Deux états permanents et explicites : `WAITING FOR CLIENT` / `WAYNE IS WORKING`.
- Progression : barre de progression + Project Journey (étapes terminées / active / futures désaturées).
- Feedback : check animé, léger halo, confetti réservé aux vrais milestones (agreement, dépôt, livraison).
- Design : glass premium (blur, bordures translucides, ombres douces, gradients très subtils, beaucoup d'espace négatif), tokens `oklch` dans `src/styles.css`, variantes shadcn (`glass`, `hero`, `journey-*`) — aucune couleur en dur dans les composants.
- Mobile-first : bottom nav, cartes pleine largeur, signature/brief/paiement utilisables au pouce.

## C — Routes / pages
```
/                       landing + accès portail (public)
/auth                   login / signup
/onboarding             first-login experience (welcome + 3 micro-étapes + reveal)
/_authenticated/dashboard   Next Action + progress + journey
/_authenticated/project     détails projet + timeline milestones + project links
/_authenticated/documents   agreement, brief, factures, guides
/_authenticated/billing     investissement, payé/restant, échéance, historique
/_authenticated/brief       formulaire brief multi-étapes (sauvegarde par étape)
/_authenticated/agreement   lecture + signature
/_authenticated/delivery    moment "Your project is ready" + ouverture du produit
/_authenticated/support     contact / demandes
/_authenticated/admin       vue interne Wayne (clients, progression, next action, waiting, paiement)
```

## D — Schéma base de données (V1)
`profiles`, `user_roles`, `clients`, `projects`, `project_members`, `onboarding_steps`, `agreements`, `briefs`, `documents`, `invoices`, `payments`, `milestones`, `project_links`, `feedback`, `notifications`, `packages`.

Règles : un client → plusieurs projets ; un projet → plusieurs utilisateurs ; RLS sur tout, accès client via `project_members`, accès total pour le rôle admin ; GRANT explicites. Le portail ne stocke que des URLs vers les produits livrés (`project_links.url`, `projects.project_url`) — aucune connexion aux bases des logiciels custom.

## E — Architecture composants
- `journey/` : `ProgressCard`, `NextActionCard`, `JourneyTimeline`, `StepBadge`, `WaitingBanner`, `MilestoneCelebration`.
- `glass/` : `GlassCard` (hover: élévation + reflet suivant la souris), `GlassPanel`, `Sheen`.
- `layout/` : `PortalShell` (sidebar desktop / bottom nav mobile), `PageHeader`.
- `forms/` : `StepForm`, `ChoiceGrid`, `FileDrop`, `SignaturePad`.
- `billing/` : `InvestmentCard`, `PaymentList`.

## F — Machine à états onboarding / parcours
États projet : `agreement → welcome → deposit → brief → launch → production → review → delivery → live`.
Un sélecteur unique `computeNextAction(project)` retourne `{ phase, progress, owner: 'client'|'wayne', title, description, eta, cta }` — utilisé par le dashboard, la nav et l'admin, donc une seule source de vérité.

## G — Plan d'implémentation
1. Design system glass + tokens + variantes shadcn.
2. Cloud : migration schéma + RLS + rôles + données de démo (un projet complet en cours).
3. Auth + layout protégé + shell navigation.
4. Onboarding first-login (welcome, 3 étapes, reveal).
5. Dashboard (progress + next action + journey) avec la state machine.
6. Agreement (signature), Billing, Brief multi-étapes.
7. Project (timeline + project links), Documents.
8. Delivery experience + post-delivery + feedback.
9. Admin Wayne (liste clients, progression, waiting-for).
10. Polish : motion, responsive mobile, SEO/head, accessibilité.

## H — Fichiers principaux
Créés : `src/routes/index.tsx` (réécrit), `src/routes/auth.tsx`, `src/routes/onboarding.tsx`, `src/routes/_authenticated/*`, `src/lib/journey.ts`, `src/lib/portal.functions.ts`, `src/components/{glass,journey,layout,forms,billing}/*`, migration SQL.
Modifiés : `src/styles.css`, `src/routes/__root.tsx`, `src/start.ts`.

## Hors V1 (ensuite)
Rappels automatiques/notifications programmées, rapports mensuels, marketplace de packages, Stripe, multi-projets avancé.
