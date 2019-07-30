import React, { Component } from 'react'
import Routes from './components/Routes'
import NavBar from './components/NavBar'
import styled from 'styled-components'

const Header = styled.header`
  text-align: center;
`

const Title = styled.h1`
  font-family: 'Indie Flower', cursive;
  font-size: 80px;
  display: inline-block;
  margin: 0
`

const Img = styled.img`
  max-width: 4%;
  display: inline-block;
  margin-right: 15px;
`

class App extends Component {
  render() {
    return (
      <Header>
          <Img src='/images/hospital.png'/>
          <Title>First Aid Stress Relief Kit</Title>
          <NavBar />
          <Routes />
      </Header>
    )
  }
}

export default App;