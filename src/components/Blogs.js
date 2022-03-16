import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addPost, editPost, deletePost } from '../actions'
import Post from './Post'
import AddPostModal from './AddPostModal'

const Blogs = ({ dispatchAddPost }) => {
  const [posts, setPosts] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const Modal = () => {
    if (modalVisible) {
      return (<AddPostModal setModalVisible={setModalVisible} />)
    }
    return <></>
  }

  return (
    <div className="w-screen pt-10 pb-10 pl-40 pr-40">
      <h1 className="text-5xl font-bold font-sans text-red-300 inline">Blog Posts</h1>
      <button type="submit" onClick={() => setModalVisible(true)} className="bg-blue-400 hover:bg-blue-500 text-white font-normal h-10 py-1 px-5 mt-2 mr-3 text-base rounded float-right">
        Add Posts
      </button>
      {/* <Modal /> */}
      <div className="grid-cols-3 mt-6">
        {/* TODO: map posts to create post components */}
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  text: state.posts.text, url: state.posts.url, descrip: state.posts.descrip, id: state.posts.id,
})

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: ({ text, url, descrip }) => dispatch(addPost({ text, url, descrip })),
  dispatchEditPost: ({
    title, url, descrip, id,
  }) => dispatch(editPost({
    title, url, descrip, id,
  })),
  dispatchDeletePost: id => dispatch(deletePost(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Blogs)
