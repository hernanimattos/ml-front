import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { productReducer } from './store';
import React from 'react';
import Layout from './layout/Layout';
import Search from './containers/Search/Search';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const store = createStore(productReducer, applyMiddleware(reduxThunk));

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Router>
          <Route path="/" component={Search} />
        </Router>
        {/* <Search /> */}
      </Layout>
    </Provider>
  );
}

export default App;
