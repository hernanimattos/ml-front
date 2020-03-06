import React from 'react';
import Product from '../../componets/Product/Product';

const ProductPage = props => {
  const { productItem = {} } = props || {};
  const { item = {} } = productItem;
  const { price = 0 } = item;
  const newProps = { ...price, ...item };

  return <Product {...newProps} disabledLink />;
};

export default ProductPage;
