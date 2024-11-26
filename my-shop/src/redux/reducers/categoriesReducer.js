const initialState = {
    categories: [], // Пустой массив, так как мы ожидаем массив категорий
  };
  
  export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CATEGORIES':
        return { ...state, categories: action.payload };
      default:
        return state;
    }
  };
  