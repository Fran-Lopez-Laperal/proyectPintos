require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { newUser } = require("./controllers/users");
const createNew = require("./controllers/news/createNew");
const getNews = require("./controllers/news/getNews");
const deleteNew = require("./controllers/news/deleteNew");
const editNew = require("./controllers/news/editNew");

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());


app.post('/register', newUser);
app.post('/criarNoticia' , createNew);
app.get('/noticias' , getNews);
app.delete('/noticias/:idNew' , deleteNew);
app.put('/noticias/:idNew' , editNew);


app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.httpStatus || 500).send({
    status: "error",
    message: err.message,
  });
});

//MIDDLEWARE RUTA NO ENCONTRADA
app.use((req, res) => {
  res.status(404).send({
    status: "error",
    message: "Ruta no encontrada",
  });
});



const port = 3000
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });