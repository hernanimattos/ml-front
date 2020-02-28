import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { searchProductById } from '../../store/products/product.actions';
import Product from '../../componets/Product/Product';
import { useParams } from 'react-router-dom';

const ProductPage = props => {
  const { dispatch, product = {} } = props || {};
  const { item = {} } = product;
  const { price = 0 } = item;
  const newProps = { ...price, ...item };
  let { id } = useParams();

  useEffect(() => {
    dispatch(searchProductById(id, true));
  }, []);

  return <Product {...newProps} disabledLink={true} />;
};

const mapStateToProps = state => {
  return {
    product: state.product,
    loader: state.loader
  };
};

export default connect(mapStateToProps)(ProductPage);
