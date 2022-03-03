import { combineReducers } from 'redux'

import about from './about'
import portrait from './portrait'
import posts from './posts'

export default combineReducers({
  about,
  portrait,
  posts,
})
