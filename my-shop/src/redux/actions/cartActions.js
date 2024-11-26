
import { fetchCart, addToCart, removeFromCart, updateCartQuantity } from '../apiService';


// Action types
export const SET_CART = 'SET_CART';

// Action creators
export const setCart = (cart) => ({ type: SET_CART, payload: cart });

// Thunk actions
export const loadCart = () => async (dispatch) => {
    const cart = await fetchCart();
    dispatch(setCart(cart));
};

export const addItemToCart = (productId, quantity) => async (dispatch) => {
    const cart = await addToCart(productId, quantity);
    dispatch(setCart(cart));
};

export const removeItemFromCart = (productId) => async (dispatch) => {
    const cart = await removeFromCart(productId);
    dispatch(setCart(cart));
};

export const updateItemQuantity = (productId, quantity) => async (dispatch) => {
    const cart = await updateCartQuantity(productId, quantity);
    dispatch(setCart(cart));
};
