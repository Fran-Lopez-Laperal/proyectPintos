const getDB = require("../../getDB");


const deleteNewQuery = async (idNew) => {
    let connection;
    try {
        connection = await getDB();

        await connection.query(`DELETE FROM news WHERE id = ?`, [idNew])
        
    } finally {
        if(connection) connection.release();
    }
}

module.exports = deleteNewQuery;