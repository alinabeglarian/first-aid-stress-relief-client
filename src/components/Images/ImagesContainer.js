import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadImages } from '../../actions/images'
import Images from './Images'

export class ImagesContainer extends Component {
  componentDidMount() {
    this.props.loadImages()
  }

  render() {
    return (
      <div>
        <Images images={this.props.images}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  images: state.images,
})

export default connect(mapStateToProps, { loadImages })(ImagesContainer)
