const deleteNewQuery = require("../../db/queries/news/deleteNewQuery");
const selectNewByIdQuery = require("../../db/queries/news/selectNewByIdQuery");

const deleteNew = async (req, res, next) => {
    try {
        const { idNew } = req.params;
        console.log(idNew);

        const newId = await selectNewByIdQuery(idNew);
        console.log('que viene por aqui?????', newId);

        if (newId.length > 0) {
            const idToDelete = newId[0].id; 
            await deleteNewQuery(idToDelete);
        } else {
            
            return res.status(404).send({
                status: "error",
                message: "Noticia no encontrada"
            });
        }

        res.send({
            status: "ok",
            message: "Noticia eliminada"
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            status: "error",
            message: "Error al eliminar la noticia"
        });
    }
};

module.exports = deleteNew;