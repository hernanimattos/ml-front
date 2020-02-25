import { getProductsByTermSearch } from '../../services/product/product.service';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';

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
