import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';

export type Drawer = {
  isVisible: boolean;
};

export type InitialState = {
  drawer?: Drawer;
};

const initialState: InitialState = {
  drawer: {
    isVisible: false,
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleDrawer(state, action: PayloadAction<Drawer>) {
      if (state.drawer) {
        state.drawer.isVisible = action.payload.isVisible;
      }
    },
  },
});

export const { toggleDrawer } = appSlice.actions;

export default appSlice.reducer;
