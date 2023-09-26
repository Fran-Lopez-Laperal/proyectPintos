const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();


app.listen(process.env.PORT, () => {
    console.log(`Server listening at http://localhost:${process.env.PORT}`);
  });