// listSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  history: [],
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
    saveList: (state) => {
      const timestamp = new Date().toISOString();
      const savedList = {
        timestamp,
        items: state.list,
      };
      state.history.push(savedList);
      state.list = [];
    },
  },
});

export const { addItem, removeItem, clearList, saveList } = listSlice.actions;
export const selectList = (state) => state.list.list;
export const selectHistory = (state) => state.list.history;

export default listSlice.reducer;
