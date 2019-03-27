import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CanvasChart from './components/Chart';

class App extends Component {
  render() {
    console.log(Date())
    return (
      <div className="App">
        <div className="App-header" style={{height: 2}}>
          <img src={logo} className='App-logo' alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <CanvasChart legendPosition='bottom' />
      </div>
    );
  }
}

export default App;
