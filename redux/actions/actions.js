// actions.js
import { saveListToDatabase } from '../api';

export const saveList = (list) => {
  return async (dispatch) => {
    try {
      const savedList = await saveListToDatabase(list);
      dispatch({
        type: 'SAVE_LIST_SUCCESS',
        payload: savedList,
      });
    } catch (error) {
      // Handle error if any
      console.error('Error saving list:', error);
      throw error;
    }
  };
};
