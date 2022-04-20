const client = require('../config/database_client')

class Reference {
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
        const sql = 'SELECT * FROM t_reference WHERE URL = $1';

        return client.query(sql, [URL])
            .then(result => new Reference(result.rows[0]))
            .catch(e => console.error(e.stack));
    }

    static find_all() {
        const sql = 'SELECT * FROM t_reference'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new Reference(res)))
            .catch(e => console.error(e.stack));
    }
}

module.exports = Reference;
