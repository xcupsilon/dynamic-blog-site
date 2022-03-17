import React, { useState } from 'react'
import PostInput from './PostInput'

const Post = ({ id, title, url, descrip, dispatchEditPost, dispatchDeletePost }) => {
  const [showInput, setShowInput] = useState(false)

  const deletePost = e => {
    e.preventDefault()
    console.log(id)
    dispatchDeletePost(id)
    setShowInput(false)
  }

  const DeleteButton = () => (
    <button type="submit" onClick={e => deletePost(e)} className="bg-red-400 hover:bg-red-500 text-black font-normal h-10 py-1 px-5 mt-2 mr-3 text-base rounded">
      Remove
    </button>
  )

  const EditPost = () => {
    if (!showInput) {
      return (
        <>
          <div className="pb-10">
            <img src={url} alt="poster" />
            <div className="ml-5 mt-5 font-semibold text-2xl">
              {`Post ${id + 1}: ${title}`}
            </div>
            <div className="ml-5 mt-5 text-lg">
              {descrip}
            </div>
          </div>
          <button type="submit" onClick={() => setShowInput(true)} className="bg-yellow-400 hover:bg-yellow-500 text-black font-normal h-10 py-1 px-5 mt-2 text-base rounded">
            Edit Post
          </button>
        </>
      )
    }
    return (
      <div className="p-7">
        <PostInput className="mt-5" id={id} text={title} image={url} description={descrip} isEdit={true} setVisible={setShowInput} dispatchEditPost={dispatchEditPost} />
        <DeleteButton />
      </div>
    )
  }

  return (
      <div className="p-0 w-1/3 border-solid border-2 border-gray-100 inline-grid">
        <EditPost />
      </div>
  )
}

export default Post
