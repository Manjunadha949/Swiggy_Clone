import React from 'react'
import food from "../images/food.jpg"
import rating from "../images/rating.png"

type restaurantProp = {
    restaurantsList: any
}

const TopRated = (props:restaurantProp) => {
  return (
    <>
    <div className='flex overflow-scroll no-swiggy-scrollbar'>
        {props?.restaurantsList?.filter((data:any)=> data.ranking_position < 6).map((data:any)=>{
            return <>
              <div className="w-72 rounded mt-6 ml-8">
  <img className="w-72 h-44 rounded-2xl" src={data?.photo?.images?.original?.url} alt="Sunset in the mountains"/>
  <div className="px-4 py-2">
                                <div className="font-semibold text-xl text-gray-800">{data?.name?.slice(0,10)}...</div>
                                <div className='flex items-center'>
                                <img src={rating} className='w-5 h-5 rounded-full'/>
                                <div className="font-semibold text-lg text-gray-800 ml-1">{data?.rating}</div>
                                </div>
                                <p className="text-gray-500 text-base ">
                                   {data?.cuisine[0]?.name},{data?.cuisine[1]?.name},{data?.cuisine[2]?.name}
                                </p>
                                <p className="text-gray-500 text-base">
                                    {data?.address_obj?.city}
                                </p>
                            </div>
</div>
            </>
        })}
    </div>
    </>
   
  )
}

export default TopRated