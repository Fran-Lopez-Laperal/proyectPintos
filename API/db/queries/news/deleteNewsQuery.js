const getDB = require("../../getDB");

const deleteNewsQuery = async (id_news) => {
  let connection;
  try {
    connection = await getDB();

    await connection.query(`DELETE FROM news WHERE id = ?`, [id_news]);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = deleteNewsQuery;
