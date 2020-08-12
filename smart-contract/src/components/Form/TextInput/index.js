import React from 'react'

const TextInput = (props) => (
  <div className="w-full flex items-center justify-between border-bottom border-gray-600 border-b-2 pb-4">
    <label className="text-lg" htmlFor={props.name}>{props.labelname}</label>
    <input 
      {...props}
      className="bg-gray-100 py-2 pl-4 w-1/2"
      type="text"
      autoFocus
      /> 
  </div>
)

export default TextInput