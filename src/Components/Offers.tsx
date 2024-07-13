import React from 'react'
import offer1 from "../images/offer1.png"
import offer2 from "../images/offer2.jpg"

const Offers = () => {
  return (
    <div className='flex items-center mt-5'>
      <img src={offer2} className='w-6/12 h-60 rounded-3xl'/>
      <img src={offer1} className='w-6/12 h-60 rounded-3xl ml-5'/>
    </div>
  )
}

export default Offers