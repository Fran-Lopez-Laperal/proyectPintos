const selectPromoByQuery = require("../../db/queries/promotions/selectPromoByIdQuery");

const detailPromo = async (req, res, next) => {
    try {
        const { idPromo } = req.params;

        const promo = await selectPromoByQuery(idPromo)

        res.send({
            status: "ok",
            data: {
                promo
            }
        })
    } catch (error) {
        next(error);
    }
}

module.exports = detailPromo