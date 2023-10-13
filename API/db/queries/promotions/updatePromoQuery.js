const getDB = require("../../getDB");

const updatePromoQuery = async (title, text, image, idPromo) => {
  let connection;

  try {
    connection = await getDB();

    if (title) {
      await connection.query(`UPDATE promotions SET title = ? WHERE id = ?`, [title, idPromo]);
    }
   
    if (text) {
      await connection.query(`UPDATE promotions SET text = ? WHERE id = ?`, [text, idPromo]);
    }

    if (image) {
      await connection.query(`UPDATE promotions SET image = ? WHERE id = ?`, [image, idPromo]);
    }
  } finally {
    if (connection) connection.release();
  }
};

module.exports = updatePromoQuery;