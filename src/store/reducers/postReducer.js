import { POST_DATA_SUCCESS, POST_DATA_ERROR, POST_DATA } from "../types";
const initialState = {
    data: {},
    post: null,
    loading: false,
    error: null
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_DATA:
        return { loading: true};
      case POST_DATA_SUCCESS:
        return { loading: false, post: true, data: action.payload };
      case POST_DATA_ERROR:
        return { loading: false, post: true, error: action.payload };
      default:
        return state;
    }
  };