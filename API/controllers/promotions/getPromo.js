const selectPromoQuery = require("../../db/queries/promotions/selectPromoQuery");

const getPromo = async (req, res, next) => {
  try {
    const timeline = await selectPromoQuery();

    res.send({
      status: "ok",
      data: {
        timeline,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getPromo;