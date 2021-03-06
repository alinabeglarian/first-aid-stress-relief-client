import React from 'react'
import { Button } from '../Buttons'
import styled, { keyframes } from 'styled-components';
import { zoomOut, zoomIn } from 'react-animations';

const zoomOutAnimation = keyframes`${zoomOut}`;

const ZoomOutDiv = styled.div`
  animation: 100s ${zoomOutAnimation};
`

const zoomInAnimation = keyframes`${zoomIn}`;

const ZoomInDiv = styled.div`
  animation: 100s ${zoomInAnimation};
`

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-bottom: 100px
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
  ::placeholder,
  ::-webkit-input-placeholder {
    text-align: center;
  }
`

const P = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 3em;
  width: 500px;
`

export default function Writing(props) {
  return (

    <Form onSubmit={props.onSubmit}>
    <ZoomInDiv><P>{props.niceMessage}</P></ZoomInDiv>
    <ZoomOutDiv><P>{props.message}</P></ZoomOutDiv>
      <Input 
        type='text' 
        name='text' 
        placeholder='What made you stressed today?' 
        value={props.text}
        onChange={props.onChange}
      />
      <Button>Let it go</Button>
    </Form>
  )
}
