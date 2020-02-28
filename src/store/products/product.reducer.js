import { SEARCH_PRODUCTS, SEARCH_PRODUCT_BY_ID } from './product.actions';

const initialState = {
  productsData: {},
  product: {}
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      return {
        ...state,
        productsData: action.productsData
      };
    case SEARCH_PRODUCT_BY_ID:
      return {
        ...state,
        product: action.product
      };

    default:
      return { ...state };
  }
};

export default productReducer;
