import React, { useState, useEffect } from 'react';
import Products from '../../componets/Products/Products';
import Product from '../../componets/Products/Product/Product';
import Navigation from '../../componets/Navigation/Navigation';
import { searchProduct } from '../../store/products/product.actions';
import {
  BrowserRouter,
  Switch,
  Route,
  withRouter,
  Redirect,
  useHistory
} from 'react-router-dom';
import { connect } from 'react-redux';

const Search = props => {
  const history = useHistory();
  const [term, setTerm] = useState('');
  const [search, setSearch] = useState(false);
  const { productsData = {} } = props || {};
  const { items = [] } = productsData;

  const handleSubmit = e => {
    e.preventDefault();
    props.dispatch(searchProduct(term));
    history.push('/');
  };

  const handleTerm = e => {
    setTerm(e.target.value);
  };

  return (
    <BrowserRouter history={history}>
      <Navigation submit={handleSubmit} change={handleTerm} term={term} />
      {/* <Switch> */}
      <Route
        path="/"
        exact
        component={() => <Products products={items.length > 0 ? items : []} />}
      />
      <Route path="/produto/:id" component={() => <Product />} />
      {/* </Switch> */}
      {/* {term ? <Redirect from="/produto/:id" to="/" /> : null} */}
    </BrowserRouter>
  );
};

const mapStateToProps = state => {
  return {
    productsData: state.productsData
  };
};

// export default withRouter(Product);
export default withRouter(connect(mapStateToProps)(Search));
