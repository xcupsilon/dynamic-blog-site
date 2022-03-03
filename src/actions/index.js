export const SET_PORTRAIT = 'SET_PORTRAIT'
export const SET_ABOUT = 'SET_ABOUT'
export const ADD_POST = 'ADD_POST'
export const SET_POST_TITLE = 'SET_POST_TITLE'
export const SET_POST_IMG = 'SET_POST_IMG'
export const SET_POST_DESCRIP = 'SET_POST_DESCRIP'

export const setPortrait = url => ({
  type: SET_PORTRAIT,
  url,
})

export const setAbout = text => ({
  type: SET_ABOUT,
  text,
})

export const addPost = ({ text, url, descrip }) => ({
  type: ADD_POST,
  text,
  url,
  descrip,
})

export const setPostTitle = text => ({
  type: SET_POST_TITLE,
  text,
})

export const setPostImg = url => ({
  type: SET_POST_IMG,
  url,
})

export const setPostDescrip = text => ({
  type: SET_POST_DESCRIP,
  text,
})
