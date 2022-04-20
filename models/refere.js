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
