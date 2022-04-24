const client = require('../config/database_client')

class Auteur {
    constructor(row) {
        this.row = row;
    }

    get nom() {
        return this.row.nom;
    }

    static find_by_name(nom) {
        const sql = 'SELECT * FROM t_auteur WHERE nom = $1';

        return client.query(sql, [nom])
            .then(result => new Auteur(result.rows[0]))
            .catch(e => console.error(e.stack));
    }

    static find_all() {
        const sql = 'SELECT * FROM t_auteur'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new Auteur(res)))
            .catch(e => console.error(e.stack));
    }
}

module.exports = Auteur;
