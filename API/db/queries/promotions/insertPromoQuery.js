const { generateError } = require("../../../helpers");
const getDB = require("../../getDB");

const insertPromoQuery = async (title, text, image, id_user) => {
    let connection;

    try {
        connection = await getDB();
        const [user] = await connection.query(`SELECT * FROM users WHERE id = ?`, [id_user]);
        if (user.length === 0) {
            generateError(`El usuario no existe`);
        }

        const [createPromotions] = await connection.query(`INSERT INTO promotions (title, text, image, id_user ) VALUES (?, ?, ?, ?)`, [
            title,
            text,
            image,
            id_user,
        ]);

        return {
            id: createPromotions.insertId,
            title,
            text,
            image,
            createdAt: new Date(),
        };
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertPromoQuery;
