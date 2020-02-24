import React from 'react';
import Aux from '../hoc/Aux';
import Navigation from '../componets/Navigation/Navigation';
import classes from './Layout.module.scss';
console.log(classes);

const Layout = props => (
  <Aux>
    <Navigation />
    <main className={classes.Container}>
      <section className={classes.Row}>{props.children}</section>
    </main>
  </Aux>
);

export default Layout;
