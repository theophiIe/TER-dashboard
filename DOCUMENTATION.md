# Documentation

## Arborescence du projet
```text
TER-dashboard
│
├── config
│   ├── database_client.js
│   ├── database_pool.js
│   └── moment.js
│
├── DOCUMENTATION.md
│
├── models
│   ├── article_en_lien.js
│   ├── article.js
│   ├── auteur.js
│   ├── contenu.js
│   ├── contient.js
│   ├── ecrit_par.js
│   ├── en_lien.js
│   ├── parle_de.js
│   ├── personnalite.js
│   ├── refere.js
│   ├── reference.js
│   └── source.js
│
├── package.json
├── package-lock.json
│
├── public
│   ├── assets
│   │   └── styles.css
│   └── images
│       ├── logo_ter.png
│       └── S.png
│
├── README.md
│
├── script
│   ├── chart_article.js
│   ├── chart_auteur.js
│   └── datatable.js
│
├── server.js
└── views
  ├── pages
  │  ├── chart_article.ejs
  │  ├── chart_auteur.ejs
  │  ├── datatable_article.ejs
  │  ├── datatable_auteur.ejs
  │  ├── datatable_ecritpar.ejs
  │  ├── datatable_enlien.ejs
  │  ├── datatable_parlede.ejs
  │  ├── datatable_personnalite.ejs
  │  ├── datatable_source.ejs
  │  ├── home.ejs
  │  └── informations.ejs
  └── templates
    ├── footer.ejs
    ├── head.ejs
    └── header.ejs
```