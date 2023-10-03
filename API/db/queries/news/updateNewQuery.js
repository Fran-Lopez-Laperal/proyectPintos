const getDB = require("../../getDB");

const updateNewQuery = async (title, image, introduction, text, id_news) => {
  let connection;

  try {
    connection = await getDB();

    await connection.query(`UPDATE news SET title = ?,image = ?, introduction = ?, text = ? WHERE id = ?`, [
      title,
      image,
      introduction,
      text,
      id_news,
    ]);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = updateNewQuery;
