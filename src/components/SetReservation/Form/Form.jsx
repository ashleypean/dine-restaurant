import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import formErrorHandling from './FormHandling'
import Plus from '../../../images/icons/icon-plus.svg'
import Minus from '../../../images/icons/icon-minus.svg'

const MainDiv = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 35rem;
  margin: 0 auto 0;
  z-index: 2;
  max-width: 600px;
`
const Reservation = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 1rem 1rem;
  background: white;
  margin-top: -10rem;
  z-index: 2;
  box-shadow: 0px 1px 5px 3px rgba(50, 50, 50, 0.75);
`
const TextInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid gray;
  margin: .5rem;
  outline: none;
  padding: .8rem;
`
const FormLabel = styled.label`
  text-align: left;
  color: gray;
  font-size: .6rem;
  margin: .5rem .5rem 0;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 0 .8rem; 
  gap: .2rem;
  border-bottom: ${props => props.extend? '1px solid black': 'none'}
`

const DateTimeInput = styled.input`
  margin: .5rem 0;
  border: none;
  border-bottom: 1px solid black;
  background: transparent;
  width: 25%;
  text-align: center;
  outline: none;
  padding: .8rem 0;
`

const TimeSelect = styled.select`
  border: none;
  border-bottom: 1px solid black;
  width: 20%;
  outline: none;
  padding: .7rem 0;
  font-size: 1rem;
`

const RangeContainer = styled.div`
  padding: 0 .5rem;
  margin: .5rem .8rem;
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
  height: 3rem;
  padding: .8rem 2rem;
  font-size: .6rem;
  letter-spacing: .2rem;
  outline: none;
  margin: 1rem 0;
`

const Error = styled.p`
  color: red;
  font-size: .6rem;
  margin: 0;
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

  const handleSubmit=(e)=> {
    console.log('submit')
    e.preventDefault()
    const formData = e.target
    const entries = {
      name: formData[0].value, 
      email: formData[1].value, 
      day: Number(formData[3].value), 
      month: Number(formData[2].value), 
      year: Number(formData[4].value), 
      hour: Number(formData[5].value), 
      minute: Number(formData[6].value), 
      timeOfDay: formData[7].value, 
      partyCount: personCount
    }

    //Post form info if it passes validation, reject if not 
    if(formErrorHandling(entries) === true) {
      axios.post('/book-a-table', entries)

      console.log('verified')
    }else {console.log('not verified')}
  }

  return (
    <MainDiv>
      <Reservation onSubmit={handleSubmit}>
        <TextInput type='text' placeholder='Name' name='name'/>
        <TextInput type='email 'placeholder='Email'name='email'/>

        <FormLabel>Pick a date</FormLabel>
        <FormContainer>
          <DateTimeInput type='number' placeholder='MM' name='month'/>
          <DateTimeInput type='number' placeholder='DD' name='day'/>
          <DateTimeInput type='number' placeholder='YYYY' name='year'/>
        </FormContainer>

        <FormLabel>Pick a time</FormLabel>
        <FormContainer>
          <DateTimeInput type='number' placeholder='00' name='hour' />
          <DateTimeInput placeholder='00' name='minute' />
          <TimeSelect>
            <option name='am'>AM</option>
            <option name='pm'>PM</option>
          </TimeSelect>
        </FormContainer>

        <RangeContainer extend={true}>
          <RangeButton onClick={handleClick} className='minus' />
          <NumberCount name='people' className='partyCount'>
            {personCount === 1? personCount + ' person': personCount + ' people'} 
          </NumberCount>
          <RangeButton onClick={handleClick} className='plus' />
        </RangeContainer>
        <Reserve>MAKE RESERVATION</Reserve>
        <Error>Error goes here</Error>
      </Reservation>
    </MainDiv>
  )
}
