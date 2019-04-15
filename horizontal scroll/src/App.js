import React, { Component } from 'react';
import FirstSlider from './components/FirstSlider'
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <Body>
        <p>Cities</p>
        <FirstSlider />
      </Body>
    );
  }
}

const Body = styled.body`
  margin: 0;
  justify-content: center;
  align-items: center;
`; 

export default App;
