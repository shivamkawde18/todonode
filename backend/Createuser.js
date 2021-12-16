const db = require("./Dbconnection");
const express = require("express");
const app = express();
const jwtsetUp = require("./jwtsetup");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const JWT_KEY = "exsnandnkeuuu";
var cors = require("cors");
const bcrypt = require('bcrypt');
const saltRounds = 10;
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};
app.use(cors(corsOptions));

let createUser = async (req, res) => {
  console.log(req.body);
  let user = {
    username: req.body.userName,
    password: req.body.password,
  };
  data = await db.userModel
    .create(user)
    .then((e) => {
      let uid = e._id;
      let user = {
        name: e.username,
        uid: e._id,
      };
      let token = jwt.sign({ payload: user }, JWT_KEY);
      console.log(token);
      let name = e.username;
      res.send({ token, name, user });
    })
    .catch((e) => {
      // console.log("e
    });
};

const loginUser = async (req, res) => {
  console.log(req.body);
  let user = await db.userModel
    .findOne({
      username: `${req.body.userName}`,
      password: `${req.body.password}`,
    })
    .then((e) => {
      let user = {
        name: e.username,
        uid: e._id,
      };
      let token = jwt.sign({ payload: user }, JWT_KEY);
      let name = e.username;
      res.send({ token, name, user });
    })
    .catch((e) => {
      console.log(e);
      res.send("error");
    });
  console.log(user);
};
const insertDataInDb = async (req, res) => {
  let data = await db.dataModel.create(req.body.obj);
  res.send(data);
};

const getTasks = async (req, res) => {
  console.log(req.body.uid);
  let tasks = await db.dataModel.find({ userid: `${req.body.uid.uid}` });
  res.send(tasks);
};

const updateTaskFlag = async (req, res) => {
  console.log(req.body + " ye body h");

  let task = await db.dataModel.findOneAndUpdate(
    { _id: `${req.body.id}` },
    { check: true }
  );
  console.log(task);
  res.send(task);
};

const removeFlag = async (req, res) => {
  console.log(req.body);

  let task = await db.dataModel.findOneAndUpdate(
    { _id: `${req.body.id}` },
    { check: null }
  );
  console.log(task);
  res.send(task);
};

const taskRemove = async (req, res) => {
  let task = await db.dataModel.findOneAndDelete({ _id: `${req.body.id}` });
  console.log(task);
  res.send(task);
};

const taskEdit = async (req, res) => {
  console.log(req.body.taskid);
  let task = await db.dataModel.findOneAndUpdate(
    { _id: `${req.body.taskid}` },
    { content: req.body.data }
  );
  console.log(task);
  res.send(task);
};

module.exports = {
  createUser,
  loginUser,
  insertDataInDb,
  getTasks,
  updateTaskFlag,
  removeFlag,
  taskRemove,
  taskEdit,
};
