import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

`

const Img = styled.img`
  max-height: 10%
  max-width: 60%
`

export default function Images(props) {
  return (
    <Container>
      <Img src={props.images} />
    </Container>
  )
}
