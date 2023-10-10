const getDB = require("../../getDB");

const insertTimelineQuery = async (title, text,year, image, id_user) => {
  let connection;

  try {
    connection = await getDB();
    const [user] = await connection.query(`SELECT * FROM users WHERE id = ?`, [id_user]);
    if (user.length === 0) {
      generateError(`El usuario no existe`);
    }

    const [createTimeline] = await connection.query(`INSERT INTO timeLine (title, text,year, image, id_user ) VALUES (?,?, ?, ?, ?)`, [
      title,
      text,
      year,
      image,
      id_user,
    ]);

    return {
      id: createTimeline.insertId,
      title,
      text,
      year,
      image,
      createdAt: new Date(),
    };
  } finally {
    if (connection) connection.release();
  }
};

module.exports = insertTimelineQuery;