# PJ News — Veille juridique

Site de veille juridique construit avec Next.js, déployé sur Vercel.

## Structure

```
pjnews/
├── pages/
│   ├── index.js          → Page d'accueil
│   ├── apropos.js        → Page À propos
│   ├── articles/
│   │   └── [slug].js     → Page article (dynamique)
│   └── admin/
│       └── index.js      → Tableau de bord admin (privé)
├── components/
│   ├── Nav.js            → Barre de navigation
│   ├── Newsletter.js     → Bloc newsletter
│   └── Tag.js            → Composant tags thématiques
├── styles/
│   └── globals.css       → Styles globaux
├── data/
│   └── articles.json     → Tous les articles (généré par Colab)
└── package.json
```

## Déploiement sur Vercel

1. Uploader ce dossier sur GitHub (nouveau repository)
2. Aller sur vercel.com → "Add New Project"
3. Connecter le repository GitHub
4. Cliquer "Deploy" — c'est tout

## Ajouter de nouveaux articles

1. Relancer le script Python dans Google Colab
2. Récupérer le fichier `articles.json` généré
3. Remplacer `data/articles.json` sur GitHub
4. Vercel redéploie automatiquement en ~30 secondes

## Accès admin

URL : `votre-site.vercel.app/admin`
Mot de passe : `pjnews2026` (à changer dans `pages/admin/index.js`)

## Pages disponibles

- `/` → Accueil avec hero, décisions récentes, liste articles
- `/articles/[slug]` → Article complet avec navigation
- `/apropos` → Page À propos
- `/admin` → Tableau de bord (protégé par mot de passe)
