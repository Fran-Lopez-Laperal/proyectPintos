const getDB = require("../../getDB");

const selectNewByIdQuery = async (idNew) => {

    let connection;

    try {

        connection = await getDB();

        const newDelete = await connection.query(`SELECT id FROM news WHERE id = ?`, [idNew]);
        console.log('VIENE AQUI UNA NOTICIA CON ID????', newDelete)
        return newDelete[0];

    } finally {
        if (connection) connection.release()
    }

}

module.exports = selectNewByIdQuery;