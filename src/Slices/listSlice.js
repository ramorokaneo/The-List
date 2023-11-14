import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.list.push(action.payload);
    },
    removeItem: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    clearList: (state) => {
      state.list = [];
    },
  },
});

export const { addItem, removeItem, clearList } = listSlice.actions;
export const selectList = (state) => state.list.list;

export default listSlice.reducer;
