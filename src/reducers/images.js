import { IMAGES_FETCHED } from '../actions/images'

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case IMAGES_FETCHED:
      return action.images
    default:
      return state
  }
}