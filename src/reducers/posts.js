import { ADD_POST, EDIT_POST, DELETE_POST } from '../actions'

const default_state = []

const posts = (state = default_state, action) => {
  const {
    type, title, url, descrip, id,
  } = action

  switch (type) {
    case ADD_POST:
      return [...state, {
        title, url, descrip, id,
      }]
    case EDIT_POST:
      return state.map(post => ((post.id === id) ? {
        title, url, descrip, id,
      } : post))
    case DELETE_POST:
      return state.filter(post => (post.id !== id))
    default:
      return state
  }
}

export default posts
