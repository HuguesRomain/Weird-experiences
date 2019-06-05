import React, { Component } from 'react'
import './assets/reset.css'
import logo from './logo.svg';
import './App.css'; 
import styled, {ThemeProvider} from 'styled-components';
import Header from './components/Header/Header';
import Navigation from './components/Header/Navigation'
import Plus from '/Users/hugues/Documents/Documents pro/Git Project/Weird-experiences/todo/src/components/AddingTodo/plus.js'


class App extends Component {
  state = {
    AddTodo: false,
  }
  handlePlus = () => {
    if(this.state.AddTodo === false){
    this.setState({AddTodo: true})
    } else {
      this.setState({AddTodo: false})
    }
  }

  render(){
    return (
      <div className="App">
      <Header></Header>
      <Navigation />
      <BlackBackground AddTodo={this.state.AddTodo}/>
      <Plus onClick={this.handlePlus}/>
      </div>
    );
  }
}


const BlackBackground = styled.div`
  display: flex;
  position: fixed;
  height: 100vh; 
  width: 100vw;
  background-color: black; 
  opacity: 0.70;
  top: 0;
`





export default App;

