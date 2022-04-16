let client = require('../config/database_client')

class Contient {
    constructor(row) {
        this.row = row;
    }

    get URL() {
        return this.row.URL;
    }

    get ID() {
        return this.row.ID;
    }

    static find_by_url_id(URL, ID) {
        const sql = 'SELECT * FROM t_contient WHERE URL = $1 AND ID = $2';

        return client.query(sql, [URL, ID])
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
