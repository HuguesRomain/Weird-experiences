import React, { Component } from 'react'
import styled, {ThemeProvider} from 'styled-components'; 
import CardsData from '../../data/CardsData';
import {theme} from '../../assets/theme';

const TodoVeryImportantCard = ({ detailsCardsVeryImportant }) => {
  return (
     <ThemeProvider theme={theme}>
      <CardContainer>
        <TitleTodo> {detailsCardsVeryImportant.title} </TitleTodo>
      </CardContainer>
    </ThemeProvider>
  )
}

const TitleTodo = styled.p`
  color: ${props => (props.theme.textColor)};
`;

const CardContainer = styled.li`
  width: 80vw;
  margin: 5%;
  border-radius: 10px;
  min-height: 20vh;
  background-color: ${props => (props.theme.redOpacity)};
`; 


export default TodoVeryImportantCard