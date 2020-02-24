import React from 'react';
import classes from './Product.module.scss';

const Product = () => {
  return (
    <article className={classes.Product}>
      <img src="https://http2.mlstatic.com/caixa-de-som-jbl-bar-studio-20-soundbar-bluetooth-wireless-D_NQ_NP_920444-MLB31764082897_082019-F.webp" />
      <div>
        <div className={classes.ProductInformationTop}>
          <h3>valor</h3>
          <p>Local</p>
        </div>
        <div> description</div>
      </div>
    </article>
  );
};

export default Product;
