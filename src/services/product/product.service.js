import gql from 'graphql-tag';
import client from '../../graphql/index';

export const getProductsByTermSearch = term => {
  return client.query({
    query: gql`
      query($term: String!) {
        searchProducts(term: $term) {
          categories
          items {
            id
            title
            price {
              currency
              amount
              decimals
              value
            }
            condition
            free_shipping
            picture
          }
        }
      }
    `,
    variables: { term }
  });
};
