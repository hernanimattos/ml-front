import React from 'react';
import { connect } from 'react-redux';
import Products from '../Products/Products';
import ProductPage from '../ProductPage/ProductPage';
import { Route, Switch, withRouter } from 'react-router-dom';

const MainRouter = props => {
  const { productsData = {}, product = {} } = props || {};
  console.log('Main router endee');

  return (
    <Switch>
      <Route
        exact
        path={'/'}
        component={() => <Products products={productsData} {...props} />}
      />
      <Route
        path={'/produto/:id'}
        component={() => (
          <ProductPage product={product} {...props} disabledLink={true} />
        )}
      />
    </Switch>
  );
};

export default withRouter(connect(null, null)(MainRouter));
