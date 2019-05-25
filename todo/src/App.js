import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import Header from './components/Header/Header';
import Navigation from './components/Header/Navigation'


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Navigation />
    </div>
  );
}

export default App;
