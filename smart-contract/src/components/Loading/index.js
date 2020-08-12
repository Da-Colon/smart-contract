import React from 'react'

const Loading = () => (
  <div className="w-48 p-8 bg-white shadow-2xl rounded-lg flex flex-col items-center justify-center">
    <div className="text-xl font-bold">
      Loading...
    </div>
    <i className="fas fa-spinner fa-spin fa-3x text-blue-800 mt-8" />
  </div>
)

export default Loading