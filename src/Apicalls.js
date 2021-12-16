import axios from "axios";
const serve_port = "http://localhost:8000";
export let loginApi = async (action) => {
  let res = await axios.post(`${serve_port}/auth/create/user`, action.payload);
  console.log(res);
  return await res.data;
};

export let emailPasswordApi = async (action) => {
  let res = await axios.post(`${serve_port}/auth/login/user`, action.payload);
  console.log(res);
  return await res.data;
};

export let insertDataApi = async (action) => {
  console.log(action);
  let header = { Authorization: action.payload.token };
  let response = await axios.post(
    `${serve_port}/userdata/insertDataInDb`,
    action.payload,
    { headers: header }
  );
  console.log(response);
  return await response.data;
};
export let getDbDataApi = async (action) => {
  console.log(action);
  const header = {
    Authorization: action.payload.token,
  };
  let response = await axios.post(
    `${serve_port}/user/tasks`,
    {
      uid: action.payload,
    },
    { headers: header }
  );
  console.log(response);
  return await response.data;
};

export let updateFlagApi = async (action) => {
  console.log(action);
  const header = {
    Authorization: action.payload.token,
  };
  let response = await axios.post(
    `${serve_port}/user/updateflag`,
    {
      id: action.payload.id,
    },
    { headers: header }
  );
  console.log(response);
  return response.data;
};

export let removeFlagApi = async (action) => {
  console.log(action);
  const header = {
    Authorization: action.payload.token,
  };
  let response = await axios.post(
    `${serve_port}/user/removeflag`,
    {
      id: action.payload.id,
    },
    { headers: header }
  );
  console.log(response);
  return response.data;
};

export let removeTaskApi = async (action) => {
  console.log(action);
  const header = {
    Authorization: action.payload.token,
  };
  let response = await axios.post(
    `${serve_port}/usertask/remove`,
    {
      id: action.payload.id,
    },
    { headers: header }
  );
};

export let editTaskApi = async (action) => {
  console.log(action);
  const header = {
    Authorization: action.payload.token,
  };
  let response = await axios.post(`${serve_port}/taskedit`, action.payload, {
    headers: header,
  });
  console.log(response);
};
