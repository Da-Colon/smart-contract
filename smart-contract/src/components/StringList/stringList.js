import React, { useEffect, useRef } from 'react'
import '../../styles/index.css'

const StringList = (props) => {

const messagesEnd = useRef(null);

useEffect(() => _scrollToBottom())

const _scrollToBottom = () => {
  messagesEnd.current.scrollIntoView({ behavior: "smooth" });
}

return (
  <div className="w-1/3 max-h-72 bg-black p-6 shadow-2xl rounded-md">
      <div className="list-container">
        <ul className="p-4 bg-white rounded-lg">
          {props.stringList.map( (string, i) => (
            <li className="text-2xl">
              <span className="font-extrabold text-purple-500">{string.name}</span> : {string.string} </li>
          ))}
          </ul>
        <div ref={messagesEnd}></div>
        </div>
  </div>
  )
}
export default StringList