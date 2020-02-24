import React from 'react';
import Logo from '../Logo/Logo';
import classes from './SearchBar.module.scss';

const SearchBar = props => {
  return (
    <nav className={classes.SearchBar}>
      <Logo />
      <form onSubmit={props.submit}>
        <input type="text" value={props.term} onChange={props.change} />
        <button type="submit">buscar</button>
      </form>
    </nav>
  );
};

export default SearchBar;
