const getDB = require("../../getDB");

const updateNewQuery = async (title, image, introduction, text, idNew) => {

    let connection;

    try {

        connection = await getDB();

        await connection.query(
            `UPDATE news SET title = ?,image = ?, introduction = ?, text = ? WHERE id = ?`,
            [title, image, introduction, text, idNew]
        )

    } finally {
        if (connection) connection.release()
    }

}

module.exports = updateNewQuery;