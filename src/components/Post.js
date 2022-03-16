import React, { useState } from 'react'
import PostInput from './PostInput'

const Post = () => {
  const [showInput, setShowInput] = useState(false)

  const DeleteButton = () => (
    <button type="submit" onClick={() => setShowInput(false)} className="bg-red-400 hover:bg-red-500 text-black font-normal h-10 py-1 px-5 mt-2 mr-3 text-base rounded">
      Remove
    </button>
  )

  const EditPost = () => {
    if (!showInput) {
      return (
        <button type="submit" onClick={() => setShowInput(true)} className="bg-yellow-400 hover:bg-yellow-500 text-black font-normal h-10 py-1 px-5 mt-2 mr-3 text-base rounded">
          Edit Post
        </button>
      )
    }
    return (
      <div className="px-2">
        <div className="mb-4">
          <label className="ml-1">Title</label>
          <input onChange={e => console.log('title added')} className="shadow appearance-none border rounded w-full py-1.5 px-3 mt-1 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline focus:border-orange-200" id="name" type="text" placeholder="Enter the title" />
        </div>
        <PostInput className="mt-5" canceled={showInput} setVisible={setShowInput} />
        <DeleteButton />
      </div>
    )
  }

  return (
    <div className="p-5 w-1/3 border-solid border-2 border-gray-100 inline-grid">
      <EditPost />
    </div>
  )
}

export default Post
