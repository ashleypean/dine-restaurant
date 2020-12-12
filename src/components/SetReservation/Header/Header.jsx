import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../../../images/booking/hero-bg-mobile.jpg'

const MainDiv = styled.div`
  background: center / cover no-repeat url(${BackgroundImage});
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 3rem 1rem 8rem;
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
  outline: none;
`

export default function Header() {
  return (
    <MainDiv>
      <Title>dine</Title>
      <Subtitle>Reservations</Subtitle>
      <Description>
        We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.
      </Description>
      <BookingButton>RESERVE PLACE</BookingButton>
    </MainDiv>
  )
}
