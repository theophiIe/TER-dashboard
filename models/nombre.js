const client = require('../config/database_client')

class Nombre {
    constructor(row) {
        this.row = row;
    }

    get nombre() {
        return this.row.nombre;
    }

    static nombre_article() {
        const sql = 'SELECT COUNT(*) AS nombre FROM t_article';

        return client.query(sql, [])
            .then(result => new Nombre(result.rows[0]))
            .catch();
    }

    static nombre_auteur() {
        const sql = 'SELECT COUNT(*) AS nombre FROM t_auteur';

        return client.query(sql, [])
            .then(result => new Nombre(result.rows[0]))
            .catch();
    }

    static nombre_personnalite() {
        const sql = 'SELECT COUNT(*) AS nombre FROM t_personnalite';

        return client.query(sql, [])
            .then(result => new Nombre(result.rows[0]))
            .catch();
    }

    static nombre_reference() {
        const sql = 'SELECT COUNT(*) AS nombre FROM t_reference';

        return client.query(sql, [])
            .then(result => new Nombre(result.rows[0]))
            .catch();
    }

    static nombre_source() {
        const sql = 'SELECT COUNT(*) AS nombre FROM t_source';

        return client.query(sql, [])
            .then(result => new Nombre(result.rows[0]))
            .catch();
    }
}

module.exports = Nombre;