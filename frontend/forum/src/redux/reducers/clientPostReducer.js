import { CLIENT_GETALLPOSTS, CLIENT_GETONEPOST } from "../types";

const initState = {
  clientPosts: [],
  clientPost: {},
  clientLoading: true,
};

function clientPostReducer(state = initState, { type, payload }) {
  switch (type) {
    case CLIENT_GETALLPOSTS:
      return {
        ...state,
        clientPosts: payload.posts,clientLoading:false
      };
    case CLIENT_GETONEPOST:
      return {
        ...state,
        clientPost: payload,
        clientLoading: false,
      };

    default:
      return state;
  }
}

export default clientPostReducer;
