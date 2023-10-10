const selectNewsByIdQuery = require("../../db/queries/news/selectNewsByIdQuery");
const updateNewQuery = require("../../db/queries/news/updateNewQuery");

const { saveImg, deleteImg } = require("../../helpers");

const updateNews = async (req, res, next) => {
  try {
    const news = await selectNewsByIdQuery(req.params.idNews);
    const { title, text } = req.body;
    console.log(title, text);

    let image = news.image;

    if (req.files && req.files.image) {
      const { image } = req.files;
      await deleteImg(news.image);

      image = await saveImg(image, 500);
    }

    await updateNewQuery(title, text, image, req.params.idNews);

    const updatedNews = await selectNewsByIdQuery(req.params.idNews);

    res.send({
      code: 200,
      status: "ok",
      message: "Noticia actualizada",
      data: updatedNews,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = updateNews;
