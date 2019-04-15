import React from 'react'
import styled from 'styled-components'

const CityCard = ({ detailsCity }) => {
  return (
    <Card imgUrl={require(`../../assets/img/${detailsCity.img}`)}>
      <Text> {detailsCity.title} </Text>
    </Card>
  )
}


const Text = styled.p`
 color: white;
 font-size: 18px;
 margin-left: 2vw;
 font-family: Avenir;
 font-weight: bolder;
`;

const Card = styled.div`
  display: flex;
  background-image: url(${(props)=>props.imgUrl}); 
  background-size: 100%;
  border-radius: 3px;
  min-width: 500px;
  min-height: 300px;
  margin: 5px;
  align-items: flex-end;
`


export default CityCard