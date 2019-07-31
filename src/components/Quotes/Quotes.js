import React from 'react'
import styled from 'styled-components'
import { Button } from '../Buttons'

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
  }
`

export default function Quotes(props) {
  return (
    <Text>
      {props.quote} <br />
      <Button onClick={props.handleClick}>Another one!</Button>
    </Text>
  )
}
