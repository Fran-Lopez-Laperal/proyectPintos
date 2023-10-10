const insertNewQuery = require("../../db/queries/news/insertNewQuery");
const { generateError, saveImg } = require("../../helpers");

const createNews = async (req, res, next) => {
  try {
    const { title, text } = req.body;
    console.log(req.body);

    if (!req.files?.image || !title || !text) {
      generateError("Faltan campos", 400);
    }

    let image = await saveImg(req.files.image, 500);

    const news = await insertNewQuery(title, text, image, req.user.id);

    res.send({
      code: 201,
      status: "ok",
      data: {
        news,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createNews;
