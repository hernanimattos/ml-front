import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Products from '../componets/Products/Products';
import Product from '../componets/Products/Product/Product';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom';

const MainNAvigation = props => {
  const { productsData = {} } = props || {};
  const { items = [] } = productsData;

  props.history.listen((location, action) => {
    // location is an object like window.location
    console.log(action, location.pathname, location.state);
  });

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

      {props.searchInit && (
        <Redirect
          from="/produto/:id"
          to={{
            pathname: '/'
          }}
        />
      )}
    </Router>
  );
};

export default withRouter(connect(null, null)(MainNAvigation));
