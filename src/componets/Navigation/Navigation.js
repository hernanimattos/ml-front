import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import classes from './Navigation.module.scss';
import { connect } from 'react-redux';

const Navigation = props => {
  return (
    <header className={classes.Header}>
      <nav className={classes.Navigation}>
        <SearchBar
          submit={props.submit}
          change={props.change}
          term={props.term}
        />
      </nav>
    </header>
  );
};

export default connect(null)(Navigation);
