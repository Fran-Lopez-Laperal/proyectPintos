const getDB = require("../../getDB");

const updateTimelineQuery = async (title, text,year, image, idTimeline) => {
  let connection;

  try {
    connection = await getDB();

    if (title) {
      await connection.query(`UPDATE timeLine SET title = ? WHERE id = ?`, [title, idTimeline]);
    }
   
    if (text) {
      await connection.query(`UPDATE timeLine SET text = ? WHERE id = ?`, [text, idTimeline]);
    }
    if (year) {
      await connection.query(`UPDATE timeLine SET year = ? WHERE id = ?`, [year, idTimeline]);
    }
    if (image) {
      await connection.query(`UPDATE timeLine SET image = ? WHERE id = ?`, [image, idTimeline]);
    }
  } finally {
    if (connection) connection.release();
  }
};

module.exports = updateTimelineQuery;
