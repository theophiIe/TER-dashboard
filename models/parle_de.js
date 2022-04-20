const client = require('../config/database_client')

class Parle_de {
    constructor(row) {
        this.row = row;
    }

    get URL() {
        return this.row.URL;
    }

    get nom() {
        return this.row.nom;
    }

    static find_by_URL_name(URL, nom) {
        const sql = 'SELECT * FROM t_parlede WHERE URL = $1 AND nom = $2';

        return client.query(sql, [URL, nom])
            .then(result => new Parle_de(result.rows[0]))
            .catch(e => console.error(e.stack));
    }

    static find_all() {
        const sql = 'SELECT * FROM t_parlede'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new Parle_de(res)))
            .catch(e => console.error(e.stack));
    }
}

module.exports = Parle_de;
