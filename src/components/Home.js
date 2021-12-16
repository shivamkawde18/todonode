import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import "../Home.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, insertData, getData } from "../redux/Actions/action";
import { dataBaseTasks } from "../redux/reducers/reducer";
function Home(props) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 1000,
      height: 150,
      width: "100%",
    },
    media: {
      height: "200px",
    },
  });
  const classes = useStyles();
  let [color, setColor] = useState();
  let [task, setTask] = useState();
  let [sno, setSno] = useState(0);
  console.log(color + " " + task);
  const navigate = useNavigate();
  let deta = useSelector((state) => state.dataBaseTasks);
  console.log(deta);
  let dispatch = useDispatch();
  console.log(props.token);
  return (
    <>
      <Container maxWidth="sm">
        <h1>Todo App </h1>
        <div className="logout">
          <h3>{props.user.name}</h3>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              localStorage.removeItem("persist:root");
              dispatch(logout(""));
              navigate("/");
            }}
          >
            Logout
          </Button>
        </div>

        <h1 className="title">Enter Your Task</h1>

        <Card className={`${classes.root} framCard`}>
          <div className="inputDiv">
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={(e) => {
                console.log(e.currentTarget.innerText);
                setColor(e.currentTarget.innerText);
              }}
            >
              <MenuItem value={"red"}>red</MenuItem>
              <MenuItem value={"black"}>black</MenuItem>
              <MenuItem value={"green"}>green</MenuItem>
            </Select>

            <TextField
              id="outlined-multiline-flexible"
              label="Enter Task"
              multiline
              maxRows={4}
              value={task}
              variant="outlined"
              onChange={(e) => {
                console.log(e.target.value);
                setTask(e.target.value);
              }}
            />

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                let obj = {
                  content: task,
                  check: null,
                  color: color,
                  time: new Date().toLocaleTimeString(),
                  userid: props.user.uid,
                };
                dispatch(insertData({ obj, token: props.token }));
              }}
            >
              Add Task
            </Button>
          </div>
        </Card>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            const uid = props.user.uid;
            dispatch(getData({ uid, token: props.token }));
            navigate("/Mytasks");
          }}
        >
          Open Your Tasks
        </Button>
      </Container>
      <div></div>
    </>
  );
}
export default Home;
