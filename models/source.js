const client = require('../config/database_client')

class Source {
    constructor(row) {
        this.row = row;
    }

    get url() {
        return this.row.url;
    }

    get nom() {
        return this.row.nom;
    }

    static find_by_url(url) {
        const sql = 'SELECT * FROM t_source WHERE url = $1';

        return client.query(sql, [url])
            .then(result => new Source(result.rows[0]))
            .catch(e => {});
    }

    static find_all() {
        const sql = 'SELECT * FROM t_source'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new Source(res)))
            .catch(e => {});
    }
}

module.exports = Source;
