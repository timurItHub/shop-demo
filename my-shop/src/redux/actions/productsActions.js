
import { fetchProducts, fetchProductById } from '../apiService';

// Action types
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_PRODUCT = 'SET_PRODUCT';

// Action creators
export const setProducts = (products) => ({ type: SET_PRODUCTS, payload: products });
export const setProduct = (product) => ({ type: SET_PRODUCT, payload: product });

// Thunk actions
export const loadProducts = () => async (dispatch) => {
    const products = await fetchProducts();
    dispatch(setProducts(products));
};

export const loadProductById = (id) => async (dispatch) => {
    const product = await fetchProductById(id);
    dispatch(setProduct(product));
};
