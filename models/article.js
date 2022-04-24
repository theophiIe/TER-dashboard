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
            .catch(e => console.error(e.stack));
    }

    static find_all() {
        const sql = 'SELECT * FROM t_article'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new Article(res)))
            .catch(e => console.error(e.stack));
    }
}

module.exports = Article;
