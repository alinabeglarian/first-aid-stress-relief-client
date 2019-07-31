import React from 'react'
import { Button } from '../Buttons'
import styled from 'styled-components'

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 200px;
`

const Input = styled.input`
  color: palevioletred;
  font-family: 'Raleway', sans-serif;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 300px;
  height: 50px;
  text-alight: center;
  margin: 2em;
  padding: 1em;
`

export default function Writing(props) {
  return (
    <Form>
      <Input 
        type='text' 
        name='text' 
        placeholder='What do you feel stressed?' 
        value={props.text}
        onChange={props.onChange}/>
      <Button>Submit</Button>
    </Form>
  )
}
