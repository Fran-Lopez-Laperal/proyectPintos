const getDB = require("../../getDB");

const insertNewQuery = async (title, introduction, text, id_user) => {
  let connection;

  try {
    connection = await getDB();
    const [user] = await connection.query(`SELECT * FROM users WHERE id = ?`, [id_user]);
    if (user.length === 0) {
      generateError(`El usuario no existe`);
    }

    const [createNew] = await connection.query(`INSERT INTO news (title, introduction, text, id_user ) VALUES (?, ?, ?, ?)`, [
      title,
      introduction,
      text,
      id_user,
    ]);

    return {
      id: createNew.insertId,
      title,
      introduction,
      text,
      createdAt: new Date(),
    };
  } finally {
    if (connection) connection.release();
  }
};

module.exports = insertNewQuery;
