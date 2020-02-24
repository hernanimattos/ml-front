import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
});


client
  .query({
    query: gql`
      {
        searchProducts(term: "tenis-de-mesa"){
        categories
            items{
              id
              title
              price{
                currency
                amount
                decimals
              }
              condition
              free_shipping
              picture
            
          }
        }
      }
    `
  })
  .then(result => console.log(result));


export default client;