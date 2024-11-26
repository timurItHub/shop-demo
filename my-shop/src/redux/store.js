import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './reducers/cartReducer';


const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const categoriesReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};


const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    categories: categoriesReducer,
  },
});

export default store;
