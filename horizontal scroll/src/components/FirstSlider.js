import React, { Component } from 'react'
import CityCard from '../components/CityCard'
import CityCardsData from '../data/BigCardsData'
import styled from 'styled-components'


class FirstSlider extends Component {
  state = {
    CityCards: {CityCardsData}
  }
  render () {
    const CityCards = Object.keys(this.state.CityCards.CityCardsData.CityCards).map(key => <CityCard key={key} detailsCity={this.state.CityCards.CityCardsData.CityCards[key]}></CityCard>)
    return (
      <Slider>
        { CityCards }
      </Slider>
    )
  }
}

const Slider = styled.section`
  min-width: 100%;
  min-height: 200px;
  display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar {
  display: none;
}
`;

export default FirstSlider