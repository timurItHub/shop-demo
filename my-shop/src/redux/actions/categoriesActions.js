
import { fetchCategories } from '../apiService';

// Action types
export const SET_CATEGORIES = 'SET_CATEGORIES';

// Action creators
export const setCategories = (categories) => ({ type: SET_CATEGORIES, payload: categories });

// Thunk actions
export const loadCategories = () => async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
};
