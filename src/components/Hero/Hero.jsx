import React from 'react'

function Hero({name,title,blog_info}) {
  return (
<div className="flex justify-center items-center h-72 w-screen bg-gray-50 m-2">
  <div className="w-full lg:w-1/2 px-0 bg-gray-100 text-center py-1 flex flex-col justify-center items-center h-full">
    <h1 className="text-4xl font-extrabold italic mb-4 text-black">
      {title}
    </h1>
    <p className="text-lg my-3 text-black">
      {blog_info}
    </p>
    <p className="text-lg mb-0">
      <a href="#" className="text-blue-500 font-bold">...{name}</a>
    </p>
  </div>
</div>



  )
}

export default Hero