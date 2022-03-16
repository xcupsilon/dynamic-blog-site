import { ADD_POST, EDIT_POST, DELETE_POST } from '../actions'

const default_state = []

const posts = (state = default_state, action) => {
  const {
    type, text, url, descrip, id,
  } = action

  switch (type) {
    case ADD_POST:
      return [...state, {
        text, url, descrip, id,
      }]
    case EDIT_POST:
      state.map(post => ((post.id === id) ? {
        text, url, descrip, id,
      } : post))
      return state
    case DELETE_POST:
      state.filter(post => (post.id !== id))
      return state
    default:
      return state
  }
}

export default posts
