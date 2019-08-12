import { WRITING_FETCHED, CLEAR_WRITING } from '../actions/writing'

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case WRITING_FETCHED:
      return action.writing
    case CLEAR_WRITING:
      return action.payload
    default:
      return state
  }
}