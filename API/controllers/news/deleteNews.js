const selectNewsByIdQuery = require("../../db/queries/news/selectNewsByIdQuery");
const deleteNewsQuery = require("../../db/queries/news/deleteNewsQuery");
const { generateError, deleteImg } = require("../../helpers");

const deleteNews = async (req, res, next) => {
  try {
    const { idNews } = req.params;
    const news = await selectNewsByIdQuery(req.user.id, idNews);

    if (!news) {
      generateError("No se encontró la noticia", 404);
    }

    if (news.image) {
      await deleteImg(news.image);
    }

    await deleteNewsQuery(idNews);

    res.send({
      code: 200,
      status: "ok",
      message: "Noticia eliminada",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteNews;
