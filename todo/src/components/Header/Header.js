import React, { Component } from 'react'
import Profile from './Profile';
import Navigation from './Navigation';
import styled, {ThemeProvider} from 'styled-components'; 


class Header extends Component {
  render () {
    return (
      <HeaderElements>
        <Profile />
        <Navigation />
      </HeaderElements>
    )
  }
}

const HeaderElements = styled.header`
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center;
`;



export default Header