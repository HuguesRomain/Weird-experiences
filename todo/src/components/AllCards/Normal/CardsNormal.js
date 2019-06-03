import React, { Component } from 'react'
import styled, {ThemeProvider} from 'styled-components'; 
import TodoNormalCard from './CardNormal'
import CardsData from '../../../data/CardsData';


class CardsNormal extends Component {
  state = {
    CardsDataState: {CardsData},
  }


  render () {
    const todoNormalCard = Object.keys(this.state.CardsDataState.CardsData.CardsNormal
    ).map(key => <TodoNormalCard key={key} detailsCardsNormal={this.state.CardsDataState.CardsData.CardsNormal[key]}></TodoNormalCard>)
    return (
      <FeedCards Nav={this.props.Nav}>
         { todoNormalCard }
      </FeedCards>
    )
  }
}

const FeedCards = styled.ul`
  display: ${props => (props.Nav === "normal" ? "flex" : "none")};
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
`;

export default CardsNormal