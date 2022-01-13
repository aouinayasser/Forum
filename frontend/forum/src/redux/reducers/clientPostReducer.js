import { CLIENT_GETALLPOSTS, CLIENT_GETONEPOST } from "../types";

const initState = {
  clientPosts: [],
  clientPost: {},
  loading: true,
};

function clientPostReducer(state = initState, { type, payload }) {
  switch (type) {
    case CLIENT_GETALLPOSTS:
      return {
        ...state,
        clientPosts: payload.posts,
      };
    case CLIENT_GETONEPOST:
      return {
        ...state,
        clientPost: payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default clientPostReducer;
