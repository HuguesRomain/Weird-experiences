import React, { Component } from 'react'
import './assets/reset.css'
import './App.css'; 
import styled from 'styled-components';
import Header from './components/Header/Header';
import Navigation from './components/Header/Navigation'
import Plus from './components/AddingTodo/plus'


class App extends Component {
  state = {
    AddTodo: false,
  };

  handlePlus = () => {
    console.log('test')
    if(!this.state.AddTodo){
    this.setState({ AddTodo: true })
    } else {
      this.setState({ AddTodo: false }); 
    }
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Navigation />
        <BlackBackground AddTodo={this.state.AddTodo}/>
        <Plus onClick={this.handlePlus} />
      </div>
    );
  }
}


const BlackBackground = styled.div`
  display: ${props => (props.AddTodo ? "flex" : "none")}; 
  position: fixed;
  height: 100vh; 
  width: 100vw;
  background-color: black; 
  opacity: 0.70;
  top: 0;
`


export default App;

