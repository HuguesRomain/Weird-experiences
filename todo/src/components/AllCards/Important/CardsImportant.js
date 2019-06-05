import React, { Component } from 'react'
import styled from 'styled-components'; 
import TodoImportantCard from './CardImportant'
import CardsData from '../../../data/CardsData';


class CardsImportant extends Component {
  state = {
    CardsDataState: {CardsData},
  }
  render () {
    const todoImportantCard = Object.keys(this.state.CardsDataState.CardsData.CardsImportant
    ).map(key => <TodoImportantCard key={key} detailsCardsImportant={this.state.CardsDataState.CardsData.CardsImportant[key]}></TodoImportantCard>)
    return (
      <FeedCards Nav={this.props.Nav}>
         { todoImportantCard }
      </FeedCards>
    )
  }
}

const FeedCards = styled.ul`
  display: ${props => (props.Nav === "important" ? "flex" : "none")};
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
`;

export default CardsImportant