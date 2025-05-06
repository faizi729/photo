import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='bg-[#000] mt-5 gap-20 text-white flex flex-row opacity-85 py-20 px-10  justify-center items-center'>
        <p className='font-bold text-[25px]'>Start a new photo-project with US?
        </p>
        <button className="border cursor-pointer border-white py-5 px-10"> 
        <Link to="/contact">Contact Us</Link>
        </button>

      
    </div>
  )
}

export default Start
