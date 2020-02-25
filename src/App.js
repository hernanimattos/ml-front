import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { productReducer } from './store';
import React from 'react';
import Layout from './layout/Layout';
import Aux from './hoc/Aux';
import Search from './containers/Search/Search';

const store = createStore(productReducer, applyMiddleware(reduxThunk));

function App() {
  return (
    <Provider store={store}>
      <Aux>
        <Layout>
          <Search />
        </Layout>
      </Aux>
    </Provider>
  );
}

export default App;
