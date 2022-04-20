const client = require('../config/database_client')

class En_lien {
    constructor(row) {
        this.row = row;
    }

    get URL_article() {
        return this.row.URL_article;
    }

    get URL_article_en_lien() {
        return this.row.URL_article_en_lien;
    }

    static find_by_URL(URL_article, URL_article_en_lien) {
        const sql = 'SELECT * FROM t_enlien WHERE URL_article = $1 AND URL_article_en_lien = $2';

        return client.query(sql, [URL_article, URL_article_en_lien])
            .then(result => new En_lien(result.rows[0]))
            .catch(e => console.error(e.stack));
    }

    static find_all() {
        const sql = 'SELECT * FROM t_enlien'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new En_lien(res)))
            .catch(e => console.error(e.stack));
    }
}

module.exports = En_lien;
