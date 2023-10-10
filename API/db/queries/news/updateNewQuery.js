const getDB = require("../../getDB");

const updateNewQuery = async (title, text, image, idNews) => {
  let connection;

  try {
    connection = await getDB();

    if (title) {
      await connection.query(`UPDATE news SET title = ? WHERE id = ?`, [title, idNews]);
    }
    if (text) {
      await connection.query(`UPDATE news SET text = ? WHERE id = ?`, [text, idNews]);
    }
    if (image) {
      await connection.query(`UPDATE news SET image = ? WHERE id = ?`, [image, idNews]);
    }
  } finally {
    if (connection) connection.release();
  }
};

module.exports = updateNewQuery;
