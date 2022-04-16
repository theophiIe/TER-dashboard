let client = require('../config/database_client')

class Contenu {
    constructor(row) {
        this.row = row;
    }

    get texte() {
        return this.row.texte;
    }

    static find_by_texte(texte) {
        const sql = 'SELECT * FROM t_contenu WHERE texte = $1';

        return client.query(sql, [texte])
            .then(result => new Contenu(result.rows[0]))
            .catch(e => console.error(e.stack));
    }

    static find_all() {
        const sql = 'SELECT * FROM t_contenu'

        return client.query(sql, [])
            .then(result => result.rows.map(res => new Contenu(res)))
            .catch(e => console.error(e.stack));
    }
}

module.exports = Contenu;
