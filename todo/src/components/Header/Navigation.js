import React, { Component } from 'react'
import styled, {ThemeProvider} from 'styled-components'; 
import {theme} from '../../assets/theme';


class Navigation extends Component {
  state = {
    Nav: "veryImportant", 
  }

  activeImportant = () => {
    this.setState({ Nav: "important"})
  }
  activeVeryImportant = () => {
    this.setState({ Nav: "veryImportant"})
  }
  activeNormal = () => {
    this.setState({ Nav: "normal"})
  }

  render () {
    return (
    <ThemeProvider theme={theme}>
      <NavigationElements>
        <TextNav>
        <NavigationElement 
        onClick={this.activeNormal}
        activeNormal={"normal" === this.state.Nav}>Normal</NavigationElement>
        <NavigationElement 
        onClick={this.activeImportant}
        activeImportant={"important" === this.state.Nav}>Important</NavigationElement>
        <NavigationElement 
        onClick={this.activeVeryImportant}
        activeVeryImportant={"veryImportant" === this.state.Nav}>Very important</NavigationElement>
        </TextNav>
        <UiMarker active={this.state.Nav}></UiMarker>
      </NavigationElements>
    </ThemeProvider>
    )
  }
}

const UiMarker = styled.div`
  height: 1vh; 
  width: 12.1vw;
  margin-top: 0.5vh;
  transition: 1s;
  background-color: ${props =>(props.active === "veryImportant" ? props.theme.veryImportantColor : props.active === "important" ? props.theme.importantColor : props.active === "normal" ? props.theme.normalColor : props.theme.textColor)};
  border-radius: 50px;
  transform: translateX(66vw);
`;

const NavigationElement = styled.p`
  color: ${props => (props.activeVeryImportant ? props.theme.veryImportantColor : props.activeImportant ? props.theme.importantColor : props.activeNormal ? props.theme.normalColor : props.theme.textColor)};
  margin: 0%;
  `;

const TextNav = styled.div`
  display: flex;
  width: 90vw;
  margin-top: 2vh;
  justify-content: space-between;
`;

const NavigationElements = styled.div`
  display: flex;
  flex-direction: column;
`; 


export default Navigation