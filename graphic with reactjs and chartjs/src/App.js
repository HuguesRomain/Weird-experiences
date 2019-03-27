import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CanvasChart from './components/Chart';

class App extends Component {
  render() {
    console.log(Date())
    return (
      <div className="App">
        <CanvasChart  />
      </div>
    );
  }
}

export default App;
