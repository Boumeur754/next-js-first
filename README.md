# Tableau de Bord Acme - Projet Next.js

## 📋 Description
Ce projet est une application de tableau de bord développée avec Next.js 15, créée dans le cadre du laboratoire de développement web. L'application implémente les concepts fondamentaux de Next.js couverts dans les chapitres 1 à 9 du tutoriel officiel, avec des personnalisations avancées de l'interface utilisateur.

##  Fonctionnalités implémentées

### Fonctionnalités principales
-  **Configuration initiale** du projet Next.js avec TypeScript
-  **Stylisation avancée** avec Tailwind CSS et modules CSS
-  **Optimisation des performances** avec next/font et next/image
-  **Routage App Router** avec layouts et pages imbriquées
-  **Navigation côté client** avec le composant Link
-  **Base de données** PostgreSQL configurée et initialisée
-  **Récupération de données** avec les composants serveur React
-  **Rendu hybride** statique et dynamique
-  **Streaming** et squelettes de chargement avec React Suspense

### Personnalisations avancées
-  **Thème visuel personnalisé** avec palette de couleurs bleu primaire et violet secondaire
-  **Animations CSS** : fade-in, slide-in avec transitions fluides
-  **Typographie améliorée** : Police Poppins pour les titres
-  **Design cohérent** : Interface utilisateur professionnelle et moderne
-  **États de chargement** : Squelettes animés pour une meilleure expérience utilisateur

##  Structure du projet

```
starter-example/
├── app/                    # Routage App Router
│   ├── dashboard/         # Pages du tableau de bord
│   ├── login/            # Page de connexion
│   ├── layout.tsx        # Layout racine
│   └── page.tsx          # Page d'accueil
├── app/ui/               # Composants d'interface utilisateur
│   ├── dashboard/        # Composants spécifiques au dashboard
│   ├── fonts.ts          Configuration des polices
│   └── globals.css       Styles globaux
├── lib/                  # Utilitaires et configuration
│   ├── data.ts          # Fonctions de récupération de données
│   ├── definitions.ts   # Types TypeScript
│   └── placeholder-data.ts # Données fictives
├── public/              # Ressources statiques
└── tailwind.config.js   # Configuration Tailwind CSS
```

##  Technologies utilisées

- **Framework** : Next.js 15 avec App Router
- **Langage** : TypeScript
- **Stylisation** : Tailwind CSS avec configuration personnalisée
- **Base de données** : PostgreSQL
- **Authentification** : NextAuth.js
- **Icônes** : Heroicons
- **Déploiement** : Vercel (préconfiguré)

##  Personnalisations visuelles

### Palette de couleurs
- **Primaire** : Bleu (`#0ea5e9` à `#0369a1`)
- **Secondaire** : Violet (`#a855f7` à `#9333ea`)
- **Arrière-plans** : Dégradés et couleurs neutres

### Animations implémentées
- `animate-fade-in` : Apparition progressive des éléments
- `animate-slide-in` : Glissement depuis la gauche
- Transitions au survol sur les cartes et liens
- États de chargement avec squelettes animés

### Composants personnalisés
- Header de dashboard avec date actuelle
- Navigation latérale avec indicateurs d'état actif
- Cartes de métriques avec design moderne
- Graphiques et tableaux responsifs

##  Pages disponibles

- **/** - Page d'accueil avec présentation
- **/dashboard** - Tableau de bord principal avec métriques
- **/dashboard/invoices** - Gestion des factures
- **/dashboard/customers** - Gestion des clients
- **/login** - Page de connexion

##  Installation et exécution

### Prérequis
- Node.js 18+ 
- npm ou pnpm
- Base de données PostgreSQL

### Instructions d'installation

1. **Extraire l'archive du projet**
   ```bash
   unzip mon-projet-dashboard.zip
   cd starter-example
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   pnpm install
   ```

3. **Configurer l'environnement**
   ```bash
   # Copier le fichier d'exemple
   cp .env.example .env.local
   
   # Remplir avec vos variables d'environnement
   nano .env.local
   ```

4. **Initialiser la base de données**
   ```bash
   # Lancer le script d'initialisation
   npm run build
   ```

5. **Lancer le serveur de développement**
   ```bash
   npm run dev
   # ou
   pnpm dev
   ```

6. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```
   

6. **Lien disponible en ligne**
   ```
   https://next-js-first-beta-umber.vercel.app
   ```
   

## 📚 Chapitres du tutoriel complétés

-  **Chapitre 1** : Configuration initiale et structure du projet
-  **Chapitre 2** : Style CSS avec Tailwind et modules CSS
-  **Chapitre 3** : Optimisation des polices et images
-  **Chapitre 4** : Création de layouts et pages avec routage
-  **Chapitre 5** : Navigation entre les pages
-  **Chapitre 6** : Configuration de la base de données PostgreSQL
-  **Chapitre 7** : Récupération de données avec composants serveur
-  **Chapitre 8** : Rendu statique et dynamique
-  **Chapitre 9** : Streaming et squelettes de chargement

## 🔧 Scripts disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Construction pour la production
npm run start        # Serveur de production
```

## Notes de développement

- Le projet utilise les dernières fonctionnalités de Next.js 15
- Configuration optimisée pour les performances
- Code structuré pour la maintenabilité et l'évolutivité
- Interface adaptative pour desktop et mobile

## 👨 Auteur

Développé dans le cadre du laboratoire de développement web Next.js.
