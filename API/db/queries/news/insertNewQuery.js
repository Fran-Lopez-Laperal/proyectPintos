const getDB = require("../../getDB");

const insertNewQuery = async (title, text, image, id_user) => {
  let connection;

  try {
    connection = await getDB();
    const [user] = await connection.query(`SELECT * FROM users WHERE id = ?`, [id_user]);
    if (user.length === 0) {
      generateError(`El usuario no existe`);
    }

    const [createNew] = await connection.query(`INSERT INTO news (title, text, image, id_user ) VALUES (?, ?, ?, ?)`, [title, text, image, id_user]);

    return {
      id: createNew.insertId,
      title,
      text,
      image,
      createdAt: new Date(),
    };
  } finally {
    if (connection) connection.release();
  }
};

module.exports = insertNewQuery;
