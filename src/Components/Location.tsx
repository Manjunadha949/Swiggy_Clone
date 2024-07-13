import React from 'react'
import { Link } from 'react-router-dom'

const Location = () => {
  return (
    <div className='bg-black h-60'>
      <h1 className='text-zinc-500 font-semibold text-sm p-6'>WE DELIVER TO</h1>
      <div className='grid grid-cols-2 text-white pl-6'>
      <Link to="/main" state={{data:"297701"}}><h1 className='cursor-pointer'>Bandung</h1></Link>
      <Link to="/main" state={{data:"297702"}}><h1 className='cursor-pointer'>Ubud</h1></Link>
      <Link to="/main" state={{data:"297703"}}><h1 className='cursor-pointer'>Jayapura</h1></Link>
      <Link to="/main" state={{data:"297704"}}><h1 className='cursor-pointer'>Timika</h1></Link>
      <Link to="/main" state={{data:"297705"}}><h1 className='cursor-pointer'>Bekasi</h1></Link>
      <Link to="/main" state={{data:"297706"}}><h1 className='cursor-pointer'>Bogor</h1></Link>
      <Link to="/main" state={{data:"297707"}}><h1 className='cursor-pointer'>Cirebon</h1></Link>
      <Link to="/main" state={{data:"297709"}}><h1 className='cursor-pointer'>Borobudur</h1></Link>
      <Link to="/main" state={{data:"297719"}}><h1 className='cursor-pointer'>Makassar</h1></Link>
      </div>
    </div>
  )
}

export default Location