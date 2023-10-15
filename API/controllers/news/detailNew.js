const selectNewsByIdQuery = require("../../db/queries/news/selectNewsByIdQuery");

const detailNew = async (req, res, next) => {
    try {
        const { idNews } = req.params;
        console.log(idNews)
        const ownNew = await selectNewsByIdQuery(idNews);
        console.log(ownNew);

        res.send({
            status: "ok",
            data: {
                ownNew,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = detailNew;