import { SEARCH_PRODUCTS } from './product.actions';

const initialState = {
  products: {}
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      return {
        ...state,
        products: action.products
      };

    default:
      return { ...state };
  }
};

export default productReducer;
