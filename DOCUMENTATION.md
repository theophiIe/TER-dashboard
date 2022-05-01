# Documentation

## Arborescence du projet
```text
TER-dashboard
│
├── config
│   ├── database_client.js
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
│   ├── nombre.js
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
│   ├── chart_refere.js
│   └── datatable.js
│
├── server.js
└── views
  ├── pages
  │  ├── chart_article.ejs
  │  ├── chart_auteur.ejs
  │  ├── chart_refere.ejs
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

## [/config](https://github.com/theophiIe/TER-dashboard/tree/main/config)
Dossier contenant les fichiers:
 - database_client.js : permet la connexion à la base de donnée (côté client).
 - database_pool.js : permet la connexion à la base de donnée (côté serveur).
 - moment.js : permet de configurer la bibliothèque [Moment](https://momentjs.com/) en français.

Les informations importantes concernant la connexion à la base de donnée sont stockées dans le fichier `.env`  
Voir le détail du contenu du fichier via le [README](https://github.com/theophiIe/TER-dashboard/blob/main/README.md).

## [/models](https://github.com/theophiIe/TER-dashboard/tree/main/models)
Dossier contenant les différents fichiers Javascript permettant l'intéraction avec la base de donnée.  
Pour cela, nous créons une classe contenant des méthodes permettant l'utilisation de requêtes SQL.  
Le résultat de ces requêtes sont utilisés pour instancier la classe afin de manipuler les données efficacement via des `GET` 
correspondant à chaque colonne du tuple obtenue en sortie.

Exemple de classe permettant la manipulation de la base de donnée:
```js
class Article {
    constructor(row) {
        this.row = row;
    }

    // Méthode get permettant de récupérer la valeur issue de la colonne URL de la table t_article //
    get url() {
        return this.row.url;
    }

    // Méthode get permettant de récupérer la valeur issue de la colonne titre de la table t_article //
    get titre() {
        return this.row.titre;
    }
    
    ...

    // Méthode permettant d'obtenir un article en fonction d'une URL passé en paramètre //
    static find_by_url(url) {
        const sql = 'SELECT * FROM t_article WHERE url = $1';

        return client.query(sql, [url])
            // Création d'une instance d'article créer //
            // à partir du tuple obtenue par la requête SQL //
            .then(result => new Article(result.rows[0]))
            .catch(e => console.error(e.stack));
    }

    // Méthode permettant d'obtenir tous les articles //
    static find_all() {
        const sql = 'SELECT * FROM t_article'

        return client.query(sql, [])
            // Création d'une Map contenant une instance d'article créer //
            // à partir d'un tuple obtenue par la requête SQL //
            .then(result => result.rows.map(res => new Article(res)))
            .catch(e => console.error(e.stack));
    }
}
...
```

## [/public](https://github.com/theophiIe/TER-dashboard/tree/main/public)
Dossier contenant les sous-dossiers suivants :
 - assets : contenant le fichier CSS pour gérer le style de l'application.
 - images : contenant les images en format PNG pour les logos.

## [/script](https://github.com/theophiIe/TER-dashboard/tree/main/script)
Dossier contenant les fichiers permettant d'afficher les graphiques ainsi que les data tables.  
On peut noter que les graphiques sont dessinés à partir de la bibliothèque [Chart.js](https://www.chartjs.org/docs/latest/).  
Pour l'affichage des tables, nous avons opté pour l'utilisation de la bibliothèque [Datatable](https://datatables.net/).  
Les données affichées dans cette dernière proviennent de la base de donnée obtenue à l'aide du projet TER [Github](https://github.com/theophiIe/TER).

## [/views](https://github.com/theophiIe/TER-dashboard/tree/main/views)
Dossier contenant les sous-dossiers suivants :
 - pages : contient tous les fichiers au format EJS permettant l'affichage de nos différentes pages de l'application.
 - templates : contient tous les fichiers au format EJS structurant la base de l'affichage de l'application (head/header/footer).

## [server.js](https://github.com/theophiIe/TER-dashboard/blob/main/server.js)
Fichier qui permet d'établir les routes de l'application. De plus, il permet de gérer les requêtes `GET` et `POST`
grâce aux différents scripts (Javascript).
