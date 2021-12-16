import "./App.css";
import Home from "./Home";
import Login from "./Login";
import { createUserReducer } from "../redux/reducers/reducer";
import { useSelector, useDispatch } from "react-redux";
function App() {
  let userToken = useSelector((user) => user.createUserReducer);
  return (
    <div className="">
      {userToken ? <Home user={userToken.user} token={userToken.token}></Home> : <Login></Login>}
    </div>
  );
}

export default App;
