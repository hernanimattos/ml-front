import React from 'react';
import Product from '../../componets/Product/Product';

const Products = props => {
  const { products = {} } = props || {};
  const { items = [] } = products;
  return (
    <div>
      {items &&
        items.map(e => (
          <Product
            key={e.id}
            id={e.id}
            picture={e.picture}
            title={e.title}
            description={e.description}
            value={e.price.value}
          />
        ))}
    </div>
  );
};

export default Products;
