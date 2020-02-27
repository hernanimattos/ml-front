import { SEARCH_PRODUCTS } from './product.actions';

const initialState = {
  productsData: {}
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      console.log(state);
      return {
        ...state,
        productsData: action.productsData
      };

    default:
      return { ...state };
  }
};

export default productReducer;
