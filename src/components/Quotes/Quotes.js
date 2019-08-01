import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Button } from '../Buttons'
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;


const Text = styled.div`
  color: black;
  font-family: 'Raleway', sans-serif;
  font-size: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  animation: ${fadeInAnimation} 3s;
  }
`

export default function Quotes(props) {
  return (
    <Text>
      <em>"{props.quote.quoteText}"</em>
      <p>- {props.quote.quoteAuthor}</p>
      <Button onClick={props.handleClick}>Another one!</Button>
    </Text>
  )
}
