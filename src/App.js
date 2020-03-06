import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import { productReducer, loadReducer } from './store';
import React from 'react';
import Layout from './layout/Layout';
import Search from './containers/Search/Search';
import { BrowserRouter } from 'react-router-dom';

const reducer = combineReducers({
  product: productReducer,
  loader: loadReducer
});
const store = createStore(reducer, applyMiddleware(reduxThunk));

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
