const getDB = require("../../getDB");

const selectPromoByQuery = async (idPromo) => {
  let connection;

  try {
    connection = await getDB();

    const promo = await connection.query(`SELECT  id, title, text, image FROM promotions WHERE id = ?`, [idPromo]);
    
    return promo[0];
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectPromoByQuery;
