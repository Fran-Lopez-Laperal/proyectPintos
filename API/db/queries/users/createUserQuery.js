const getDB = require("../../getDB");
const bcrypt = require("bcrypt");
const { generateError } = require("../../../helpers");

const createUserQuery = async (username, password) => {
  let connection;

  try {
    connection = await getDB();

    let [users] = await connection.query(`SELECT id FROM users WHERE username = ?`, [username]);
    if (users.length > 0) {
      generateError(`The username ${users[0].username} all ready exists`, 403);
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await connection.query(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, hashedPassword]);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = createUserQuery;
