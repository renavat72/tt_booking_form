import { FETCH_DATA_ERROR, FETCH_DATA, FETCH_DATA_SUCCESS } from "../types";


const initialState = {
    data: [],
    loading: false,
    error: null
}

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { loading: true, error: null, data: [] };
    case FETCH_DATA_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case FETCH_DATA_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};