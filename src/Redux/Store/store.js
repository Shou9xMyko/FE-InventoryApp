import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import InventoryReducer from "../Reducer/ReducerProduct";
import { thunk } from "redux-thunk";
import Loader from "../Reducer/ReducerLoader";
import LoginReducer from "../Reducer/ReducerLogin";

const rootReducer = combineReducers({
  InventoryReducer,
  Loader,
  LoginReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
