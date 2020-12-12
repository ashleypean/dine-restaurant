import React from 'react'
import styled from 'styled-components'
import GatheringMobileSmall from '../../../images/homepage/family-gathering-mobile.jpg'

const MainDiv = styled.div`
  background: white;
  padding: 2rem 1rem 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.div`
  background: center / cover no-repeat url(${GatheringMobileSmall})
  object-fit: cover;
  height: 20rem;
  width: 100%;
  margin: 1rem 0;
  display: block;
  z-index: 2;
`

const TitleOption = styled.h3`
  color: #5c6779;
  font-size: .7em;
  margin: 1.4rem 0;
  position: relative;
  font-weight: 400;

  &.active {
    color: #111111;
    font-size: .8rem;

    &::after {
      position: absolute;
      content: "";
      background: #9E7F66;
      width: 20%;
      height: .08rem;
      bottom: -.5rem;
      left: 40%;
    }
  }
`

const Title = styled.h2``

const Description = styled.p`
  font-size: .8rem;
  line-height: 1.2rem;
  font-weight: 200;
  margin: 1.2rem 0;
`

const BookButton = styled.button`
  border: none;
  background: black;
  color: white;
  font-weight: 200;
  letter-spacing: .1rem;
  padding: 1rem 2rem;
  outline: none;
`

export default function Gathering() {

  const options = [
    {'Family Gathering': 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.'}, 

    {'Special Events': 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.'}, 

    {'Social Events': 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.'}
  ]

  return (
    <MainDiv>
      <Image />
      <div>
        <TitleOption className="active">FAMILY GATHERING</TitleOption>

        <TitleOption>SPECIAL EVENTS</TitleOption>
        <TitleOption>SOCIAL EVENTS</TitleOption>

        <Title>Family Gathering</Title>
        <Description>
          We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.
        </Description>

        <BookButton>BOOK A TABLE</BookButton>
      </div>

    </MainDiv>
  )
}
