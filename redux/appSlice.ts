/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Drawer = {
  isVisible: boolean;
  action: string;
};

export type InitialState = {
  drawer?: Drawer;
};

const initialState: InitialState = {
  drawer: {
    isVisible: false,
    action: "",
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleDrawer(state, action: PayloadAction<Drawer>) {
      if (state.drawer) {
        state.drawer.isVisible = action.payload.isVisible;
        state.drawer.action = action.payload.action;
      }
    },
  },
});

export const { toggleDrawer } = appSlice.actions;

export default appSlice.reducer;
