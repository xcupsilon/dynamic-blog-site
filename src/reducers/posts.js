import { ADD_POST } from '../actions'

const default_state = []

const posts = (state = default_state, action) => {
  const {
    type, text, url, descrip,
  } = action

  switch (type) {
    case ADD_POST:
      return [...state, { text, url, descrip }]
    default:
      return state
  }
}

export default posts
