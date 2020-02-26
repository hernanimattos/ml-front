import React from 'react';
import { connect } from 'react-redux';
import Products from '../componets/Products/Products';
import Product from '../componets/Products/Product/Product';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

const MainNAvigation = props => {
  const { productsData = {} } = props || {};
  const { items = [] } = productsData;

  return (
    <Router>
      <Switch>
        <Route
          exact
          path={'/'}
          component={() => <Products products={items} />}
        />
        <Route exact path={'/produto/:id'} component={() => <Product />} />
      </Switch>

      {items && (
        <Redirect
          to={{
            pathname: '/'
          }}
        />
      )}
    </Router>
  );
};

export default connect(null, null)(MainNAvigation);
