import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addPost, editPost, deletePost } from '../actions'
import Post from './Post'
import AddPostModal from './AddPostModal'

const Blogs = ({
  posts, dispatchAddPost, dispatchEditPost, dispatchDeletePost,
}) => {
  const [modalVisible, setModalVisible] = useState(false)

  const appendPost = (post, index) => {
    const { title, url, descrip } = post
    return <Post id={index} title={title} url={url} descrip={descrip} dispatchEditPost={dispatchEditPost} dispatchDeletePost={dispatchDeletePost} key={index} />
  }

  const Modal = () => {
    if (modalVisible) {
      return (<AddPostModal setModalVisible={setModalVisible} dispatchAddPost={dispatchAddPost} />)
    }
    return <></>
  }

  return (
    <div className="w-screen pt-10 pb-10 pl-40 pr-40">
      <h1 className="text-5xl font-bold font-sans text-red-300 inline">Blog Posts</h1>
      <button type="submit" onClick={() => setModalVisible(true)} className="bg-blue-400 hover:bg-blue-500 text-white font-normal h-10 py-1 px-5 mt-2 mr-3 text-base rounded float-right">
        Add Posts
      </button>
      <Modal />
      <div className="grid-cols-3 mt-6">
        {/* TODO: map posts to create post components */}
        {posts.map((post, index) => appendPost(post, index))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ posts: state.posts })

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: ({ title, url, descrip }) => dispatch(addPost({ title, url, descrip })),
  dispatchEditPost: ({
    title, url, descrip, id,
  }) => dispatch(editPost({
    title, url, descrip, id,
  })),
  dispatchDeletePost: id => dispatch(deletePost(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Blogs)
