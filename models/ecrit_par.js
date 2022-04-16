let client = require('../config/database_client')

class Ecrit_par {
    constructor(row) {
        this.row = row;
    }

    get URL() {
        return this.row.URL;
    }

    get nom() {
        return this.row.nom;
    }

    get role() {
        return this.row.Roles;
    }

    static find(URL, nom, role) {
        const sql = 'SELECT * FROM t_ecritpar WHERE URL = $1 AND nom = $2 AND Roles = $3';

        return client.query(sql, [URL, nom, role])
            .then(result => new Ecrit_par(result.rows[0]))
            .catch(e => console.error(e.stack));
    }

    static find_all() {
        const sql = 'SELECT * FROM t_ecritpar'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new Ecrit_par(res)))
            .catch(e => console.error(e.stack));
    }
}

module.exports = Ecrit_par;
