import React, { useState } from 'react';
// import Products from '../Products/Products';
import Navigation from '../../componets/Navigation/Navigation';
import { searchProduct } from '../../store/products/product.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainRouter from '../../mainRouter/index';
import Loader from '../../UI/Loader/Loader';

const Search = props => {
  console.log(props, 'sear');

  // const { }
  const [term, setTerm] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.dispatch(searchProduct(term, true));
    props.history.push('/');
  };

  const handleTerm = e => {
    setTerm(e.target.value);
  };

  return (
    <React.Fragment>
      <Navigation submit={handleSubmit} change={handleTerm} term={term} />
      <MainRouter {...props} />
      <Loader show={props.loader} />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    productsData: state.productsData,
    loader: state.loader
  };
};

export default withRouter(connect(mapStateToProps, null)(Search));
