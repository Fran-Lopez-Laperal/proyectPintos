const getDB = require("../../getDB");

const selectPromoQuery = async () => {
  let connection;
  try {
    connection = await getDB();

    let [promo] = await connection.query(`SELECT id, title, text, image FROM promotions`);
    return promo;
  } finally {
    connection?.release();
  }
};

module.exports = selectPromoQuery;