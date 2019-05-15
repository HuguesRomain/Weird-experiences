import React, { Component } from 'react'
import styled, {ThemeProvider} from 'styled-components'; 
import {theme} from '../../assets/theme';
import Card from './Card'

class Cards extends Component {
  render () {
    return (
      <FeedCards>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
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