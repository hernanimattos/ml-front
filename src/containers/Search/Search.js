import React, { useState, useEffect } from 'react';
// import Products from '../Products/Products';
import Navigation from '../../componets/Navigation/Navigation';
import {
  searchProduct,
  searchProductById
} from '../../store/products/product.actions';
import { finishLoad, startLoad } from '../../store/loader/loader.actions';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainRouter from '../MainRouter/index';
import Loader from '../../UI/Loader/Loader';

const Search = props => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');
  const { loader = {} } = props || {};

  const { location = {} } = props || {};
  const { params = {} } = location;
  const { id } = params;

  useEffect(() => {
    if (id) {
      dispatch(startLoad());
      dispatch(searchProductById(id)).then(() => {
        dispatch(finishLoad());
      });
    }
  }, [id]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!term) return;
    props.history.push('/');
    dispatch(startLoad());
    dispatch(searchProduct(term)).then(() => {
      dispatch(finishLoad());
    });
  };

  const handleTerm = e => {
    setTerm(e.target.value);
  };

  return (
    <React.Fragment>
      <Navigation submit={handleSubmit} change={handleTerm} term={term} />
      <MainRouter {...props} />
      <Loader show={loader.loader} />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    product: state.product,
    loader: state.loader
  };
};

export default withRouter(connect(mapStateToProps, null)(Search));
