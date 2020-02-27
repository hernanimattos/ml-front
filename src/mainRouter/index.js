import React from 'react';
import { connect } from 'react-redux';
import Products from '../containers/Products/Products';
import ProductPage from '../containers/ProductPage/ProductPage';
import { Route, Switch, withRouter } from 'react-router-dom';

const MainNAvigation = props => {
  const { productsData = {} } = props || {};
  const { items = [] } = productsData;

  return (
    <Switch>
      <Route
        exact
        path={'/'}
        component={() => <Products products={items} {...props} />}
      />
      <Route
        path={'/produto/:id'}
        component={() => <ProductPage {...props} />}
      />
    </Switch>
  );
};

export default withRouter(connect(null, null)(MainNAvigation));
