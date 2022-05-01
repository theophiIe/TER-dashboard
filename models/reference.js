const client = require('../config/database_client')

class Reference {
    constructor(row) {
        this.row = row;
    }

    get url() {
        return this.row.url;
    }

    get nom() {
        return this.row.titre;
    }

    static find_by_url(url) {
        const sql = 'SELECT * FROM t_reference WHERE url = $1';

        return client.query(sql, [url])
            .then(result => new Reference(result.rows[0]))
            .catch();
    }

    static find_all() {
        const sql = 'SELECT * FROM t_reference'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new Reference(res)))
            .catch();
    }
}

module.exports = Reference;
