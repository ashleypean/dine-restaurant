import React from 'react'
import styled from 'styled-components'
import ReservationMobileSmall from '../../../images/homepage/ready-bg-mobile.jpg'

const MainDiv = styled.div`
  background: center / cover no-repeat url(${ReservationMobileSmall});
  padding: 4rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`

const Title = styled.h1`
  font-size: 1.4rem;
  margin: 0; 
`

const BookButton = styled.button`
  border: 1px solid white;
  background: none;
  color: white;
  font-weight: 200;
  letter-spacing: .1rem;
  padding: 1rem 2rem;
  margin: 2rem 0;
  outline: none;
`

export default function Reservation() {
  return (
    <MainDiv>
      <Title>Ready to make a reservation?</Title>
      <BookButton>BOOK A TABLE</BookButton>
    </MainDiv>
  )
}
