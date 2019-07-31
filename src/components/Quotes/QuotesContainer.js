import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadQuote } from '../../actions/quote'
import Quotes from './Quotes'

export class QuotesContainer extends Component {
  componentDidMount() {
    this.props.loadQuote()
  }

  handleClick = (event) => {
    event.preventDefault()
    this.props.loadQuote()
  }

  render() {
    return (
      <div>
        <Quotes quote={this.props.quote} handleClick={this.handleClick} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  quote: state.quote,
})

export default connect(mapStateToProps, { loadQuote })(QuotesContainer)
