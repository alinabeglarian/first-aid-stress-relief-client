import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadImages } from '../../actions/images'
import Images from './Images'

export class ImagesContainer extends Component {
  componentDidMount() {
    this.props.loadImages()
  }

  handleClick = (event) => {
    event.preventDefault()
    this.props.loadImages()
  }

  render() {
    console.log(this.props.images)
    return (
      <div>
        <Images images={this.props.images} handleClick={this.handleClick}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  images: state.images,
})

export default connect(mapStateToProps, { loadImages })(ImagesContainer)
