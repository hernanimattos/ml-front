import React, { useState } from 'react';
import Products from '../../componets/Products/Products';
import Navigation from '../../componets/Navigation/Navigation';
import { searchProduct } from '../../store/products/product.actions';
import { connect } from 'react-redux';

const Search = props => {
  const [term, setTerm] = useState('');
  const { productsData = {} } = props || {};
  const { items = [] } = productsData;

  const handleSubmit = e => {
    e.preventDefault();
    props.dispatch(searchProduct(term));
  };

  const handleTerm = e => {
    setTerm(e.target.value);
  };

  return (
    <React.Fragment>
      <Navigation submit={handleSubmit} change={handleTerm} term={term} />
      <Products products={items.length > 0 ? items : []} />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    productsData: state.productsData
  };
};

// export default withRouter(Product);
export default connect(mapStateToProps)(Search);
