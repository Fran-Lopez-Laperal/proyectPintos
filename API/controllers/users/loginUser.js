const selectUserByUsernameQuery = require("../../db/queries/users/selectUserByUsernameQuery");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateError } = require("../../helpers");
const { SECRET } = process.env;

const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      generateError("Missing fields", 400);
    }

    const user = await selectUserByUsernameQuery(username);

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      generateError("Incorrect password", 401);
    }

    const userInfo = {
      id: user.id,
      //   role: username.role,
    };

    const token = jwt.sign(userInfo, SECRET, {
      expiresIn: "2d",
    });

    res.send({
      code: 200,
      status: "ok",
      data: {
        token,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = loginUser;
