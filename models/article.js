/* eslint max-classes-per-file: ["error", 2] */
const client = require('../config/database_client')
const moment = require('../config/moment')

class Article {
    constructor(row) {
        this.row = row;
    }

    get url() {
        return this.row.url;
    }

    get titre() {
        return this.row.titre;
    }

    get date_creation() {
        return moment(this.row.date_creation);
    }

    get date_modification() {
        return moment(this.row.date_modification);
    }

    get etiquette() {
        return this.row.etiquette;
    }

    get correction() {
        return this.row.correction;
    }

    get source() {
        return this.row.source;
    }

    static find_by_url(url) {
        const sql = 'SELECT * FROM t_article WHERE url = $1';

        return client.query(sql, [url])
            .then(result => new Article(result.rows[0]))
            .catch();
    }

    static find_all() {
        const sql = 'SELECT * FROM t_article'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new Article(res)))
            .catch();
    }
}

class Article_mois {
    constructor(row) {
        this.row = row;
    }

    get date() {
        return moment(this.row.date);
    }

    get nombre() {
        return this.row.nombre;
    }

    static nombre_date_creation_par_mois() {
        const sql = 'SELECT DATE_TRUNC(\'month\', a.date_creation) AS date, COUNT(*) AS nombre from t_article a WHERE a.date_creation IS NOT NULL GROUP BY DATE_TRUNC(\'month\', a.date_creation) ORDER BY DATE_TRUNC(\'month\', a.date_creation)'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new Article_mois(res)))
            .catch();
    }

    static nombre_date_modification_par_mois() {
        const sql = 'SELECT DATE_TRUNC(\'month\', a.date_modification) AS date, COUNT(*) AS nombre from t_article a WHERE a.date_modification IS NOT NULL GROUP BY DATE_TRUNC(\'month\', a.date_modification) ORDER BY DATE_TRUNC(\'month\', a.date_modification)'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new Article_mois(res)))
            .catch();
    }
}

module.exports = { Article, Article_mois };
