import React from 'react'

const Loading = () => (
  <div className="w-64 p-10 bg-white shadow-2xl rounded-lg flex flex-col items-center justify-center">
    <div className="text-3xl font-bold">
      Loading...
    </div>
    <i className="fas fa-spinner fa-spin fa-7x text-blue-800 my-8" />
  </div>
)

export default Loading