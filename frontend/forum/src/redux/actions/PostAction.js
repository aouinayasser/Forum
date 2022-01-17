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

export const addCallCenterPost = (formData) => async (dispatch) => {
  try {
    await axios.post("/api/posts/addCallCenterPost", formData);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const deleteCallCenterPost = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/delete/callPost/${id}`);
    dispatch(getCallCentersPosts());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const editCallCenterPost = (id, formData) => async (dispatch) => {
  try {
    await axios.put(`/api/posts/update/callPost/${id}`, formData);
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
  try {
    await axios.post("/api/posts/addClientPost", formData);
    dispatch(getClientsPosts());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const deleteClientPost = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/delete/clientPost/${id}`);
    dispatch(getClientsPosts());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const editClientPost = (id, formData) => async (dispatch) => {
  try {
    await axios.put(`/api/posts/update/clientPost/${id}`, formData);
    dispatch(getClientsPosts());
  } catch (error) {
    console.log(error.response.data);
  }
};
