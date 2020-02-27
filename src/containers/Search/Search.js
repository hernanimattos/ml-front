import React, { useState } from 'react';
// import Products from '../Products/Products';
import Navigation from '../../componets/Navigation/Navigation';
import { searchProduct } from '../../store/products/product.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainRouter from '../../mainRouter/index';

const Search = props => {
  const [term, setTerm] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.dispatch(searchProduct(term));
    props.history.push('/');
  };

  const handleTerm = e => {
    setTerm(e.target.value);
  };

  return (
    <React.Fragment>
      <Navigation submit={handleSubmit} change={handleTerm} term={term} />
      <MainRouter {...props} />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    productsData: state.productsData
  };
};

export default withRouter(connect(mapStateToProps, null)(Search));
