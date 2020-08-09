import React from 'react'

const TextInput = (props) => (
  <div className="w-full flex items-center justify-between border-bottom border-gray-600 border-b-2 pb-4">
    <label className="" htmlFor={props.name}>{props.labelname}</label>
    <input 
      {...props}
      className="bg-gray-200 pl-4 py-1"
      type="text" 
      /> 
  </div>
)

export default TextInput