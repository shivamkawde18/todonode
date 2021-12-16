const express = require("express");
const app = express();
const crea = require("./Createuser");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
let ApiCheckFlag;
const middelWare = (req, res, next) => {
  if (req.headers.authorization === undefined) {
    res.status(400).send("error");
    return;
  }
  next();
};
const api = (app) => {
  console.log(ApiCheckFlag);
  app.post("/auth/create/user", crea.createUser);
  app.post("/auth/login/user", crea.loginUser);
  app.use(middelWare);
  app.post("/userdata/insertDataInDb", crea.insertDataInDb);
  app.post("/user/tasks", crea.getTasks);
  app.post("/user/updateflag", crea.updateTaskFlag);
  app.post("/user/removeflag", crea.removeFlag);
  app.post("/usertask/remove", crea.taskRemove);
  app.post("/taskedit", crea.taskEdit);
};
module.exports = { api };
