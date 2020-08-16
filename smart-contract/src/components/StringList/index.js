import React, { useEffect, useRef } from 'react'

const StringList = (props) => {
  const messagesEnd = useRef(null);
  useEffect(() => _scrollToBottom())

  const _scrollToBottom = () => {
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  } 

  return (
    <div className="w-1/2 h-64 bg-black p-2 mx-8 shadow-2xl rounded-md">
        <div className="list-container bg-white">
          <ul className="p-4 h-full rounded-lg flex flex-col">
            {props.stringList.map( (string) => (
              <li key={string.id} className="text-md w-full border-bottom border-b-2 border-gray-200">
                <span className="font-extrabold text-teal-700 text-lg">{string.name}</span>
                <span className="float-right">{string.string}</span>
              </li>
            ))}
            <div ref={messagesEnd}></div>
          </ul>
      </div>
    </div>
  )
}
export default StringList