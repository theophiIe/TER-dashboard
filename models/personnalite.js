const client = require('../config/database_client')

class Personnalite {
    constructor(row) {
        this.row = row;
    }

    get nom() {
        return this.row.nom;
    }

    static find_by_name(nom) {
        const sql = 'SELECT * FROM t_personnalite WHERE nom = $1';

        return client.query(sql, [nom])
            .then(result => new Personnalite(result.rows[0]))
            .catch(e => {});
    }

    static find_all() {
        const sql = 'SELECT * FROM t_personnalite'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new Personnalite(res)))
            .catch(e => {});
    }
}

module.exports = Personnalite;
