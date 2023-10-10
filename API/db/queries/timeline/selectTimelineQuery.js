const getDB = require("../../getDB");

const selectTimelineQuery = async () => {
  let connection;
  try {
    connection = await getDB();

    let [timeline] = await connection.query(`SELECT id, title, year, text, image FROM timeLine`);
    return timeline;
  } finally {
    connection?.release();
  }
};

module.exports = selectTimelineQuery;
