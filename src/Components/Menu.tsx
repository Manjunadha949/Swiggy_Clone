import React from 'react'
import burger from "../images/burger.jpg"
import biriyani from "../images/biriyani.jpg"
import pizza from "../images/pizza.jpg"
import chinese from "../images/chinese.png"
import shawarma from "../images/shawarma.png"
import pasta from "../images/pasta.png"
import salad from "../images/salad.png"
import cake from "../images/cake.png"
import pancake from "../images/pancake.png"

type menuProp = {
  setMenu:any
}

const Menu = (props:menuProp) => {
  return (
    <div className='flex items-center mt-10 overflow-scroll no-swiggy-scrollbar'>
        <div onClick={()=> props?.setMenu("American")} className='cursor-pointer'>
        <img src={burger} className='w-36 h-32 rounded-full'/>
      <h1 className='font-semibold text-gray-500 text-xl ml-6'>American</h1>
        </div>
        <div className='ml-12 cursor-pointer' onClick={()=> props?.setMenu("Asian")}>
        <img src={biriyani} className='w-36 h-32 rounded-full'/>
      <h1 className='font-semibold text-gray-500 text-xl ml-6'>Asian</h1>
        </div>
        <div className='ml-12 cursor-pointer' onClick={()=> props?.setMenu("Italian")}>
        <img src={pizza} className='w-36 h-32 rounded-full'/>
      <h1 className='font-semibold text-gray-500 text-xl ml-6'>Italian</h1>
        </div>
        <div className='ml-12 cursor-pointer' onClick={()=> props?.setMenu("Chinese")}>
        <img src={chinese} className='w-36 h-32 rounded-full'/>
      <h1 className='font-semibold text-gray-500 text-xl ml-6'>Chinese</h1>
        </div>
        <div className='ml-12 cursor-pointer' onClick={()=> props?.setMenu("Asian")}>
        <img src={shawarma} className='w-36 h-32 rounded-full'/>
      <h1 className='font-semibold text-gray-500 text-xl ml-6'>Asian</h1>
        </div>
        <div className='ml-12 cursor-pointer' onClick={()=> props?.setMenu("Indonesian")}>
        <img src={pasta} className='w-36 h-32 rounded-full'/>
      <h1 className='font-semibold text-gray-500 text-xl ml-6'>Indonesian</h1>
        </div>
        <div className='ml-12 cursor-pointer' onClick={()=> props?.setMenu("Vegetarian")}>
        <img src={salad} className='w-36 h-32 rounded-full'/>
      <h1 className='font-semibold text-gray-500 text-xl ml-6'>Vegetarian</h1>
        </div>
        <div className='ml-12 cursor-pointer' onClick={()=> props?.setMenu("European")}>
        <img src={cake} className='w-36 h-32 rounded-full'/>
      <h1 className='font-semibold text-gray-500 text-xl ml-6'>European</h1>
        </div>
        <div className='ml-12 cursor-pointer' onClick={()=> props?.setMenu("International")}>
        <img src={pancake} className='w-36 h-32 rounded-full'/>
      <h1 className='font-semibold text-gray-500 text-xl ml-6'>International</h1>
        </div>
    </div>
  )
}

export default Menu