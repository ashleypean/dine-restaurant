import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`
  background: black;
  padding: 3rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`

const Title = styled.h1`
  margin: 0;
`

const Subtitle = styled.p`
  font-size: .8rem;
  line-height: 1.2rem;
  font-weight: 200;
  margin: 1.2rem 0 0;
  line-height: 1.6rem;
`

export default function Footer() {
  return (
    <MainDiv>
      <Title>dine</Title>
      <Subtitle>
        MARTHWAITE, SEDBERGH <br />
        CUMBRIA <br />
        +00 44 123 4567 <br />
      </Subtitle>

      <Subtitle>
        OPEN TIMES <br />
        Mon - Fri: 09:00 AM - 10:00 PM <br />
        Sat - Sun: 09:00 AM - 11:30 PM <br />
      </Subtitle>
    </MainDiv>
  )
}
