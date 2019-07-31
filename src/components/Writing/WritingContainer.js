import React, { Component } from 'react'
import Writing from './Writing'
import { writingFetched } from '../../actions/writing'
import { connect } from 'react-redux'

export class WritingContainer extends Component {
  state = {
    text: '',
  }

  onChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  onSubmit = (event) => {
    this.props.writingFetched(this.state.text)
    event.preventDefault()
    this.setState({
      text: '',
    })
  }

  render() {
    return (
        <Writing 
          text={this.state.text} 
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          message={this.props.writing}
        />
    )
  }
}

const mapStateToProps = state => ({
  writing: state.writing,
})

export default connect(mapStateToProps, { writingFetched })(WritingContainer)
