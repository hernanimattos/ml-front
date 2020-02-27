import React from 'react';
import classes from './Loader.module.scss';
import loader from '../../assets/img/loader.gif';

const Loader = props => {
  {
    return props.show ? (
      <div className={classes.Loader} onClick={props.cliked}>
        <img src={loader} className={classes.LoaderImg} />
      </div>
    ) : null;
    // );
  }
};

export default Loader;
