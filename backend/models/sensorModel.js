const db = require('../config/db');

const banco = require('../config/db');

async function criar(temperatura,umidade){
    const [resultado] = await banco.execute(
        `INSERT INTO LeituraSensor(temperatura, umidade) VALUES (?, ?)`, [temperatura, umidade]
    );
    return resultado.insertId;
}

async funtion buscarUltimos(limite = 10){
    const limiteSeguro = Number(limite);

    const [leituras] = await banco.query(
        `SELECT * FROM LeituraSensor
        ORDER BY id DES LIMIT ?`, [limiteSeguro]
    );

    return leituras.reverse();

}

async funtion excluir(id){
    const [resultado] = await banco.execute(
    `DELETE FROM LeituraSensor WHERE id = ?`, [id]
);

return resultado.affectedRows > 0;

}


module.exports = {
    criar,
    buscarUltimos,
    excluir
};