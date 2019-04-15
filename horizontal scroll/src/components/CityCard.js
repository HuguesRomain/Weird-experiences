import React from 'react'
import styled from 'styled-components'

const CityCard = ({ detailsCity }) => {
  return (
    <Card imgUrl={require(`../../assets/img/${detailsCity.img}`)}>
      zdqzdqz
    </Card>
  )
}

const Card = styled.div`
  background-image: url(${(props)=>props.imgUrl}); 
  border-radius: 3px;
  min-width: 500px;
  min-height: 500px;
  margin: 5px;
`


export default CityCard