export const EDIT_ABOUT = 'EDIT_ABOUT'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const editAbout = ({ url, text }) => ({
  type: EDIT_ABOUT,
  url,
  text,
})

let postId = 0
export const addPost = ({ title, url, descrip }) => ({
  type: ADD_POST,
  title,
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

export const deletePost = id => {
  postId--
  return ({
    type: DELETE_POST,
    id,
  })
}
