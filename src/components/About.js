import React, { useState } from 'react'
import Input from './Input'

const About = () => {
  const [image, setImage] = useState('')
  const [about, setAbout] = useState('')
  const [showInput, setShowInput] = useState(false)

  const Edit = () => {
    if (!showInput) {
      return (
        <button type="submit" onClick={() => setShowInput(true)} className="bg-yellow-400 hover:bg-yellow-500 text-black font-normal h-10 py-1 px-5 mt-2 mr-3 text-base rounded float-right">
          Edit
        </button>
      )
    }
    return (
      <>
        <div className="mb-7" />
        <Input canceled={showInput} setVisible={setShowInput} />
      </>
    )
  }

  return (
    <>
      <div className="w-screen h-full bg-gray-50 pt-10 pb-10 pl-40 pr-40">
        <h1 className="text-5xl font-semibold font-sans inline">Heyo this me!</h1>
        <Edit />
      </div>
    </>
  )
}
export default About
