import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editAbout } from '../actions'

import Input from './Input'

const About = ({ url, text, dispatchEditAbout }) => {
  const [showInput, setShowInput] = useState(false)

  const Edit = () => {
    if (!showInput) {
      return (
        <>
          <button type="submit" onClick={() => setShowInput(true)} className="bg-yellow-400 hover:bg-yellow-500 text-black font-normal h-10 py-1 px-5 mt-2 mr-3 text-base rounded float-right">
            Edit
          </button>
          <div className="grid grid-cols-2 pt-10 pb-10">
            <img src={url} alt="portrait" />
            <div className="inline ml-10">
              {text}
            </div>
          </div>
        </>
      )
    }
    return (
      <>
        <div className="mb-7" />
        <Input aboutImage={url} aboutText={text} setVisible={setShowInput} dispatchEditAbout={dispatchEditAbout} />
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

const mapStateToProps = state => ({ url: state.about.url, text: state.about.text })

const mapDispatchToProps = dispatch => ({
  dispatchEditAbout: about => dispatch(editAbout(about)),
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
