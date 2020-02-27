import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { searchProductById } from '../../store/products/product.actions';
import Product from '../../componets/Product/Product';
import { useParams } from 'react-router-dom';

const ProductPage = props => {
  const { dispatch, product } = props;
  console.log(product, 'product by props', props);
  let { id } = useParams();
  useEffect(() => {
    dispatch(searchProductById(id));
  }, []);

  return <Product />;
};

const mapStateToProps = state => {
  return {
    product: state.product
  };
};

export default connect(mapStateToProps)(ProductPage);
