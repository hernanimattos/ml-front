import { getProductsByTermSearch } from '../../services/product/product';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';

export const searchProduct = product => {
  return dispatch => {
    return getProductsByTermSearch(product).then(response => {
      console.log(response, 'response de busca de produtos');
      const { data = {} } = response || {};
      const { searchProducts = {} } = data;
      dispatch({
        type: SEARCH_PRODUCTS,
        products: searchProducts
      });
    });
  };
};
