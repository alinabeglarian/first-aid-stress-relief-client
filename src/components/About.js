import React, { Component } from 'react'
import styled from 'styled-components'

const Text = styled.div`
  color: black;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  text-align: center;
  margin: auto;
  margin-top: 100px;
  max-width: 50%;
  border-radius: 3px;
  border: 2px solid palevioletred;
  padding: 20px;
`

export default class About extends Component {
  render() {
    return (
      <Text>Are you feeling stress? Need a moment to relax?
        Then you have come to the right place!
        You can pick from four different ways to take a moment and relax. 
        <p>Go to HOME to start!</p>
      </Text>
    )
  }
}
