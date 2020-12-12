import React, { useState } from 'react'
import styled from 'styled-components'
import Plus from '../../../images/icons/icon-plus.svg'
import Minus from '../../../images/icons/icon-minus.svg'

const MainDiv = styled.div`
background: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
padding: 2rem 1rem;
`
const Reservation = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  border: 1px solid red;
  padding: 1rem .5rem;
  z-index: 2;
`
const TextInput = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  margin: .8rem 0;
`
const FormLabel = styled.label`
  text-align: left;
  color: gray;
  font-size: .6rem;
  margin: .5rem 0;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: .2rem;
  border-bottom: ${props => props.extend? '1px solid black': 'none'}
`

const DateTimeInput = styled.input`
  margin: .5rem 0;
  border: none;
  border-bottom: 1px solid black;
  background: transparent;
  width: 28%;
  text-align: center;
`

const TimeSelect = styled.select`
  border: none;
  border-bottom: 1px solid black;
  width: 28%;
  width: 28%;
  outline: none;

  &::-webkit-ms-expand {
    display: none;
    color: gold;
  }
`

const RangeContainer = styled.div`
  padding: 0 .5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: .2rem;
  border-bottom: ${props => props.extend? '1px solid black': 'none'}
`

const RangeButton = styled.div`
  border: none;
  background: center / contain no-repeat url(${props=> props.className === 'minus'? Minus:Plus});
  height: .5rem;
  width: .5rem;
  cursor: pointer;
  outline: none;
`

const NumberCount = styled.p`
  font-weight: 600;
  font-size: .8rem;
`

const Reserve = styled.button`
  color: white;
  background: black;
  border: none;
  padding: .5rem 2rem;
  font-size: .6rem;
  letter-spacing: .2rem;
  outline: none;
  margin: 1rem 0;
`

export default function Form() {
  const [personCount, setPersonCount] = useState(0)

  const handleClick=(e)=> {  
    e.preventDefault()
    const bClass = e.target.getAttribute('class')
    if(bClass.includes('minus') && personCount > 0) {  
      setPersonCount(prevCount => prevCount-=1)
    }else if(bClass.includes('plus') && personCount < 50) {
      setPersonCount(prevCount => prevCount+=1)
    }

  }
  return (
    <MainDiv>
      <Reservation>
        <TextInput placeholder='Name'/>
        <TextInput placeholder='Email'/>

        <FormLabel>Pick a date</FormLabel>
        <FormContainer>
          <DateTimeInput placeholder='MM' />
          <DateTimeInput placeholder='DD' />
          <DateTimeInput placeholder='YYYY' />
        </FormContainer>

        <FormLabel>Pick a time</FormLabel>
        <FormContainer>
          <DateTimeInput placeholder='00'/>
          <DateTimeInput placeholder='00'/>
          <TimeSelect>
            <option>AM</option>
            <option>PM</option>
          </TimeSelect>
        </FormContainer>

        <RangeContainer extend={true}>
          <RangeButton onClick={handleClick} className='minus' />
          <NumberCount>{personCount + ' people'}</NumberCount>
          <RangeButton onClick={handleClick} className='plus' />
        </RangeContainer>
        <Reserve>MAKE RESERVATION</Reserve>
      </Reservation>
    </MainDiv>
  )
}
