const deleteTimelineQuery = require("../../db/queries/timeline/deleteTimelineQuery");
const selectTimelineByIdQuery = require("../../db/queries/timeline/selectTimelineByIdQuery");
const { generateError, deleteImg } = require("../../helpers");

const deleteTimeline = async (req, res, next) => {
  try {
    const { idTimeline } = req.params;
    const timeLine = await selectTimelineByIdQuery(req.user.id, idTimeline);

    if (!timeLine) {
      generateError("No se encontró la noticia", 404);
    }

    if (timeLine.image) {
      await deleteImg(timeLine.image);
    }

    await  deleteTimelineQuery(idTimeline);

    res.send({
      code: 200,
      status: "ok",
      message: "Timeline eliminado",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteTimeline;