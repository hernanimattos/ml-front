import React from 'react';
import classes from './Product.module.scss';
import { NavLink } from 'react-router-dom';

const Product = props => {
  return (
    <NavLink
      disabled={props.disabledLink ? true : false}
      to={{
        pathname: `/produto/${props.id}`
      }}
    >
      <article className={classes.Product}>
        <div className={classes.ContainerImg}>
          <img src={props.picture} />
        </div>
        <div className={classes.ContainerDetails}>
          <div className={classes.ProductInformationTop}>
            <div className={classes.clear}>
              <h3 className={classes.AlignLeft}>{props.value}</h3>
              <p className={classes.AlignRight}>Local</p>
            </div>
            <div>
              <h4>{props.title}</h4>
              <div> {props.description}</div>
            </div>
          </div>
        </div>
      </article>
    </NavLink>
  );
};
export default Product;
