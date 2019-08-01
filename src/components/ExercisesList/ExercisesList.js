import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Img = styled.img`
  max-width: 100%;
  opacity: 1;
  &:hover {
    opacity: 0.3;
    filter: alpha(opacity=100)
  }
`
const Text = styled.div`
  color: black;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  visibility: hidden;
  &:hover ${Img} {
    opacity: 0.1
  }
`

const Container = styled.div`
  display:inline-block;
  position:relative;
  transition:.3s;
  margin: 100px 20px 0px 10px
  max-width: 20%;
  &:hover ${Text} {
    visibility: visible
  }
  &:hover ${Img} {
    opacity: 0.3
  }
`

export default function ExercisesList(props) {
  return (
    <div>
      <Container>
        <Link to={'/writing'}>
          <Img src='images/compose.png' />
          <Text>Write you're thoughts down and watch them disappear..</Text>
        </Link>
      </Container>
      <Container>
        <Link to={'/breathing'}>
          <Img src='images/lotus-position.png' />
          <Text>A deep breathing exercise that can help you calm down.</Text>
        </Link>
      </Container>
      <Container>
        <Link to={'/images'}>
          <Img src='images/landscape.png' />
          <Text>Relax while looking at images of cute animals.</Text>
        </Link>
      </Container>
      <Container>
        <Link to={'/quotes'}>
          <Img src='images/smile.png' />
          <Text>Get motivated and inspired by these positive quotes.</Text>
        </Link>
      </Container>
    </div>
  )
}
