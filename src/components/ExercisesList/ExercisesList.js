import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Img = styled.img`
  max-width: 20%;
  display: inline-block;
  margin: 100px 15px 15px 15px;
  opacity: 1;
  &:hover {
    opacity: 0.3;
    filter: alpha(opacity=100)
  }
`
const Text = styled.p`
  position:relative;
  bottom:30px;
  left:0px;
  visibility:hidden;
  &:hover {
    visibility:visible;
  }
`


//   <div id="wrapper">
//     <img src="http://placehold.it/300x200" class="hover" />
//     <p class="text">text</p>
// </div>​

export default function ExercisesList(props) {
  return (
    <div>
      <Img src='images/compose.png' />
      <Link to={'/breathing'}>
        <Img src='images/lotus-position.png' />
      </Link>
      <Img src='images/landscape.png' />
      <Img src='images/smile.png' />
    </div>
  )
}
