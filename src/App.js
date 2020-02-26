import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { productReducer } from './store';
import React from 'react';
import Layout from './layout/Layout';
import Aux from './hoc/Aux';
import Search from './containers/Search/Search';
import {
  BrowserRouter
  // Switch,
  // Route,
  // Redirect,
  // useHistory
} from 'react-router-dom';

const store = createStore(productReducer, applyMiddleware(reduxThunk));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Search />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
