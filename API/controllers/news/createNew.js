const insertNewQuery = require("../../db/queries/news/insertNewQuery");

const createNew = async (req, res, next) => {
  try {
    const { title, introduction, text } = req.body;

    const news = await insertNewQuery(title, introduction, text, req.user.id);

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
