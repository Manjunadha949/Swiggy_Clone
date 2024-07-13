
import React, { useEffect, useState } from 'react'
import food from "../images/food.jpg"
import swiggy from "../images/swiggy.png"
import Login from './Login'
import Signup from './Signup'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/setup'
import Location from './Location'

const Welcome = () => {

  const [loginModal,setLoginModal] = useState(false)
  const [signupModal,setSignupModal] = useState(false)
  const [location,setLocation] = useState("")


  console.log(location)


  return (
    <>
    <div className='flex'>
      <div className='h-screen w-9/12 p-10'>
        <div className='flex items-center'>
        {auth?.currentUser?.phoneNumber ? <Link to="/main"><img src={swiggy} className='w-48 h-14'/></Link>
        : <img src={swiggy} className='w-48 h-14'/>}
        <h1 className='font-semibold ml-60 cursor-pointer' onClick={()=> setLoginModal(true)}>Login</h1>
        <button onClick={()=> setSignupModal(true)} className='w-28 bg-black text-white font-bold p-3 ml-7'>Sign up</button>
        </div>
        <h1 className='font-bold text-4xl text-gray-800 mt-20'>Cooking gone wrong?</h1>
        <h1 className='mt-3 text-zinc-600 text-2xl'>Order food from favourite restaurants near you.</h1>
        {/* <input className='border border-black p-4 mt-12 w-8/12' placeholder='Enter your delivery location'/> */}
        <select onChange={(e)=> setLocation(e.target.value)} className='border border-black p-4 mt-12 w-8/12'>
        <option disabled>Select a location</option>
          <option value="297701">Bandung</option>
          <option value="297702">Ubud</option>
          <option value="297703">Jayapura</option>
          <option value="297704">Timika</option>
          <option value="297705">Bekasi</option>
          <option value="297706">Bogor</option>
          <option value="297707">Cirebon</option>
          <option value="297709">Borobudur</option>
          <option value="297719">Makassar</option>
        </select>
        <Link to="/main" state={{data:location}}><button className='bg-orange-500 text-white font-bold p-4 w-36'>FIND FOOD</button></Link>
        <h1 className='text-zinc-400 text-sm mt-8'>POPULAR CITIES IN INDIA</h1>
        <h1 className='font-bold text-zinc-700 mt-4'>Ahmedabad  Bangalore  Chennai  Delhi  Gurgaon  Hyderabad  Kolkata  Mumbai  Pune & more.</h1>
      </div>
      <img src={food} className='h-screen w-5/12'/>
      {loginModal && <Login setLoginModal={setLoginModal}/>}
      {signupModal && <Signup setSignupModal={setSignupModal}/>}
    </div>
    <Location/>
    </>
  )
}

export default Welcome
