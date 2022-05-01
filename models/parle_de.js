/* eslint max-classes-per-file: ["error", 2] */
const client = require('../config/database_client')

class Parle_de {
    constructor(row) {
        this.row = row;
    }

    get url() {
        return this.row.url;
    }

    get nom() {
        return this.row.nom;
    }

    static find_by_URL_name(url, nom) {
        const sql = 'SELECT * FROM t_parlede WHERE url = $1 AND nom = $2';

        return client.query(sql, [url, nom])
            .then(result => new Parle_de(result.rows[0]))
            .catch();
    }

    static find_all() {
        const sql = 'SELECT * FROM t_parlede'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new Parle_de(res)))
            .catch();
    }
}

class Count_personnalite {
    constructor(row) {
        this.row = row;
    }

    get nom() {
        return this.row.nom;
    }

    get nombre() {
        return this.row.nombre;
    }

    static count_nombre_personnalites() {
        const sql = 'SELECT nom, COUNT(*) as nombre FROM t_parlede GROUP BY nom ORDER BY nombre desc'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new Count_personnalite(res)))
            .catch();
    }
}

module.exports = { Parle_de, Count_personnalite };
