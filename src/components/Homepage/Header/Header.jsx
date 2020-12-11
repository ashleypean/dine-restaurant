import React from 'react'
import styled from 'styled-components'
import mobileSmall from '../../../images/homepage/hero-bg-mobile.jpg'
import mobile2x from '../../../images/homepage/hero-bg-mobile@2x.jpg'
import tabletSmall from '../../../images/homepage/hero-bg-tablet.jpg'
import tablet2x from '../../../images/homepage/hero-bg-tablet@2x.jpg'
import desktopSmall from '../../../images/homepage/hero-bg-desktop.jpg'
import desktop2x from '../../../images/homepage/hero-bg-desktop@2x.jpg'


const HeaderDiv = styled.div`
  background: top / cover no-repeat url(${mobileSmall});
  width: calc(100% - 2rem);
  color: white;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 12rem 1rem 5rem;
  position: relative;
`

const Title = styled.h1``

const Subtitle = styled.h3`
  font-weight: 200;
  font-size: 2rem;
  margin: 0;
`

const Description = styled.p`
  font-size: .8rem;
  line-height: 1.2rem;
  font-weight: 200;
  margin: 1.2rem 0;
`

const BookingButton = styled.button`
  background: none;
  color: white;
  border: .5px solid white;
  width: calc(65% + 2rem);
  padding: 1.4rem 1rem;
  letter-spacing: .2rem;
`

export default function Header() {
  return (
    <HeaderDiv className="header">
      <Title>dine</Title>
      <Subtitle>Exquisite dining since 1989</Subtitle>
      <Description> 
         Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.
      </Description>
      <BookingButton>BOOK A TABLE</BookingButton>
    </HeaderDiv>
  )
}
