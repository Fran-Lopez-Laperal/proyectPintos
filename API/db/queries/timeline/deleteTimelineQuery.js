const getDB = require("../../getDB");

const deleteTimelineQuery = async (id_timeline) => {
  let connection;
  try {
    connection = await getDB();

    await connection.query(`DELETE FROM timeLine WHERE id = ?`, [id_timeline]);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = deleteTimelineQuery;
