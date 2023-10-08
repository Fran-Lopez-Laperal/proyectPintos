const getDB = require("../../getDB");

const selectNewsByIdQuery = async (idNews) => {
  let connection;

  try {
    connection = await getDB();

    const news = await connection.query(`SELECT  id, title, introduction, text, image FROM news WHERE id = ?`, [idNews]);
    return news[0];
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectNewsByIdQuery;
