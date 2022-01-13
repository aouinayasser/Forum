import { CALLCENTER_GETALLPOSTS, CALLCENTER_GETONEPOST } from "../types";

const initState = {
  callCenterPosts: [],
  callCenterPost: {},
  loading:true
};

function callCenterPostReducer(state = initState, { type, payload }) {
  switch (type) {
    case CALLCENTER_GETALLPOSTS:
      return {
        ...state,
        callCenterPosts: payload.posts
      };
    case CALLCENTER_GETONEPOST:
      return {
        ...state,
        callCenterPost: payload,loading:false
      };

    default:
      return state;
  }
}

export default callCenterPostReducer;
