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
  max-width: 5%;
  display: inline-block;
  margin: 20px 30px 0px 0px;
`

const Footer = styled.footer`
  position: fixed;  
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  height: 40px;
  padding-top: 20px;
  background: hsla(14, 100%, 53%, 0.6);
  font-family: 'Raleway', sans-serif;
`

class App extends Component {
  render() {
    return (
      <div>
      <Header>
          <Img src='/images/hospital.png'/>
          <Title>First Aid Stress Relief</Title>
          <NavBar />
          <Routes />
      </Header>
      <Footer> Made with ♡ by Alina Beglarian </Footer>
      </div>
    )
  }
}

export default App;