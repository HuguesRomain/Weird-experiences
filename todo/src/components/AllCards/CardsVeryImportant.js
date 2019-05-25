import React, { Component } from 'react'
import styled, {ThemeProvider} from 'styled-components'; 
import {theme} from '../../assets/theme';
import TodoVeryImportantCard from './CardVeryImportant'
import CardsData from '../../data/CardsData';


class CardsVery extends Component {
  state = {
    CardsDataState: {CardsData},
  }
  render () {
    const TodoVeryImportantCard = Object.keys(this.state.CardsDataState.CardsVeryImportant).map(key => <TodoVeryImportantCard key={key} detailsTodoVeryImportant={this.state.CardsDataState.CardsVeryImportant[key]}> </TodoVeryImportantCard>)
    return (
      <FeedCards>
         {{ TodoVeryImportantCard }}
      </FeedCards>
    )
  }
}

const FeedCards = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
`;

export default Cards