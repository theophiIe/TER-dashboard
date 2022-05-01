/* eslint max-classes-per-file: ["error", 2] */
const client = require('../config/database_client')

class Ecrit_par {
    constructor(row) {
        this.row = row;
    }

    get url() {
        return this.row.url;
    }

    get nom() {
        return this.row.nom;
    }

    get roles() {
        return this.row.roles;
    }

    static find(url, nom, role) {
        const sql = 'SELECT * FROM t_ecritpar WHERE url = $1 AND nom = $2 AND roles = $3';

        return client.query(sql, [url, nom, role])
            .then(result => new Ecrit_par(result.rows[0]))
            .catch();
    }

    static find_all() {
        const sql = 'SELECT * FROM t_ecritpar'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new Ecrit_par(res)))
            .catch();
    }
}

class Count_auteurs {
    constructor(row) {
        this.row = row;
    }

    get nom() {
        return this.row.nom;
    }

    get nombre() {
        return this.row.nombre;
    }

    static count_nombre_auteurs() {
        const sql = 'SELECT nom, COUNT(*) as nombre FROM t_ecritpar WHERE roles = $1 GROUP BY nom ORDER BY nombre desc'

        return client.query(sql, ['Auteur'])
            .then(result => result.rows.map(res => new Count_auteurs(res)))
            .catch();
    }

    static count_nombre_relecteur() {
        const sql = 'SELECT nom, COUNT(*) as nombre FROM t_ecritpar WHERE roles = $1 GROUP BY nom ORDER BY nombre desc'

        return client.query(sql, ['Relecteur'])
            .then(result => result.rows.map(res => new Count_auteurs(res)))
            .catch();
    }

    static count_nombre_secretariat() {
        const sql = 'SELECT nom, COUNT(*) as nombre FROM t_ecritpar WHERE roles = $1 GROUP BY nom ORDER BY nombre desc'

        return client.query(sql, ['Secretariat'])
            .then(result => result.rows.map(res => new Count_auteurs(res)))
            .catch();
    }
}

module.exports = { Ecrit_par,  Count_auteurs };
