import React from 'react';
import Product from './Product/Product';

const Products = () => {
  const data = [
    {
      title: 'prod 1',
      value: '1234,00',
      description: 'produto um dalskdnalsnd'
    },
    {
      title: 'prod 1',
      value: '1234,00',
      description: 'produto um dalskdnalsnd'
    },
    {
      title: 'prod 1',
      value: '1234,00',
      description: 'produto um dalskdnalsnd'
    }
  ];

  return (
    <div>
      {data.map(() => (
        <Product />
      ))}
    </div>
  );
};

export default Products;
