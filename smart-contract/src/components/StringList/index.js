import React, { useEffect, useRef } from 'react'

const StringList = (props) => {
  const messagesEnd = useRef(null);
  useEffect(() => _scrollToBottom())

  const _scrollToBottom = () => {
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  } 

  return (
    <div className="w-1/2 h-64 bg-black p-2 mx-8 shadow-2xl rounded-md">
        <div className="list-container">
          <ul className="p-4 bg-white rounded-lg">
            {props.stringList.map( (string, i) => (
              <li className="text-md">
                <span className="font-extrabold text-purple-500 text-lg">{string.name}</span>: {string.string}
              </li>
            ))}
          </ul>
        <div ref={messagesEnd}></div>
      </div>
    </div>
  )
}
export default StringList