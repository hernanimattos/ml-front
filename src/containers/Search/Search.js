import React, { useState } from 'react';
import Products from '../../componets/Products/Products';
import Navigation from '../../componets/Navigation/Navigation';
import Aux from '../../hoc/Aux';
import { searchProduct } from '../../store/products/product.actions';

import { connect } from 'react-redux';

const Search = props => {
  const [term, setTerm] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    return props.dispatch(searchProduct(term));
  };

  const handleTerm = e => {
    setTerm(e.target.value);
  };

  return (
    <Aux>
      <Navigation submit={handleSubmit} change={handleTerm} term={term} />
      <Products prducts={props.products} />
    </Aux>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(Search);
