const client = require('../config/database_client')

class Source {
    constructor(row) {
        this.row = row;
    }

    get URL() {
        return this.row.URL;
    }

    get nom() {
        return this.row.titre;
    }

    static find_by_url(URL) {
        const sql = 'SELECT * FROM t_source WHERE URL = $1';

        return client.query(sql, [URL])
            .then(result => new Source(result.rows[0]))
            .catch(e => console.error(e.stack));
    }

    static find_all() {
        const sql = 'SELECT * FROM t_source'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new Source(res)))
            .catch(e => console.error(e.stack));
    }
}

module.exports = Source;
