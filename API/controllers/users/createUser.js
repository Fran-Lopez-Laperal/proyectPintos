const createUserQuery = require("../../db/queries/users/createUserQuery");
const { generateError } = require("../../helpers");

const createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      generateError("Missing fields", 400);
    }

    await createUserQuery(username, password);

    res.send({
      code: 200,
      status: "ok",
      message: "User created",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = createUser;
