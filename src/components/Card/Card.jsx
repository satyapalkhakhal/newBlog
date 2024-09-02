import React from 'react'

function Card({title,blog_info,name}) {
  return (
     <div className="w-80 h-80 max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-20">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{blog_info}</p>
        <p className="text-gray-600 mt-2">by {name}</p>
      </div>
    </div>
  )
}

export default Card