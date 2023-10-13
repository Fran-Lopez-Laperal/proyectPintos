const insertPromoQuery = require("../../db/queries/promotions/insertPromoQuery");
const { generateError, saveImg } = require("../../helpers");

const createPromo = async (req, res, next) => {
  try {
    const { title, text } = req.body;
    if (!req.files?.image || !title || !text) {
      generateError("Faltan campos", 400);
    }

    let image = await saveImg(req.files.image, 500);

    const promotions = await insertPromoQuery(title, text, image, req.user.id);

    res.send({
      code: 201,
      status: "ok",
      data: {
        promotions,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createPromo;