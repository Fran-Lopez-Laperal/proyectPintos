require("dotenv").config();

const express = require("express");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(fileUpload());
app.use("/public", express.static("public"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

const isAuth = require("../middleware/isAuth");

/**
 * #################
 * ## Controllers ##
 * #################
 */

const createUser = require("../controllers/users/createUser");
const loginUser = require("../controllers/users/loginUser");

const {
  getNews,
  updateNews,
  createNews,
  deleteNews
} = require("../controllers/news");

const {
  getTimeline,
  updateTimeline,
  deleteTimeline,
  createTimeline
} = require("../controllers/timeline");
const createPromo = require("../controllers/promotions/createPromo");
const getPromo = require("../controllers/promotions/getPromo");
const deletePromo = require("../controllers/promotions/deletePromo");
const detailPromo = require("../controllers/promotions/detailPromo");


app.post("/register", createUser);
app.post("/login", loginUser);

app.get("/news", getNews);
app.put("/news/:idNews", isAuth, updateNews);
app.post("/createNews", isAuth, createNews);
app.delete("/news/:idNews", isAuth, deleteNews);

app.get("/timeline", getTimeline);
app.put("/timeline/:idTimeline", isAuth, updateTimeline);
app.post("/createTimeline", isAuth, createTimeline);
app.delete("/timeline/:idTimeline", isAuth, deleteTimeline);

app.post("/promo",isAuth, createPromo);
app.get("/promo", getPromo)
app.delete("/promo/:idPromo", isAuth, deletePromo)
app.get("/promo/:idPromo", isAuth, detailPromo)

/**
 * #################
 * ## Middlewares ##
 * #################
 */

app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.httpStatus || 500).send({
    status: "error",
    message: err.message,
  });
});

app.use((req, res) => {
  res.status(404).send({
    status: "error",
    message: "Ruta no encontrada",
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
