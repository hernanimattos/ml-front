import { SEARCH_PRODUCTS } from './product.actions';

const initialState = {
  productsData: {},
  searchInit: false
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      console.log(state);
      return {
        ...state,
        searchInit: action.searchInit,
        productsData: action.productsData
      };

    default:
      return { ...state };
  }
};

export default productReducer;
