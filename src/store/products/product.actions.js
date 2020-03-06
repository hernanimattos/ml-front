import {
  getProductsByTermSearch,
  getProductById
} from '../../services/product/product.service';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const SEARCH_PRODUCT_BY_ID = 'SEARCH_PRODUCT_BY_ID';
export const SEARCH_PRODUCTS_START = 'SEARCH_PRODUCTS_START';

export const searchProduct = product => {
  return dispatch => {
    dispatch({
      type: SEARCH_PRODUCTS_START,
      loading: true
    });
    return getProductsByTermSearch(product).then(response => {
      const { data = {} } = response || {};
      const { searchProducts = {} } = data;
      dispatch({
        type: SEARCH_PRODUCTS,
        productsData: searchProducts,
        loading: false
      });
    });
  };
};

export const searchProductById = id => {
  return dispatch => {
    dispatch({
      type: SEARCH_PRODUCTS_START,
      loading: true
    });
    return getProductById(id).then(response => {
      const { data = {} } = response || {};
      const { getProductById = {} } = data;
      dispatch({
        type: SEARCH_PRODUCT_BY_ID,
        product: getProductById,
        loading: false
      });
    });
  };
};
