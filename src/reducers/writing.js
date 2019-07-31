import { WRITING_FETCHED } from '../actions/writing'

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case WRITING_FETCHED:
    console.log(action.writing)
      return action.writing
    default:
      return state
  }
}