import React from 'react';
import { connect } from 'react-redux';
import Products from '../Products/Products';
import ProductPage from '../ProductPage/ProductPage';
import { Route, Switch, withRouter } from 'react-router-dom';

const MainRouter = props => {
  const { product = {} } = props || {};
  const { productsData = {}, product: productResult = {} } = product || {};

  return (
    <Switch>
      <Route
        exact
        path={'/'}
        component={() => <Products products={productsData} {...props} />}
      />
      <Route
        path={'/produto?name:id'}
        component={() => (
          <ProductPage
            productItem={productResult}
            {...props}
            disabledLink={true}
          />
        )}
      />
    </Switch>
  );
};

export default withRouter(connect(null, null)(MainRouter));
