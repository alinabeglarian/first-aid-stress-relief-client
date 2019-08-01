import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadImages } from '../../actions/images'
import Images from './Images'
import Sound from 'react-sound'

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
        <Sound
          url="https://actions.google.com/sounds/v1/ambiences/spring_day_forest.ogg"
          playStatus={Sound.status.PLAYING}
          playFromPosition={300 /* in milliseconds */}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
      />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  images: state.images,
})

export default connect(mapStateToProps, { loadImages })(ImagesContainer)
