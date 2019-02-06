import React, { Component } from 'react';
import './App.css';
import { AppRouting } from './routing/routing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <AppRouting />
        </header>
      </div>
    );
  }
}

export default App;
