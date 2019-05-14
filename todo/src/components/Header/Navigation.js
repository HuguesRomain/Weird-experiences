import React, { Component } from 'react'
import styled, {ThemeProvider} from 'styled-components'; 
import {theme} from '../../assets/theme';
import {Link} from 'react-router-dom';


class Navigation extends Component {
  state = {
    normal: false, 
    important: false, 
    veryImportant: true, 
  }

  render () {
    return (
    <ThemeProvider theme={theme}>
      <NavigationElements>
        <StyledLink>Normal</StyledLink>
        <StyledLink>Important</StyledLink>
        <StyledLink activeClassName={1}>Very important</StyledLink>
      </NavigationElements>
    </ThemeProvider>
    )
  }
}

const StyledLink = styled.Link`
  color: ${props => (props.active ? props.theme.veryImportantColor : props.theme.textColor)};
  `;

const NavigationElements = styled.div`
  display: flex;
  width: 90vw;
  justify-content: space-between;
`; 


export default Navigation