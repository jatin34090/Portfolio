const express = require("express");
const route = require("./routers/potfolioRoute")
// const bodyParser = require('body-parser');

require("dotenv").config();


const cors = require("cors")
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


// app.use(express.urlencoded({ extended: true })); + app.use(express.json()) ===== app.use(bodyParser.json());

app.use(cors());
const port = 3000;

app.use("/api/v1", route);

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${port}`);
})