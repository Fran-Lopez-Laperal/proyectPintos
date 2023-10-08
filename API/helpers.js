const fs = require("fs/promises");
const path = require("path");
const sharp = require("sharp");
const { v4: uuid } = require("uuid");
const { UPLOADS_DIR } = process.env;

const generateError = (msg, code) => {
  const err = new Error(msg);
  err.httpStatus = code;
  throw err;
};

const saveImg = async (img, resizePx) => {
  const uploadsPath = path.join(__dirname, UPLOADS_DIR);
  try {
    await fs.access(uploadsPath);
  } catch {
    await fs.mkdir(uploadsPath);
  }

  const sharpImg = sharp(img.data);
  sharpImg.resize(resizePx);

  const imgName = `${uuid()}.webp`;
  const imgPath = path.join(uploadsPath, imgName);

  await sharpImg.toFile(imgPath);
  return imgName;
};

const deleteImg = async (imgName) => {
  try {
    const imgPath = path.join(__dirname, UPLOADS_DIR, imgName);
    try {
      await fs.access(imgPath);
    } catch (err) {
      console.error("access error:", err);
      return;
    }

    await fs.unlink(imgPath);
  } catch (err) {
    generateError("Error al eliminar la imagen del servidor");
  }
};

module.exports = {
  generateError,
  saveImg,
  deleteImg,
};
