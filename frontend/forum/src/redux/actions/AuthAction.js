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
} from "../types";

export const jobSeekerRegister = (formData, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/jobseeker/signup", formData);
    dispatch({ type: JOBSEEKER_REGISTER, payload: res.data });
    navigate("/posts");
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

export const clientRegister = (formData, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/client/signup", formData);
    dispatch({ type: CLIENT_REGISTER, payload: res.data });
    navigate("/posts");
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
