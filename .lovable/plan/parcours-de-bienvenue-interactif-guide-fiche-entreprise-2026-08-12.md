# Parcours de bienvenue interactif (guide + fiche entreprise)

## Ce qui bloque aujourd'hui

Vérifié en base : sur ton projet, la checklist du guide est bien cochée (3/3), mais la fiche entreprise n'a que 2 champs remplis sur 7 obligatoires et n'a jamais été validée. Le bouton « Continuer » est donc désactivé, sans message clair : rien ne se passe et rien n'explique pourquoi.

## Ce qu'on construit

La page Bienvenue devient un vrai tunnel en 6 étapes, une étape à la fois, avec barre de progression et reprise automatique là où le client s'est arrêté.

```text
1. Lire le guide      → comment on travaille + ce qu'on attend de chacun
2. Ton activité       → produits/services, secteur, SIRET, ancienneté, besoins en ligne
3. Contact            → téléphone, WhatsApp, email, adresse du commerce
4. Présence en ligne  → Facebook, Instagram, autres réseaux
5. Historique/budget  → anciens prestataires, budget mensuel
6. Récapitulatif      → relecture, correction, téléchargement, validation finale
```

Règles du parcours :
- Chaque étape se valide seule : « Suivant » n'est actif que si les champs obligatoires de l'étape sont remplis, avec un message d'erreur au champ (plus de bouton mort et muet).
- On peut revenir en arrière librement, et cliquer sur une étape déjà franchie dans la barre de progression.
- Enregistrement automatique à chaque étape franchie : si le client ferme l'onglet, il retrouve exactement son avancement.
- L'étape 1 remplace la checklist actuelle par une confirmation de lecture (les 3 cases restent, dans l'étape 1).
- Le récapitulatif liste toutes les réponses par section, avec un lien « Modifier » qui renvoie à la bonne étape.
- Le bouton final « Valider et continuer » enregistre la fiche comme validée, fait passer le projet à l'étape suivante et redirige vers le Project brief (célébration conservée).
- Après validation, la page reste consultable en mode « fiche validée » : lecture, modification et re-téléchargement possibles.

## Le document généré

Un bouton « Télécharger la fiche » disponible partout dans le parcours :
- Fiche remplie : toutes les réponses du client, section par section, avec nom du projet, date et état (brouillon ou validée).
- Fiche vide : si presque rien n'est rempli, le document sort en modèle imprimable avec les intitulés et des lignes à compléter à la main.
- Le document reste conforme à l'identité Wayne-Web et s'ouvre via l'export PDF du navigateur, comme le brief et les factures.

## État visible dans l'app

- Un bandeau en haut de la page Bienvenue : « Étape 3 sur 6 » + ce qu'il reste à faire.
- Le tableau de bord et le Project progress affichent l'avancement du parcours de bienvenue (par ex. « Fiche entreprise : 4/7 informations ») au lieu d'un simple « à faire ».

## Détails techniques

- `src/lib/business-profile.ts` : ajout de l'ordre des étapes, du calcul de complétion par étape, du taux global et du choix fiche remplie / fiche vierge.
- Nouveau `src/components/journey/WelcomeWizard.tsx` : machine d'étapes, barre de progression, navigation, validation par étape ; réutilise les champs existants du formulaire actuel (`BusinessProfileForm` est absorbé dans le wizard).
- Nouveau `src/components/print/BusinessProfileSheet.tsx` basé sur `PrintSheet` : variante remplie et variante vierge.
- `src/routes/_authenticated/_portal.welcome.tsx` : orchestration du wizard, guide en étape 1, célébration + redirection `/brief` à la validation.
- `src/hooks/usePortal.ts` : réutilise `save_business_profile`, `save_welcome_checklist`, `complete_welcome` (aucune migration nécessaire) ; l'étape courante est stockée dans `welcome_checklist` pour la reprise.
- `src/locales/welcome.ts` : nouvelles clés (titres d'étapes, aides, erreurs de validation, libellés du document, textes de progression) dans les 5 langues, puis `check:i18n` pour garantir 0 clé manquante.
