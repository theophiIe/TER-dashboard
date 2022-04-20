const client = require('../config/database_client')

class Contient {
    constructor(row) {
        this.row = row;
    }

    get url() {
        return this.row.url;
    }

    get id() {
        return this.row.id;
    }

    static find_by_url_id(url, id) {
        const sql = 'SELECT * FROM t_contient WHERE url = $1 AND id = $2';

        return client.query(sql, [url, id])
            .then(result => new Contient(result.rows[0]))
            .catch(e => console.error(e.stack));
    }

    static find_all() {
        const sql = 'SELECT * FROM t_contient'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new Contient(res)))
            .catch(e => console.error(e.stack));
    }
}

module.exports = Contient;
