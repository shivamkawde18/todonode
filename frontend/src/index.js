import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import CreateAc from "./components/CreateAc"
import {createUserReducer,dataBaseTasks} from "./redux/reducers/reducer";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import handleMessage from './saga/saga'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import Mytasks from "./components/Mytasks";
import Completetask from "./components/Completetask";
import Uncompletetask from "./components/Uncompletetask";
const sagaMiddelware=createSagaMiddleware()
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer=combineReducers({createUserReducer:createUserReducer,dataBaseTasks:dataBaseTasks})
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store=createStore(persistedReducer,applyMiddleware(sagaMiddelware));
let persistor = persistStore(store);
sagaMiddelware.run(handleMessage);
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Routes>
     
        <Route exact path="/create/user" element={<CreateAc></CreateAc>}></Route>
        <Route exact path="/Mytasks" element={<Mytasks></Mytasks>}></Route>
        <Route exact path="/completetask" element={<Completetask></Completetask>}></Route>
        <Route exact path="/Uncompletetask" element={<Uncompletetask></Uncompletetask>}></Route>
        <Route exact path="/" element={<App></App>}></Route>

        
      </Routes>
      </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
