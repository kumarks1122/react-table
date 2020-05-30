import React from 'react';
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import store from './store'
import FileReader from './components/FileReader';

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <FileReader/>
      </div>
    </Provider>
  );
}

export default App;
