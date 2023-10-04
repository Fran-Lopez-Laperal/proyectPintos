require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

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

/**
 * ######################
 * ## Users Controllers##
 * ######################
 */
const isAuth = require("../middleware/isAuth");

const createUser = require("../controllers/users/createUser");
const loginUser = require("../controllers/users/loginUser");

const createNew = require("../controllers/news/createNew");

app.post("/register", createUser);
app.post("/login", loginUser);

app.post("/crearNoticia", isAuth, createNew);

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

// const createNew = require("./controllers/news/createNew");
// const getNews = require("./controllers/news/getNews");
// const deleteNew = require("./controllers/news/deleteNew");
// const editNew = require("./controllers/news/editNew");

// const isAuth = require("./middleware/isAuth");

// app.post("/criarNoticia", isAuth, createNew);
// app.get("/noticias", isAuth, getNews);
// app.delete("/noticias/:id_news", isAuth, deleteNew);
// app.put("/noticias/:id_news", isAuth, editNew);
