const insertUserQuery = require("../../db/queries/users/insertUserQuery");


const registerUser = async (req, res, next) => {
    try {
        console.log(req.body)
        const { name, email, password,role } = req.body
        await insertUserQuery(name, email, password, role)
    
        res.send({
            status: 'ok',
            message: 'Usuario creado',
            data: {
                user: {
                    name,
                    email,
                    password,
                    role
                }
            }
        })
    } catch (error) {
        next(error)
    }
};

module.exports = registerUser;