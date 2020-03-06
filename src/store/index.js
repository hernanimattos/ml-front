import productReducer from './products/product.reducer';
import { searchProduct, searchProductById } from './products/product.actions';

import loadReducer from './loader/loader.reducer';
import { startLoad, finishLoad } from './loader/loader.actions';

export {
  productReducer,
  searchProduct,
  searchProductById,
  loadReducer,
  startLoad,
  finishLoad
};
