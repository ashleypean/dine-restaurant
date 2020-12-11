import React from 'react'
import styled from 'styled-components'
import Divide from '../../../images/patterns/pattern-divide.svg'
import SteakMobileSmall from '../../../images/homepage/beef-mobile.jpg'
import SalmonMobileSmall from '../../../images/homepage/salmon-mobile.jpg'
import MousseMobileSmall from '../../../images/homepage/chocolate-mobile.jpg'

const MainDiv = styled.div`
  background: black;
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Title = styled.h1`
  font-size: 1.4rem;
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

const HorizontalLine = styled.hr`
  width: 80%;
  height: .5%;
  margin: 1rem 0;
`

const FoodName = styled.h3`
  font-weight: 400;
`

const FoodDescription = styled.p`
  font-weight: 200;
  font-size: .8rem;
  line-height: 1.2rem;
`

const Salmon = styled.div`
  background: center / cover no-repeat url(${SalmonMobileSmall});
  height: 10rem;
  width: 100%;
  margin: 1rem 0;
  display: block;
  z-index: 2;
`

const Steak = styled.div`
  background: center / cover no-repeat url(${SteakMobileSmall});
  height: 10rem;
  width: 100%;
  margin: 1rem 0;
  display: block;
  z-index: 2;
`

const Mousse = styled.div`
  background: center / cover no-repeat url(${MousseMobileSmall});
  height: 10rem;
  width: 100%;
  margin: 1rem 0;
  display: block;
  z-index: 2;
`

export default function Highlights() {
  return (
    <MainDiv>
      <LineBreak src={Divide}/>

      <Title>
        A few highlights from our menu
      </Title>
      <Subtitle>
        We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.
      </Subtitle>


      <Salmon />
      <FoodName>
        Seared Salmon Filet
      </FoodName>
      <FoodDescription>
        Our locally sourced salmon served with a refreshing buckwheat summer salad.
      </FoodDescription>
      <HorizontalLine/>

      <Steak />
      <FoodName>
        Rosemary Filet Mignon 
      </FoodName>
      <FoodDescription>
        Our prime beef served to your taste with a delicious choice of seasonal sides.
      </FoodDescription>
      <HorizontalLine/>

      <Mousse />
      <FoodName>
        Summer Fruit Chocolate Mousse
      </FoodName>
      <FoodDescription>
       Creamy mousse combined with summer fruits and dark chocolate shavings.
      </FoodDescription>
    </MainDiv>
  )
}
