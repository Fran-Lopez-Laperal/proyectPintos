const getDB = require("../../getDB");

const insertNewQuery = async (id_user, title, introduction, text) => {
  let connection;

  try {
    connection = await getDB();

    const [createNew] = await connection.query(`INSERT INTO news (id_user, title, introduction, text) VALUES (?,?,?,?)`, [
      id_user,
      title,
      introduction,
      text,
    ]);

    return createNew;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = insertNewQuery;
