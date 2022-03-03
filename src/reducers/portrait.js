import { SET_PORTRAIT } from '../actions'

const default_state = null

const portrait = (state = default_state, action) => {
  const { type, url } = action

  switch (type) {
    case SET_PORTRAIT:
      return url

    default:
      return state
  }
}

export default portrait