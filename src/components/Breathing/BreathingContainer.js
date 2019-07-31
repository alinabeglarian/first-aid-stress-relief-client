import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

const zoomInBox = keyframes`${zoomIn}`

const zoomInText = keyframes`${zoomIn}`

const Box = styled.div`
  display: inline-block;
  background: pink;
  width: 500px;
  height: 500px;
  position: relative;
  border-radius: 50%
  margin: 100px;
  animation: ${zoomInBox} 7s infinite;
  animation-delay: 1s;
  animation-direction: alternate-reverse;
`
const Text = styled.div`
  margin-top: 50%;
  animation: ${zoomInText} 7s infinite;
  animation-direction: alternate-reverse;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
`

const textArray = ['Exhale', 'Inhale'];

export default class BreathingContainer extends Component {
  state = {
    textIdx: 0
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 7000);
  }

  componentUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    const textThatChanges = textArray[this.state.textIdx % textArray.length];
    return (
      <Box><Text>{textThatChanges}</Text></Box>
    )
  }
}
