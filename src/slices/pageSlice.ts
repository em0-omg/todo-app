import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDrawerOpen: false,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    drawerOpen: (state) => {
      state.isDrawerOpen = true;
    },
    drawerClose: (state) => {
      state.isDrawerOpen = false;
    },
  },
});

export const { drawerClose, drawerOpen } = pageSlice.actions;

export default pageSlice.reducer;
