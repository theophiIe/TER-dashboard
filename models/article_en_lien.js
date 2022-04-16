let client = require('../config/database_client')

class Article_en_lien {
    constructor(row) {
        this.row = row;
    }

    get URL() {
        return this.row.URL;
    }

    static find_by_url(URL) {
        const sql = 'SELECT * FROM t_articleenlien WHERE URL = $1';

        return client.query(sql, [URL])
            .then(result => new Article_en_lien(result.rows[0]))
            .catch(e => console.error(e.stack));
    }

    static find_all() {
        const sql = 'SELECT * FROM t_articleenlien'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new Article_en_lien(res)))
            .catch(e => console.error(e.stack));
    }
}

module.exports = Article_en_lien;
