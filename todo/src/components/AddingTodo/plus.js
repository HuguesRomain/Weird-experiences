import React, { Component } from 'react'
import styled, {ThemeProvider} from 'styled-components';
import {theme} from '../../assets/theme';

class Plus extends Component {
  render () {
    return (
      <PlusElement>
        <PlusIcon alt='me' src={require(`../../assets/img/add.png`)} ></PlusIcon>
      </PlusElement>
    )
  }
}

const PlusElement = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center;
  position: fixed; 
  height: 50px;
  width: 50px;
  border-radius: 100px;
  background: linear-gradient(300deg, #EB6B7B, #EBA56C);
  right: 7vw;
  bottom: 4vh;
`; 

const PlusIcon = styled.img`
  height: 30px;
  width: 30px;
`

export default Plus
