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

const NavigationElements = styled.div`
  display: flex; 
  justify-content: space-between;
`; 

const NavigationElement = styled.p`
  color: ${props => props.theme.textColor};
`; 

export default Navigation