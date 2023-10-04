const getDB = require("../../getDB");
const { generateError } = require("../../../helpers");

const selectUserByUsernameQuery = async (username) => {
  let connection;

  try {
    connection = await getDB();

    const [users] = await connection.query(`SELECT id, username, password FROM users WHERE username = ?`, [username]);

    if (users.length < 1) {
      generateError("User not found", 404);
    }

    return users[0];
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectUserByUsernameQuery;
