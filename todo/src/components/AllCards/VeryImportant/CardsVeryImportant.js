import React, { Component } from 'react'
import styled, {ThemeProvider} from 'styled-components'; 
import TodoVeryImportantCard from './CardVeryImportant'
import CardsData from '../../../data/CardsData';


class CardsVeryImportant extends Component {
  state = {
    CardsDataState: {CardsData},
    Nav: this.props.Nav,
  }
  render () {
    const todoVeryImportantCard = Object.keys(this.state.CardsDataState.CardsData.CardsVeryImportant
    ).map(key => <TodoVeryImportantCard key={key} detailsCardsVeryImportant={this.state.CardsDataState.CardsData.CardsVeryImportant[key]}></TodoVeryImportantCard>)
    return (
      <FeedCards>
         { todoVeryImportantCard }
      </FeedCards>
    )
  }
}

const FeedCards = styled.ul`
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
`;

export default CardsVeryImportant