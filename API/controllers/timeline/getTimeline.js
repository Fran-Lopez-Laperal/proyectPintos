const selectTimelineQuery = require("../../db/queries/timeline/selectTimelineQuery");

const getTimeline = async (req, res, next) => {
  try {
    const timeline = await selectTimelineQuery();

    res.send({
      status: "ok",
      data: {
        timeline,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getTimeline;