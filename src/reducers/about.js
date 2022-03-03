import { SET_ABOUT } from '../actions'

const default_state = null

const about = (state = default_state, action) => {
  const { type, text } = action

  switch (type) {
    case SET_ABOUT:
      return text

    default:
      return state
  }
}

export default about
