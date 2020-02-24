import React from 'react';
import Layout from './layout/Layout';
import Aux from './hoc/Aux';
import SearchResult from './Containers/SearchResult/SearchResult';

function App() {
  return (
    <Aux>
      <Layout>
        <SearchResult />
      </Layout>
    </Aux>
  );
}

export default App;
