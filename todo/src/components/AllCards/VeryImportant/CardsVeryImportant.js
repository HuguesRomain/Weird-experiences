import React, { Component } from 'react'
import styled from 'styled-components'; 
import {device} from '/Users/hugues/Documents/Documents pro/Git Project/Weird-experiences/todo/src/assets/device.js'; 
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

  @media ${device.tablet}{
    display: flex;
    flex-direction: column; 
  }
`;

export default CardsVeryImportant