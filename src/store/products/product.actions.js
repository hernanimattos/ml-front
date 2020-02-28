import {
  getProductsByTermSearch,
  getProductById
} from '../../services/product/product.service';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const SEARCH_PRODUCT_BY_ID = 'SEARCH_PRODUCT_BY_ID';

export const searchProduct = (product, loader) => {
  return dispatch => {
    dispatch({
      loader,
      type: SEARCH_PRODUCTS,
      productsData: {}
    });
    return getProductsByTermSearch(product).then(response => {
      const { data = {} } = response || {};
      const { searchProducts = {} } = data;
      dispatch({
        type: SEARCH_PRODUCTS,
        productsData: searchProducts,
        loader: false
      });
    });
  };
};

export const searchProductById = (id, loader) => {
  return dispatch => {
    dispatch({
      loader,
      type: SEARCH_PRODUCT_BY_ID,
      product: {}
    });
    return getProductById(id).then(response => {
      const { data = {} } = response || {};
      const { getProductById = {} } = data;

      dispatch({
        type: SEARCH_PRODUCT_BY_ID,
        product: getProductById,
        loader: false
      });
    });
  };
};
