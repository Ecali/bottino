import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Stock from './components/stock';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Stock />
      </div>
    );
  }
}

export default App;
