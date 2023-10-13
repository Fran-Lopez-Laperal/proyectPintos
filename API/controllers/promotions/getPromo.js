const selectPromoQuery = require("../../db/queries/timeline/selectPromoQuery");

const getPromo = async (req, res, next) => {
  try {
    const promo = await selectPromoQuery();

    res.send({
      status: "ok",
      data: {
        promo,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getPromo;