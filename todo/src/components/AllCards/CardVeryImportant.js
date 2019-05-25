import React, { Component } from 'react'
import styled, {ThemeProvider} from 'styled-components'; 
import CardsData from '../../data/CardsData';
import {theme} from '../../assets/theme';

class TodoVeryImportantCard extends Component {
  state = {
    TodoData: CardsData,
  }

  render () {
    return (
     <ThemeProvider theme={theme}>
      <CardContainer>
        <TitleTodo> {detailsTodoVeryImportant.title} </TitleTodo>
      </CardContainer>
    </ThemeProvider>
    )
  }
}


const TitleTodo = styled.p`
  color: ${props => (props.theme.textColor)};
`;

const CardContainer = styled.div`
  width: 80vw;
  margin: 5%;
  border-radius: 10px;
  opacity: 0.25;
  min-height: 20vh;
  background-color: ${props => (props.theme.redOpacity)};
`; 


export default TodoVeryImportantCard