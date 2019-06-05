import React, { Component } from 'react'
import styled, {ThemeProvider} from 'styled-components'; 
import CardsData from '../../../data/CardsData';
import {theme} from '../../../assets/theme';

const TodoVeryImportantCard = ({ detailsCardsVeryImportant }) => {
  return (
     <ThemeProvider theme={theme}>
      <CardContainerVeryImportant>
        <TitleTodo> {detailsCardsVeryImportant.title} </TitleTodo>
        <DescriptionTodo> {detailsCardsVeryImportant.description} </DescriptionTodo>
      </CardContainerVeryImportant>
    </ThemeProvider>
  )
}

const TitleTodo = styled.p`
  color: ${props => (props.theme.textColor)};
  margin: 5%;
`;

const DescriptionTodo = styled.p`
  color: ${props => (props.theme.textColor)};
  margin: 7%;
`;

const CardContainerVeryImportant = styled.li`
  width: 80vw;
  margin: 5%;
  border-radius: 10px;
  min-height: 20vh;
  background-color: ${props => (props.theme.redOpacity)};
`; 


export default TodoVeryImportantCard