export const createUserReducer = (state = "", action) => {
  switch (action.type) {
    case "createUser":
      return state;
    case "login":
      console.log("iam in loginm");
      return action.data;
    case "logout":
      return null;
    default:
      return state;
  }
};

export const dataBaseTasks = (state = [], action) => {
  switch (action.type) {
    case "getDataFromDb":
      console.log(action.data);
      console.log(state + "ye state hai");
      let arr = [];
      arr.push(action.data);
      console.log(arr);
      return arr;
    default:
      return state;
  }
};
