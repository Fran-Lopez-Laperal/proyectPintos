const insertUserQuery = require('../../db/queries/users/insertUserQuery');

const { generateError } = require('../../helpers');

const newUser = async (req, res, next) => {
    try {
        // Obtenemos el email y la contraseña del body.
        const { name, email, password } = req.body;

        // Si falta algún campo lanzamos un error.
        if (!name || !email || !password) {
            generateError('Faltan campos', 400);
        }

        // Creamos el usuario.
        await insertUserQuery(name, email, password);

        res.send({
            status: 'ok',
            message: 'Usuario creado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newUser;
