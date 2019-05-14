import React, { Component } from 'react'
import styled, {ThemeProvider} from 'styled-components'; 
import {theme} from '../../assets/theme';

class Navigation extends Component {
  render () {
    return (
    <ThemeProvider theme={theme}>
      <NavigationElements>
        <NavigationElement>Normal</NavigationElement>
        <NavigationElement>Important</NavigationElement>
        <NavigationElement>Very important</NavigationElement>
      </NavigationElements>
    </ThemeProvider>
    )
  }
}

const NavigationElement = styled.p`
  color: ${props => props.theme.textColor};
  `;

const NavigationElements = styled.div`
  display: flex;
  width: 90vw;
  justify-content: space-between;
`; 


export default Navigation