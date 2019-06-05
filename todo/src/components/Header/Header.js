import React, { Component } from 'react'
import Profile from './Profile';
import styled from 'styled-components'; 


class Header extends Component {
  render () {
    return (
      <HeaderElements>
        <Profile />
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