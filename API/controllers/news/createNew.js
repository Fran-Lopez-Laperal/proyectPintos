const insertNewQuery = require("../../db/queries/news/insertNewQuery");
const { generateError, saveImg } = require("../../helpers");

const createNew = async (req, res, next) => {
  try {
    const { title, introduction, text } = req.body;
    console.log(req.body);

    if (!req.files?.image || !title || !introduction || !text) {
      generateError("Faltan campos", 400);
    }

    let image = await saveImg(req.files.image, 500);

    const news = await insertNewQuery(title, introduction, text, image, req.user.id);

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

module.exports = createNew;
