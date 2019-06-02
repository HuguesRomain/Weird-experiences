import React, { Component } from 'react'
import styled, {ThemeProvider} from 'styled-components'; 
import CardsData from '../../../data/CardsData';
import {theme} from '../../../assets/theme';

const TodoImportantCard = ({ detailsCardsImportant }) => {
  return (
     <ThemeProvider theme={theme}>
      <CardContainerImportant>
        <TitleTodo> {detailsCardsImportant.title} </TitleTodo>
      </CardContainerImportant>
    </ThemeProvider>
  )
}

const TitleTodo = styled.p`
  color: ${props => (props.theme.textColor)};
`;

const CardContainerImportant = styled.li`
  width: 80vw;
  margin: 5%;
  border-radius: 10px;
  min-height: 20vh;
  background-color: ${props => (props.theme.orangeOpacity)};
`; 


export default TodoImportantCard