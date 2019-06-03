import React, { Component } from 'react'
import styled, {ThemeProvider} from 'styled-components'; 
import CardsData from '../../../data/CardsData';
import {theme} from '../../../assets/theme';

const TodoNormalCard = ({ detailsCardsNormal }) => {
  return (
     <ThemeProvider theme={theme}>
      <CardContainerNormal>
        <TitleTodo> {detailsCardsNormal.title} </TitleTodo>
      </CardContainerNormal>
    </ThemeProvider>
  )
}

const TitleTodo = styled.p`
  color: ${props => (props.theme.textColor)};
`;

const CardContainerNormal = styled.li`
  width: 80vw;
  margin: 5%;
  border-radius: 10px;
  min-height: 20vh;
  background-color: ${props => (props.theme.blueOpacity)};
`; 


export default TodoNormalCard