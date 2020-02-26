import React from 'react';
import classes from './Product.module.scss';
import { Link } from 'react-router-dom';
const Product = props => {
  return (
    <Link
      to={{
        pathname: 'produto/123'
      }}
    >
      <article className={classes.Product} id={props.id}>
        <div className={classes.ContainerImg}>
          <img src={props.img} />
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
    </Link>
  );
};
export default Product;
