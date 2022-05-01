/* eslint max-classes-per-file: ["error", 2] */
const client = require('../config/database_client')

class Refere {
    constructor(row) {
        this.row = row;
    }

    get url_article() {
        return this.row.url_article;
    }

    get url_reference() {
        return this.row.url_reference;
    }

    static find_by_url(url_article, url_reference) {
        const sql = 'SELECT * FROM t_refere WHERE url_article = $1 AND url_reference = $2';

        return client.query(sql, [url_article, url_reference])
            .then(result => new Refere(result.rows[0]))
            .catch();
    }

    static find_all() {
        const sql = 'SELECT * FROM t_refere'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new Refere(res)))
            .catch();
    }
}

class Refere_nombre {
    constructor(row) {
        this.row = row;
    }

    get titre() {
        return this.row.titre;
    }

    get nombre() {
        return this.row.nombre;
    }

    static nombre_reference() {
        const sql = 'SELECT a.titre, COUNT(*) AS nombre FROM t_refere r, t_article a WHERE r.url_article = a.url GROUP BY a.titre;'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new Refere_nombre(res)))
            .catch();
    }
}

module.exports = { Refere, Refere_nombre };
