import {combineReducers} from 'redux'
import quote from './quote'
import images from './images'
import writing from './writing'

export default combineReducers({
  quote,
  images,
  writing
})