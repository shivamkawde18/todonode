export const createUser = (user) => {
  return {
    type: "createUser",
    payload: user,
  };
};

export const loginUser = (user) => {
  return {
    type: "loginUser",
    payload: user,
  };
};

export const logout = (user) => {
  return {
    type: "logout",
    payload: user,
  };
};
export const insertData = (data) => {
  return {
    type: "insertData",
    payload: data,
  };
};
export const getData = (userid) => {
  return {
    type: "getData",
    payload: userid,
  };
};

export const updateFlag = (taskid) => {
  return {
    type: "updateFlag",
    payload: taskid,
  };
};

export const removeFlag = (taskid) => {
  return {
    type: "removeFlag",
    payload: taskid,
  };
};

export const removeTask = (taskid) => {
  return {
    type: "removeTask",
    payload: taskid,
  };
};
export const editTask = (taskid) => {
  return {
    type: "editTask",
    payload: taskid,
  };
};
