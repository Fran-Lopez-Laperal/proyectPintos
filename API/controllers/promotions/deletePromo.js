const deletePromoQuery = require("../../db/queries/promotions/deletePromoQuery");
const selectPromoQuery = require("../../db/queries/promotions/selectPromoByIdQuery");
const { generateError, deleteImg } = require("../../helpers");

const deletePromo = async (req, res, next) => {
  try {
    const { idPromo } = req.params;
    const promo = await selectPromoQuery(req.user.id, idPromo);

    if (!promo) {
      generateError("No se encontró la promoción", 404);
    }

    if (promo.image) {
      await deleteImg(promo.image);
    }

    await  deletePromoQuery(idPromo);

    res.send({
      code: 200,
      status: "ok",
      message: "Promoción eliminado",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = deletePromo;