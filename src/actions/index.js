export const EDIT_ABOUT = 'EDIT_ABOUT'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const editAbout = ({ url, text }) => ({
  type: EDIT_ABOUT,
  url,
  text,
})

let postId = 1
export const addPost = ({ text, url, descrip }) => ({
  type: ADD_POST,
  text,
  url,
  descrip,
  id: postId++,
})

export const editPost = ({
  title, url, descrip, id,
}) => ({
  type: EDIT_POST,
  title,
  url,
  descrip,
  id,
})

export const deletePost = id => ({
  type: DELETE_POST,
  id,
})
