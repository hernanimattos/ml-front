import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import classes from './Navigation.module.scss';

const Navigation = () => {
  const [term, setTerm] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleTerm = e => {
    setTerm(e.target.value);
  };

  return (
    <header className={classes.Header}>
      <nav className={classes.Navigation}>
        <SearchBar submit={handleSubmit} change={handleTerm} term={term} />
      </nav>
    </header>
  );
};

export default Navigation;
