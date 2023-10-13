const insertTimelineQuery = require("../../db/queries/timeline/insertTimelineQuery");
const { generateError, saveImg } = require("../../helpers");

const createTimeline = async (req, res, next) => {
  try {
    const { title, text, year } = req.body;
    console.log(req.body);

    if (!req.files?.image || !title || !text || !year) {
      generateError("Faltan campos", 400);
    }

    let image = await saveImg(req.files.image, 500);

    const timeline = await insertTimelineQuery(title, text, year, image, req.user.id);

    res.send({
      code: 201,
      status: "ok",
      data: {
        timeline,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createTimeline;

