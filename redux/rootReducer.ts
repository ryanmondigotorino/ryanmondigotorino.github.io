import { combineReducers } from "@reduxjs/toolkit";
import systemApp from "./appSlice";

const rootReducer = combineReducers({
  systemApp,
});

export default rootReducer;
