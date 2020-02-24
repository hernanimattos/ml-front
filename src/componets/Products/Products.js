import React from 'react';
import Product from './Product/Product'

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
      {
          data.map(()=> <Product/>)
      }
  )
};

export default Products;


