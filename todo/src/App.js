import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import Header from './components/Header/Header';
import Cards from './components/AllCards/Cards';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Cards></Cards>
    </div>
  );
}

export default App;
