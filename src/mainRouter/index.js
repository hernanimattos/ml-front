import React from 'react';
import { connect } from 'react-redux';
import Products from '../containers/Products/Products';
import ProductPage from '../containers/ProductPage/ProductPage';
import { Route, Switch, withRouter } from 'react-router-dom';
import Loader from '../UI/Loader/Loader';

const MainNAvigation = props => {
  const { productsData = {}, product = {} } = props || {};

  return (
    <Switch>
      <Route
        exact
        path={'/'}
        component={() => <Products products={productsData} {...props} />}
      />
      <Route
        path={'/produto/:id'}
        component={() => <ProductPage product={product} {...props} />}
      />
      <Loader />
    </Switch>
  );
};

export default withRouter(connect(null, null)(MainNAvigation));
