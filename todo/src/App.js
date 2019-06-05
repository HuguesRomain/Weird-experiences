import React, { Component } from 'react'
import './assets/reset.css'
import logo from './logo.svg';
import './App.css'; 
import Header from './components/Header/Header';
import Navigation from './components/Header/Navigation'
import Plus from '/Users/hugues/Documents/Documents pro/Git Project/Weird-experiences/todo/src/components/AddingTodo/plus.js'


class App extends Component {
  state = {
    AddTodo: false,
  }
  render(){
    return (
      <div className="App">
      <Header></Header>
      <Navigation />
      <Plus />
      </div>
    );
  }
}
export default App;

