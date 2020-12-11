import React from 'react'
import styled from 'styled-components'
import Divide from '../../../images/patterns/pattern-divide.svg'
import FieldMobileSmall from '../../../images/homepage/enjoyable-place-mobile.jpg'
import FieldMobile2x from '../../../images/homepage/enjoyable-place-mobile.jpg'
import LocallyMobileSmall from '../../../images/homepage/locally-sourced-mobile.jpg'

const MainDiv = styled.div`
  background: white;
  padding: 2rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -5.5rem 0 1rem 0;
`

const Title = styled.h1`
  font-size: 1.4rem;
  color: #17192b;
  margin: 0;
`

const Subtitle = styled.p`
  font-size: .8rem;
  line-height: 1.2rem;
  font-weight: 200;
  margin: 1.2rem 0;
`

const LineBreak = styled.img`
  margin: 1rem 0 1.5rem;
`

const DisplayImage = styled.img`
  object-fit: cover;
  height: 20rem;
  width: 100%;
  margin: 1rem 0;
  display: block;
  z-index: 2;
`

export default function Enjoyable() {
  return (
    <MainDiv>

      <DisplayImage src={FieldMobileSmall}/>

      <LineBreak src={Divide}/>

      <Title>
        Enjoyable place for all the family
      </Title>
      <Subtitle>
        Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.
      </Subtitle>

      <DisplayImage src={LocallyMobileSmall}/>

      <LineBreak src={Divide}/>

      <Title>
        The most locally sourced food
      </Title>
      <Subtitle>
        All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.
      </Subtitle>

    </MainDiv>
  )
}
