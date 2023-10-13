const getDB = require("../../getDB");

const deletePromoQuery = async (id_promo) => {
  let connection;
  try {
    connection = await getDB();

    await connection.query(`DELETE FROM promotions WHERE id = ?`, [id_promo]);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = deletePromoQuery;
