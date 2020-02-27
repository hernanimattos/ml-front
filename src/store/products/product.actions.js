import { getProductsByTermSearch } from '../../services/product/product.service';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const SEARCH_PRODUCT_BY_ID = 'SEARCH_PRODUCT_BY_ID';

export const searchProduct = product => {
  return dispatch => {
    return getProductsByTermSearch(product).then(response => {
      const { data = {} } = response || {};
      const { searchProducts = {} } = data;
      dispatch({
        type: SEARCH_PRODUCTS,
        productsData: searchProducts
      });
    });
  };
};

export const searchProductById = id => {
  return dispatch => {
    dispatch({
      type: SEARCH_PRODUCT_BY_ID,
      product: {
        title: 'aqui esta voce safado'
      }
    });
  };
};
