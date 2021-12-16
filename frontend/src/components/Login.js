import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import "../Style.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import{loginUser}from"../redux/Actions/action";
import { useDispatch,useSelector } from "react-redux";
const useStyles = makeStyles({
  root: {
    width: "50%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
function Login() {
  let [userName, setUserName] = useState();
  let [password, setPassword] = useState();
  console.log(userName, password);
  // let history=useHistory();
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch=useDispatch();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className="mainDiv">
      <h1> Todo App </h1>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <TextField
            id="standard-password-input"
            label="User name"
            type="text"
            autoComplete="current-password"
            onKeyUp={(e) => {
              setUserName(e.target.value);
            }}
          />
          <br />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onKeyUp={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <Button
            style={{ marginTop: "5px" }}
            className="LoginBtn"
            variant="contained"
            color="primary"
            onClick={()=>{

                 if(userName==undefined||password==undefined)
                 alert("Please fill all fields");
                 else
                   dispatch(loginUser({userName,password}));
            }}
          >
            Login
          </Button>
        </CardContent>
      </Card>
      <Button
        style={{ background: "green" }}
        variant="contained"
        color="primary"
        onClick={() => {
          navigate("/create/user");
        }}
      >
        Create Account
      </Button>
    </div>
  );
}
export default Login;
