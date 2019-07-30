import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  max-width: 20%;
  display: inline-block;
  margin: 100px 15px 15px 15px;
`

export default function ExercisesList(props) {
  return (
    <div>
      <Img src='images/compose.png' />
      <Img src='images/lotus-position.png' />
      <Img src='images/landscape.png' />
      <Img src='images/smile.png' />
    </div>
  )
}
