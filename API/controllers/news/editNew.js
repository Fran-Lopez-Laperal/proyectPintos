const selectNewByIdQuery = require("../../db/queries/news/selectNewByIdQuery");
const updateNewQuery = require("../../db/queries/news/updateNewQuery");

const editNew = async (req, res, next) => {

    try {

        const { idNew } = req.params;
        console.log(idNew)

        await selectNewByIdQuery(idNew);


        const { title, image, introduction, text } = req.body;

        await updateNewQuery(title, image, introduction, text, idNew)

        res.send({
            status: "ok",
            message: "Noticia editada"
        })

    } catch (error) {
        next(error)
    }




}


module.exports = editNew;