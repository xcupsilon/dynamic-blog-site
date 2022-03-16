import { EDIT_ABOUT } from '../actions'

const default_state = { url: '', text: '' }

const about = (state = default_state, action) => {
  const { type, url, text } = action

  switch (type) {
    case EDIT_ABOUT:
      return { url, text }

    default:
      return state
  }
}

export default about
