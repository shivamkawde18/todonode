import { yellow } from "@material-ui/core/colors";
import { takeEvery, takeLatest, put, call } from "redux-saga/effects";
// import { insertData,  } from "../Actions/action";
import {
  loginApi,
  emailPasswordApi,
  insertDataApi,
  getDbDataApi,
  updateFlagApi,
  removeFlagApi,
  removeTaskApi,
  editTaskApi,
} from "../Apicalls";

function* loginRequest(action) {
  let response = yield call(loginApi, action);
  yield put({ type: "login", data: response });
}
function* loginwithEmailAndPassword(action) {
  let response = yield call(emailPasswordApi, action);
  console.log(response);
  if (response != "error") yield put({ type: "login", data: response });
  else alert("Something went worng");
}
function* insertDataInDB(action) {
  let response = yield call(insertDataApi, action);
  yield put({ type: "databaseTask", data: response });
}

function* getDBData(action) {
  let response = yield call(getDbDataApi, action);
  console.log(response);
  yield put({ type: "getDataFromDb", data: response });
}

function* updateFlag(action) {
  console.log(action);
  console.log(action);
  let data = yield call(updateFlagApi, action);

  //yield put({type:"getDataFromDb",data:response});
}

function* removeFlag(action) {
  console.log(action);
  console.log(action);
  let data = yield call(removeFlagApi, action);

  //yield put({type:"getDataFromDb",data:response});
}

function* removeTask(action) {
  let data = yield call(removeTaskApi, action);
}

function* editTask(action) {
  let data = yield call(editTaskApi, action);
}

const handleMessage = function* handleMessage(params) {
  yield takeEvery("createUser", loginRequest);
  yield takeEvery("loginUser", loginwithEmailAndPassword);
  yield takeEvery("insertData", insertDataInDB);
  yield takeEvery("getData", getDBData);
  yield takeEvery("updateFlag", updateFlag);
  yield takeEvery("removeFlag", removeFlag);
  yield takeEvery("removeTask", removeTask);
  yield takeEvery("editTask", editTask);
};
export default handleMessage;
