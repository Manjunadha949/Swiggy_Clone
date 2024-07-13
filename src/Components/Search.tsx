
import React, { useState } from 'react'
import Navbar from './Navbar'
import burger from "../images/burger.jpg"
import biriyani from "../images/biriyani.jpg"
import pizza from "../images/pizza.jpg"
import chinese from "../images/chinese.png"
import shawarma from "../images/shawarma.png"
import pasta from "../images/pasta.png"
import salad from "../images/salad.png"
import cake from "../images/cake.png"
import pancake from "../images/pancake.png"
import { useLocation } from 'react-router-dom'

const Search = () => {

  const location = useLocation()

  const [searchItems,setSearchItems] = useState("")
  const [menu,setMenu] = useState("")

  console.log(location)

  return (
    <div>
      <Navbar/>
      <div className='ml-48 mt-10'>
        <input onChange={(e)=> setSearchItems(e.target.value)} placeholder='Search for restaurants' className='outline-none border border-gray-300 p-3 w-10/12 rounded-sm font-medium'/>
        {searchItems && <div className='p-3'>
        {location?.state?.data?.filter((data:any) => data.name.includes(searchItems)).map((item:any)=>{
          return <>
           <div className='flex items-center mt-6'>
            <img src={item?.photo?.images?.original?.url} className='w-16 h-16 rounded-sm'/>
            <div className='ml-3'>
              <h1>{item?.name.split(0,5)}...</h1>
              <h1>{item?.category?.name}</h1>
            </div>
           </div>
          </>
        })}
        </div>}
        
        <h1 className='font-extrabold mt-12 text-gray-700 ml-4 text-xl'>Popular Cuisines</h1>
        <div className='w-6/12 flex items-center mt-10 overflow-scroll no-swiggy-scrollbar'>
        <div className='ml-7 cursor-pointer' onClick={()=> setMenu("American")}>
        <img src={pancake} className='w-12 h-12 rounded-full'/>
      <h1 className='font-medium text-black text-xs '>American</h1>
        </div>
        <div className='ml-7 cursor-pointer' onClick={()=> setMenu("European")}>
        <img src={burger} className='w-12 h-12 rounded-full'/>
      <h1 className='font-medium text-black text-xs '>European</h1>
        </div>
        <div className='ml-7 cursor-pointer' onClick={()=> setMenu("Asian")}>
        <img src={biriyani} className='w-12 h-12 rounded-full'/>
      <h1 className='font-medium text-black text-xs '>Asian</h1>
        </div> 
        <div className='ml-7 cursor-pointer' onClick={()=> setMenu("Italian")}>
        <img src={cake} className='w-12 h-12 rounded-full'/>
      <h1 className='font-medium text-black text-xs '>Italian</h1>
        </div>
        <div className='ml-7 cursor-pointer' onClick={()=> setMenu("Vegetarian")}>
        <img src={salad} className='w-12 h-12 rounded-full'/>
      <h1 className='font-medium text-black text-xs '>Vegetarian</h1>
        </div>
        <div className='ml-7 cursor-pointer' onClick={()=> setMenu("Indonesian")}>
        <img src={pasta} className='w-12 h-12 rounded-full'/>
      <h1 className='font-medium text-black text-xs '>Indonesian</h1>
        </div>
        <div className='ml-7 cursor-pointer' onClick={()=> setMenu("International")}>
        <img src={shawarma} className='w-12 h-12 rounded-full'/>
      <h1 className='font-medium text-black text-xs '>International</h1>
        </div>
        <div className='ml-7 cursor-pointer' onClick={()=> setMenu("Pizza")}>
        <img src={pizza} className='w-12 h-12 rounded-full'/>
      <h1 className='font-medium text-black text-xs '>Pizza</h1>
        </div>
        <div className='ml-7 cursor-pointer' onClick={()=> setMenu("Chinese")}>
        <img src={chinese} className='w-12 h-12 rounded-full'/>
      <h1 className='font-medium text-black text-xs'>Chinese</h1>
        </div>
        </div>
        {menu && <div className='p-3'>
        {location?.state?.data?.filter((data:any) =>  data?.cuisine[0]?.name.includes(menu) ||  data?.cuisine[1]?.name.includes(menu) ||  data?.cuisine[2]?.name.includes(menu)).map((item:any)=>{
          return <>
           <div className='flex items-center mt-6'>
            <img src={item?.photo?.images?.original?.url} className='w-16 h-16 rounded-sm'/>
            <div className='ml-3'>
              <h1>{item?.name.split(0,5)}...</h1>
              <h1>{item?.category?.name}</h1>
            </div>
           </div>
          </>
        })}
        </div>}
      </div>
    </div>
  )
}

export default Search
