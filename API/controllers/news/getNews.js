const selectNewsQuery = require("../../db/queries/news/selectNewsQuery");

const getNews = async (req, res, next) => {
  try {
    const news = await selectNewsQuery();

    res.send({
      status: "ok",
      data: {
        news,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getNews;
