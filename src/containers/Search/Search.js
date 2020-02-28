import React, { useState } from 'react';
// import Products from '../Products/Products';
import Navigation from '../../componets/Navigation/Navigation';
import { searchProduct } from '../../store/products/product.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainRouter from '../MainRouter/index';
import Loader from '../../UI/Loader/Loader';

const Search = props => {
  const [term, setTerm] = useState('');
  console.log('Search ..render');

  const handleSubmit = e => {
    e.preventDefault();
    if (!term) return;
    props.history.push('/');
    props.dispatch(searchProduct(term, true));
  };

  const handleTerm = e => {
    setTerm(e.target.value);
  };

  return (
    <React.Fragment>
      <Navigation submit={handleSubmit} change={handleTerm} term={term} />
      <MainRouter {...props} />
      <Loader show={false} />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    productsData: state.productsData
  };
};

export default withRouter(connect(mapStateToProps, null)(Search));
