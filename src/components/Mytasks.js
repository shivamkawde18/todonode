import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";
import "../Style.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
// import Completelist from "./Completelist";
// import Uncompletetask from "./Uncompletetask";
import { dataBaseTasks } from "../redux/reducers/reducer";
import {
  updateFlag,
  getData,
  removeFlag,
  removeTask,
  editTask,
} from "../redux/Actions/action";
function Mytasks() {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 1100,
    },
    media: {
      height: 300,
    },
    rot: {
      width: "100%",
      maxWidth: 1000,
    },
    margin: {
      margin: theme.spacing(-2),
    },
  }));

  const flagStyle = {
    width: "0",
    height: "0",
    borderTop: " 25px solid transparent",
    borderLeft: "57px solid green",
    borderBottom: "36px solid transparent",
  };
  const classes = useStyles();
  let [arrow, setArrow] = useState(false);
  let [detail, setDetail] = useState(false);
  let [snoFlag, setSnoFlag] = useState();
  let [removeDetail, setRemoveDetail] = useState();
  let [getDetail, setGetDetail] = useState(true);
  let [completeList, setCompeleteList] = useState(false);
  let [Uncomplete, setUncompleteTask] = useState(false);
  let arr = [];
  arr = useSelector((state) => state.instData);
  let dispatch = useDispatch();
   let navigate=useNavigate();
  let tasks = useSelector((tasks) => tasks.dataBaseTasks);
  console.log(tasks);
  let a = (no) => {
    setSnoFlag(no);
  };

  let remove = (e) => {
    dispatch(removeTask(e));
  };
  let flagRemove = (e) => {
    dispatch(removeFlag(e));
  };
  let flagAdd = (e) => {
    dispatch(updateFlag(e));
  };

  let allData = (e) => {
    dispatch(getData(e));
  };
  let editData = (data) => {
    dispatch(editTask(data));
  };

  return (
    <div className="App" className="cardDiv">
      <h1 className="tittleTask" onClick={()=>{
        navigate("/")
      }}>Todo App</h1>
      <div className="btnDiv">
        <Button
          variant="contained"
          onClick={() => {
            navigate("/completetask")
          }}
        >
          complete Task
        </Button>
        <Button
          variant="contained"
          onClick={() => {
          navigate("/Uncompletetask")
          }}
        >
          Uncomplete Task
        </Button>
      </div>

      <div className="contentDiv">
        <>
           {tasks[0].length!==0?
          tasks[0].map((e) => {
            console.log(e._id);
            return (
              <>
                <Card
                  style={{ width: "40%" }}
                  className={detail ? "cardWithoutDetail" : ""}
                  className={`${classes.roo} ${
                    e.sno == snoFlag ? "" : "card"
                  } ${e.sno == removeDetail ? "card" : ""}`}
                >
                  <List className={classes.rot}>
                    <ListItem role={undefined} dense button>
                      <div
                        style={{
                          width: "0",
                          height: "0",
                          borderTop: " 25px solid transparent",
                          borderLeft: `36px solid ${e.color}`,
                          borderBottom: "25px solid transparent",
                          paddingLeft: "8px",
                        }}
                      ></div>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={e.check}
                          tabIndex={-1}
                          disableRipple
                          onChange={async () => {
                            console.log(e.userid);
                            if (e.check) flagRemove(e._id);
                            else flagAdd(e._id);
                            allData(e.userid);
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={e.content}
                        contentEditable={true}
                        onKeyUp={(ele) => {
                          console.log(ele.currentTarget.innerText);
                          editData({
                            taskid: e._id,
                            data: ele.currentTarget.innerText,
                          });
                 
                        }}
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          aria-label="delete"
                          className={classes.margin}
                          onClick={() => {
                            console.log(e);
                            remove(e._id);
                            allData(e.userid);
                          }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </Card>
              </>
            );
          })
          :<h3>No tasks</h3>}
        </>
      </div>
    </div>
  );
}

export default Mytasks;
