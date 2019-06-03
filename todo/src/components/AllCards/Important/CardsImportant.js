import React, { Component } from 'react'
import styled, {ThemeProvider} from 'styled-components'; 
import TodoImportantCard from './CardImportant'
import CardsData from '../../../data/CardsData';


class CardsImportant extends Component {
  state = {
    CardsDataState: {CardsData},
    Nav: this.props.Nav,
  }
  render () {
    const todoImportantCard = Object.keys(this.state.CardsDataState.CardsData.CardsImportant
    ).map(key => <TodoImportantCard key={key} detailsCardsImportant={this.state.CardsDataState.CardsData.CardsImportant[key]}></TodoImportantCard>)
    return (
      <FeedCards>
         { todoImportantCard }
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

export default CardsImportant