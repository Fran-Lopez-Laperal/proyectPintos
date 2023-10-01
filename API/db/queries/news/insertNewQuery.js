const getDB = require("../../getDB");

const insertNewQuery = async (idUser,title, introduction, text) => {
    let connection;

    try {

        connection = await getDB();

        const [createNew] = await connection.query(
            `INSERT INTO news(idUser,title, introduction, text) VALUES (?,?,?,?)`,
            [idUser,title, introduction, text]
        )

        return createNew

    } finally {
        if(connection) connection.release();
    }
}


module.exports = insertNewQuery