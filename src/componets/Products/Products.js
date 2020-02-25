import React from 'react';
import Product from './Product/Product';

const Products = props => {
  return (
    <div>
      {props.products &&
        props.products.map(e => (
          <Product key={e.id} img={e.picture} title={e.title} />
        ))}
    </div>
  );
};

export default Products;
