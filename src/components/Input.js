import React, { useState } from 'react'

const Input = ({
  aboutImage, aboutText, setVisible, dispatchEditAbout,
}) => {
  const [image, setImage] = useState(aboutImage)
  const [about, setAbout] = useState(aboutText)

  const submit = e => {
    e.preventDefault()
    dispatchEditAbout({ url: image, text: about })
    setVisible(false)
  }

  const cancel = e => {
    e.preventDefault()
    setVisible(false)
  }

  const SubmitButton = () => (
    <div className="flow-root">
      <button type="submit" onClick={e => submit(e)} className="bg-green-400 hover:bg-green-500 text-white font-normal h-10 py-1 px-4 text-base rounded">
        Submit
      </button>
      <button type="submit" onClick={e => cancel(e)} className="bg-blue-400 hover:bg-blue-500 text-white font-normal h-10 py-1 px-4 ml-5 text-base rounded">
        Cancel
      </button>
    </div>
  )

  return (
    <>
      <div className="mb-4">
        <label className="ml-1">Image</label>
        <input onChange={e => setImage(e.target.value)} value={image} className="shadow appearance-none border rounded w-full py-2 px-3 mt-1 text-gray-700 text-base leading-tight focus:outline-none focus:shadow-outline focus:border-orange-200" id="name" type="text" placeholder="Enter image url" />
      </div>
      <div className="mb-4">
        <label className="ml-1">Description</label>
        <input onChange={e => setAbout(e.target.value)} value={about} className="shadow appearance-none border rounded w-full py-2 px-3 mt-1 text-gray-700 text-base mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-200" id="post" type="text" placeholder="Enter description" />
      </div>
      <SubmitButton />
    </>
  )
}

export default Input
