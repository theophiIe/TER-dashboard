let client = require('../config/database_client')

class Refere {
    constructor(row) {
        this.row = row;
    }

    get URL_article() {
        return this.row.URL_article;
    }

    get URL_reference() {
        return this.row.URL_reference;
    }

    static find_by_url(URL_article, URL_reference) {
        const sql = 'SELECT * FROM t_refere WHERE URL_article = $1 AND URL_reference = $2';

        return client.query(sql, [URL_article, URL_reference])
            .then(result => new Refere(result.rows[0]))
            .catch(e => console.error(e.stack));
    }

    static find_all() {
        const sql = 'SELECT * FROM t_refere'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new Refere(res)))
            .catch(e => console.error(e.stack));
    }
}

module.exports = Refere;
