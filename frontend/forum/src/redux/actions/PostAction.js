import axios from "axios";
import {
  CALLCENTER_GETALLPOSTS,
  CALLCENTER_GETONEPOST,
  CLIENT_GETALLPOSTS,
  CLIENT_GETONEPOST,
} from "../types";

export const getCallCentersPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts/callCenterPosts");
    dispatch({ type: CALLCENTER_GETALLPOSTS, payload: res.data });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getOneCallCenterPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/callCenterPosts/${id}`);
    dispatch({ type: CALLCENTER_GETONEPOST, payload: res.data });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const addCallCenterPost = (formData) => async () => {
  const config={
    headers:{
      authorization:localStorage.getItem('token')
    }
  }
  try {
    await axios.post("/api/posts/callcenter/addCallCenterPost", formData,config)
  } catch (error) {
    console.log(error.response.data);
  }
};

export const deleteCallCenterPost = (id) => async (dispatch) => {
  const config={
    headers:{
      authorization:localStorage.getItem('token')
    }
  }
  try {
    await axios.delete(`/api/posts/delete/callPost/${id}`,config);
    dispatch(getCallCentersPosts());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const editCallCenterPost = (id, formData) => async (dispatch) => {
  const config={
    headers:{
      authorization:localStorage.getItem('token')
    }
  }
  try {
    await axios.put(`/api/posts/update/callPost/${id}`, formData,config);
    dispatch(getCallCentersPosts());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getClientsPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts/clientPosts");
    dispatch({ type: CLIENT_GETALLPOSTS, payload: res.data });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getOneClientPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/clientPosts/${id}`);
    dispatch({ type: CLIENT_GETONEPOST, payload: res.data });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const addClientPost = (formData) => async (dispatch) => {
  const config={
    headers:{
      authorization:localStorage.getItem('token')
    }
  }
  try {
    await axios.post("/api/posts/client/addClientPost", formData,config);
    dispatch(getClientsPosts());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const deleteClientPost = (id) => async (dispatch) => {
  const config={
    headers:{
      authorization:localStorage.getItem('token')
    }
  }
  try {
    await axios.delete(`/api/posts/delete/clientPost/${id}`,config);
    dispatch(getClientsPosts());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const editClientPost = (id, formData) => async (dispatch) => {
  const config={
    headers:{
      authorization:localStorage.getItem('token')
    }
  }
  try {
    await axios.put(`/api/posts/update/clientPost/${id}`, formData,config);
    dispatch(getClientsPosts());
  } catch (error) {
    console.log(error.response.data);
  }
};
