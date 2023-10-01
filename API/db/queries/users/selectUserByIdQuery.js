const getDB = require('../../getDB');

const { generateError } = require('../../../helpers');

const selectUserByIdQuery = async (idUser) => {
    let connection;

    try {
        connection = await getDB();

        // Tratamos de obtener al usuario con el id dado.
        const [users] = await connection.query(
            `SELECT id, name, email, avatar, createdAt FROM users WHERE id = ?`,
            [idUser]
        );

        // Si no hay ningún usuario lanzamos un error.
        if (users.length < 1) {
            generateError('Usuario no encontrado', 404);
        }

        return users[0];
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectUserByIdQuery;

