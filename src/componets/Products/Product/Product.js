import React from 'react';
import classes from './Product.module.scss';

const Product = props => {
  return (
    <article className={classes.Product}>
      <div className={classes.ContainerImg}>
        <img src={props.img} />
      </div>
      <div className={classes.ContainerDetails}>
        <div className={classes.ProductInformationTop}>
          <h3 className={classes.AlignLeft}>{{props.value}}</h3>
          <p className={classes.AlignRight}>Local</p>
        </div>
        <div className={classes.Description}>
          <div> description</div>
        </div>
      </div>
    </article>
  );
};

export default Product;
