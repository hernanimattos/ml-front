import {
  SEARCH_PRODUCTS,
  SEARCH_PRODUCT_BY_ID,
  SEARCH_PRODUCTS_START
} from './product.actions';

const initialState = {
  productsData: {},
  product: {},
  loading: false
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS_START:
      return {
        ...state,
        productsData: action.productsData,
        loading: action.loading
      };

    case SEARCH_PRODUCTS:
      return {
        ...state,
        productsData: action.productsData,
        loading: action.loading
      };
    case SEARCH_PRODUCT_BY_ID:
      return {
        ...state,
        product: action.product,
        loading: action.loading
      };

    default:
      return { ...state };
  }
};

export default productReducer;
