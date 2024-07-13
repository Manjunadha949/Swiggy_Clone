import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import star from "../images/star.png"

const Details = () => {

    const location = useLocation()

    console.log(location)
  return (
    <div>
      <Navbar/>
      <div className='ml-60 mt-8'>
        <div className='flex items-center text-gray-400 text-xs'>
            <Link to="/main"><h1>Home /</h1></Link>
            <h1>{location?.state?.data?.address_obj?.city} /</h1>
            <h1 className='text-gray-500 font-medium'>{location?.state?.data?.name}</h1>
        </div>
        <h1 className='font-bold text-xl mt-8 ml-3'>{location?.state?.data?.name}</h1>
        <div className='flex items-center'>
            <h1 className='ml-3 text-xs text-gray-500 mt-3'>{location?.state?.data?.cuisine[0]?.name},{location?.state?.data?.cuisine[0]?.name}</h1>
            <div className='ml-96 flex items-center border border-gray-300 rounded-md p-3'>
                <img src={star} className='w-5 h-5'/>
                <h1 className='text-green-700 font-bold ml-2'>{location?.state?.data?.rating}</h1>
            </div>
        </div>
        <h1 className='ml-3 text-xs text-gray-500'>{location?.state?.data?.location_string}</h1>
        <h1 className='ml-3 text-sm text-gray-500 mt-4'>Delivery fee will apply</h1>
        <hr className='mt-3'/>
      <h1 className='font-bold text-lg ml-3 mt-3'>{location?.state?.data?.price}</h1>
      <h1 className='ml-3 mt-4 text-gray-500 text-sm w-96'>{location?.state?.data?.description}</h1>
      </div>
      
    </div>
  )
}

export default Details