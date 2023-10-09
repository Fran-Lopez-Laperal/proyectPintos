const getDB = require("../../getDB");

const selectNewsQuery = async () => {
  let connection;
  try {
    connection = await getDB();

    let [news] = await connection.query(`SELECT id, title, introduction, text, image FROM news`);
    return news;
  } finally {
    connection?.release();
  }
};

module.exports = selectNewsQuery;
