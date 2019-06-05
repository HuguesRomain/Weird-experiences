import React, { Component } from 'react'
import styled from 'styled-components'; 
import TodoVeryImportantCard from './CardVeryImportant'
import CardsData from '../../../data/CardsData';


class CardsVeryImportant extends Component {
  state = {
    CardsDataState: {CardsData},
  }


  render () {
    const todoVeryImportantCard = Object.keys(this.state.CardsDataState.CardsData.CardsVeryImportant
    ).map(key => <TodoVeryImportantCard key={key} detailsCardsVeryImportant={this.state.CardsDataState.CardsData.CardsVeryImportant[key]}></TodoVeryImportantCard>)
    return (
      <FeedCards Nav={this.props.Nav}>
         { todoVeryImportantCard }
      </FeedCards>
    )
  }
}

const FeedCards = styled.ul`
  display: ${props => (props.Nav === "veryImportant" ? "flex" : "none")};
  flex-direction: column;
  justify-content: center; 
  align-items: center;  
`;

export default CardsVeryImportant