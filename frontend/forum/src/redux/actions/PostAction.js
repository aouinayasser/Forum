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
    console.log(error.response.data)
  }
};

export const getOneCallCenterPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/callCenterPosts/${id}`);
    dispatch({ type: CALLCENTER_GETONEPOST, payload: res.data });
  } catch (error) {
    console.log(error.response.data)
  }
};

export const getClientsPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts/clientPosts" );
    dispatch({ type: CLIENT_GETALLPOSTS, payload: res.data });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getOneClientPost = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "/api/posts/clientPosts/:clientPostId"
      
    );
    console.log(res.data);
    dispatch({ type: CLIENT_GETONEPOST, payload: res.data });
  } catch (error) {
    console.log(error.response.data);
  }
};
