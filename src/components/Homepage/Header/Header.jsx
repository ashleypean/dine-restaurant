import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import BgImageMobile from '../../../images/homepage/hero-bg-mobile.jpg'
import BgImageMobile2x from '../../../images/homepage/hero-bg-mobile@2x.jpg'
import BgImageTablet from '../../../images/homepage/hero-bg-tablet.jpg'
import BgImageTablet2x from '../../../images/homepage/hero-bg-tablet@2x.jpg'
import BgImageDesktop from '../../../images/homepage/hero-bg-desktop.jpg'
import BgImageDesktop2x from '../../../images/homepage/hero-bg-desktop@2x.jpg'

const MainDiv = styled.div`
background: top / cover no-repeat url(${BgImageMobile});
width: 100%;
color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
position: relative;

@media screen and (min-width: 400px) {
  background: center / cover no-repeat url(${BgImageMobile2x});
}
@media screen and (min-width: 600px) {
  background: center / cover no-repeat url(${BgImageTablet});
}
@media screen and (min-width: 800px) {
  background: center / cover no-repeat url(${BgImageTablet2x});
}
@media screen and (min-width: 1000px) {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background: center / cover no-repeat url(${BgImageDesktop});
} 
@media screen and (min-width: 1200px) {
  background: center / cover no-repeat url(${BgImageDesktop2x});
}
`

const HeaderDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 15rem 1rem 8rem;
width: 50%;

@media screen and (min-width: 1000px) {
  padding: 5rem 1rem 10rem;
  width: 20%;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
`

const Title = styled.h1`
@media screen and (min-width: 1000px) {
  text-align: left;
  margin: 5rem 0 2rem 0;
}
`

const Subtitle = styled.h3`
  font-weight: 200;
  font-size: 2rem;
  margin: .5rem 0;
  @media screen and (min-width: 1000px) {
    text-align: left;
    margin: .8rem 0;
  }
`

const Description = styled.p`
  font-size: .8rem;
  line-height: 1.2rem;
  font-weight: 200;
  margin: .5rem 0;
  @media screen and (min-width: 1000px) {
    text-align: left;
    margin: .8rem 0;
    line-height: 1.8rem;
    font-size: 1.2rem;
  }
`

const BookingButton = styled.button`
  background: none;
  color: white;
  border: .5px solid white;
  width: calc(65% + 2rem);
  max-width: 250px;
  padding: 1.4rem 1rem;
  letter-spacing: .2rem;
  margin: .5rem 0;
  @media screen and (min-width: 1000px) {
    
  }
`

export default function Header() {
  const history = useHistory()

  const handleClick = (e) => {
    history.push('/book-a-table')
  }
  return (
    <MainDiv>
      <HeaderDiv className="header">
        <Title>dine</Title>
        <Subtitle>Exquisite dining since 1989</Subtitle>
        <Description> 
          Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.
        </Description>
        <BookingButton onClick={handleClick}>
          BOOK A TABLE
        </BookingButton>
      </HeaderDiv>
    </MainDiv>

  )
}
