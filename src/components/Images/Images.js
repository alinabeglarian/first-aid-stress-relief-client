import React from 'react'
import styled from 'styled-components'
import { Button } from '../Buttons'

const Container = styled.div`
`

const Img = styled.img`
  margin: 20px;
  max-height: 500px;
  border-radius: 10%;
  border: 2px solid palevioletred;
  padding: 20px;
`

export default function Images(props) {
  return (
    <Container>
      <Img src={props.images} /> <br />
      <Button onClick={props.handleClick}>Next!</Button>
    </Container>
  )
}
