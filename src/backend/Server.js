const express = require("express");
const crea = require("./Createuser");
var cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = 8000;
//app.use(cors);
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded());
let api = require("./Apis");
console.log(api);
api.api(app);
app.listen(port, () => {
  console.log("server is on");
});
app.get("/all", (req, res) => {
  res.send("hiii");
});
mongoose
  .connect(
    "mongodb+srv://admin:756aJPSzVNTkPyME@cluster0.topcj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((dc) => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not");
  });
