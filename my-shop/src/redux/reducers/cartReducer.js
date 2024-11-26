const initialState = {
    cartItems: [], // Инициализируйте cartItems как пустой массив
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CART':
            return { ...state, cartItems: action.payload };
        case 'REMOVE_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload),
            };
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
            };
        default:
            return state;
    }
};
