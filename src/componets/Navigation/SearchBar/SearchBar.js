import React from 'react';
import Logo from '../Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './SearchBar.module.scss';

const SearchBar = props => {
  return (
    <div className={classes.SearchBar}>
      <Logo />
      <form onSubmit={props.submit}>
        <input type="text" value={props.term} onChange={props.change} />
        <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
      </form>
    </div>
  );
};

export default SearchBar;
