import React from 'react';
import Aux from '../hoc/Aux';
import Navigation from '../componets/Navigation/Navigation';

const Layout = props => (
  <Aux>
    <Navigation />
    <main>{props.children}</main>
  </Aux>
);

export default Layout;
