import React from 'react'
import styled, {ThemeProvider} from 'styled-components'; 
import {theme} from '../../../assets/theme';

const TodoNormalCard = ({ detailsCardsNormal }) => {
  return (
     <ThemeProvider theme={theme}>
      <CardContainerNormal>
        <TitleTodo> {detailsCardsNormal.title} </TitleTodo>
        <DescriptionTodo> {detailsCardsNormal.description} </DescriptionTodo>
      </CardContainerNormal>
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

const CardContainerNormal = styled.li`
  width: 90vw;
  margin: 5%;
  border-radius: 10px;
  min-height: 20vh;
  background-color: ${props => (props.theme.blueOpacity)};
`; 


export default TodoNormalCard