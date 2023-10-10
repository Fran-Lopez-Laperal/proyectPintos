const getDB = require("../../getDB");

const selectTimelineByIdQuery = async (idTimeline) => {
  let connection;

  try {
    connection = await getDB();

    const timeline = await connection.query(`SELECT  id, title, text,year, image FROM timeLine WHERE id = ?`, [idTimeline]);
    return timeline[0];
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectTimelineByIdQuery;