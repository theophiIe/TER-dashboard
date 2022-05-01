const client = require('../config/database_client')

class En_lien {
    constructor(row) {
        this.row = row;
    }

    get url_article() {
        return this.row.url_article;
    }

    get url_article_en_lien() {
        return this.row.url_article_en_lien;
    }

    static find_by_URL(url_article, url_article_en_lien) {
        const sql = 'SELECT * FROM t_enlien WHERE url_article = $1 AND url_article_en_lien = $2';

        return client.query(sql, [url_article, url_article_en_lien])
            .then(result => new En_lien(result.rows[0]))
            .catch(e => {});
    }

    static find_all() {
        const sql = 'SELECT * FROM t_enlien'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new En_lien(res)))
            .catch(e => {});
    }
}

module.exports = En_lien;
