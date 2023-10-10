const selectTimelineByIdQuery = require("../../db/queries/timeline/selectTimelineByIdQuery");
const updateTimelineQuery = require("../../db/queries/timeline/updateTimelinequery");

const { saveImg, deleteImg } = require("../../helpers");

const updateTimeline = async (req, res, next) => {
  try {
    const timeline = await selectTimelineByIdQuery(req.params.idTimeline);
    const { title, text, year } = req.body;
    console.log(title, text, year);

    let image = timeline.image;

    if (req.files && req.files.image) {
      const { image } = req.files;
      await deleteImg(timeline.image);

      image = await saveImg(image, 500);
    }

    await updateTimelineQuery(title, text, year, image, req.params.idTimeline);

    const updatedTimeline = await selectTimelineByIdQuery(req.params.idTimeline);

    res.send({
      code: 200,
      status: "ok",
      message: "Timeline actualizado",
      data: updatedTimeline,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = updateTimeline;