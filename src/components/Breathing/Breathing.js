import React from 'react'
import styled from 'styled-components'

const IFrame = styled.iframe`
  width: 571.188px;
  height: 571.188px;
`
export default function Breathing(props) {
  return (
    <div>
      <IFrame title='Breathing Excercise' src="http://xhalr.com" />
    </div>
  )
}
