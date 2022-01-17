import axios from "axios";
import {
  CLIENT_FAIL,
  CLIENT_REGISTER,
  CALLCENTER_FAIL,
  CALLCENTER_REGISTER,
  JOBSEEKER_FAIL,
  JOBSEEKER_REGISTER,
  GET_JOBSEEKER,
  GET_CALLCENTER,
  GET_CLIENT,
  JOBSEEKER_LOGIN,
  CALLCENTER_LOGIN,
  CLIENT_LOGIN,
  JOBSEEKER_LOGOUT,
  CALLCENTER_LOGOUT,
  CLIENT_LOGOUT,
} from "../types";

export const jobSeekerRegister = (formData, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/jobseeker/signup", formData);
    dispatch({ type: JOBSEEKER_REGISTER, payload: res.data });
    navigate("/callposts");
  } catch (error) {
    dispatch({ type: JOBSEEKER_FAIL });
  }
};

export const jobSeekerLogin = (formData, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/jobseeker/signin", formData);
    dispatch({ type: JOBSEEKER_LOGIN, payload: res.data });
    navigate("/callposts");
  } catch (error) {
    dispatch({ type: JOBSEEKER_FAIL });
  }
};

export const callCenterRegister = (formData, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/callcenter/signup", formData);
    dispatch({ type: CALLCENTER_REGISTER, payload: res.data });
    navigate("/posts");
  } catch (error) {
    dispatch({ type: CALLCENTER_FAIL });
  }
};

export const callCenterLogin = (formData, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/callcenter/signin", formData);
    dispatch({ type: CALLCENTER_LOGIN, payload: res.data });
    navigate("/posts");
  } catch (error) {
    dispatch({ type: CALLCENTER_FAIL });
  }
};

export const clientRegister = (formData, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/client/signup", formData);
    dispatch({ type: CLIENT_REGISTER, payload: res.data });
    navigate("/ClientCallPostList");
  } catch (error) {
    dispatch({ type: CLIENT_FAIL });
  }
};

export const clientLogin = (formData, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/client/signin", formData);
    dispatch({ type: CLIENT_LOGIN, payload: res.data });
    navigate("/ClientCallPostList");
  } catch (error) {
    dispatch({ type: CLIENT_FAIL });
  }
};

export const currentJobSeeker = () => async (dispatch) => {
  const config = {
    headers: {
      "authorization": localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/api/auth/jobseeker/current", config);
    dispatch({ type: GET_JOBSEEKER, payload: res.data });
  } catch (error) {
    dispatch({ type: JOBSEEKER_FAIL });
  }
};

export const currentCallCenter = () => async (dispatch) => {
  const config = {
    headers: {
      "authorization": localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/api/auth/callcenter/current", config);
    dispatch({ type: GET_CALLCENTER, payload: res.data });
  } catch (error) {
    dispatch({ type: CALLCENTER_FAIL });
  }
};

export const currentClient = () => async (dispatch) => {
  const config = {
    headers: {
      "authorization": localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/api/auth/client/current", config);
    dispatch({ type: GET_CLIENT, payload: res.data });
  } catch (error) {
    dispatch({ type: CLIENT_FAIL });
  }
};

export const jobSeekerLogout=()=>{
  return{
    type:JOBSEEKER_LOGOUT
  }
}

export const callCenterLogout=()=>{
  return{
    type:CALLCENTER_LOGOUT
  }
}

export const clientLogout=()=>{
  return{
    type:CLIENT_LOGOUT
  }
}