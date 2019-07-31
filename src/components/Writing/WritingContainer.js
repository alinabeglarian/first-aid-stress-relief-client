import React, { Component } from 'react'
import Writing from './Writing'

export default class WritingContainer extends Component {
  state = {
    text: ''
  }

  onChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
        <Writing 
          text={this.state.text} 
          onChange={this.onChange}
        />
    )
  }
}
