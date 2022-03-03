import React from 'react'
import Input from './Input'

const AddPostModal = ({ setModalVisible }) => (
  <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/* content */}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/* header */}
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-xl font-semibold">
              New Post
            </h3>
            <button type="button" onClick={() => setModalVisible(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-300 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
          </div>
          {/* body */}
          <div className="relative p-6 flex-auto">
            <div className="mb-4">
              <label className="ml-1">Title</label>
              <input onChange={e => console.log('title added')} className="shadow appearance-none border rounded w-full py-2 px-3 mt-1 text-gray-700 text-base leading-tight focus:outline-none focus:shadow-outline focus:border-orange-200" id="name" type="text" placeholder="Enter the title" />
            </div>
            <Input setVisible={setModalVisible} />
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black" />
  </>
)

export default AddPostModal
