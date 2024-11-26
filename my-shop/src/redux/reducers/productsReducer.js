
import { SET_PRODUCTS, SET_PRODUCT } from '../actions/productsActions';

const initialState = {
    products: [],
    product: null,
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return { ...state, products: action.payload };
        case SET_PRODUCT:
            return { ...state, product: action.payload };
        default:
            return state;
    }
};
