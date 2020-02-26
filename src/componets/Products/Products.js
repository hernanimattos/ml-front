import React from 'react';
import Product from './Product/Product';

const Products = props => {
  return (
    <div>
      {props.products &&
        props.products.map(e => (
          <Product
            key={e.id}
            id={e.id}
            img={e.picture}
            title={e.title}
            description={e.description}
            value={e.price.value}
          />
        ))}
    </div>
  );
};

export default Products;
