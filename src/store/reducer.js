import { combineReducers } from "redux";
import { fetchReducer } from "./reducers/fetchReducer";
import { postReducer} from "./reducers/postReducer";

export const rootReducer = combineReducers({
    fetchReducer,
    postReducer
})