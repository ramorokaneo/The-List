import {FECT_USER}
const initialState = {
  userLists: [],
};

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_LISTS_SUCCESS':
      return {
        ...state,
        userLists: action.payload,
      };
    case 'SAVE_LIST_SUCCESS':
      return {
        ...state,
        userLists: [...state.userLists, action.payload],
      };
    default:
      return state;
  }
};

export default listsReducer;
