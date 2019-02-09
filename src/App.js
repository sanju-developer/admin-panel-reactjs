import React, { Component } from 'react';
import './App.css';
import { Routing } from './routing/routing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Routing />
        </header>
      </div>
    );
  }
}

export default App;
