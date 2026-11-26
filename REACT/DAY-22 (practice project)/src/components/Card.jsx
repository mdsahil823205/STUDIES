import React from 'react'
import ProductDetails from './ProductDetails'

const Card = ({ elem }) => {
    console.log(elem.image)
    return (
        <div className='h-[320px] w-full bg-[#1d1c1c] shadow-lg rounded-lg p-4 flex '>
            {/* image section start */}
            <div className='h-full w-[20%]  bg-[#171717] rounded-2xl flex justify-center items-center    '>
                <img className='h-full w-[80%]  p-2 object-cover rounded-2xl' src={elem.image} alt="Product" />
            </div>
            {/* image section end */}

            {/* details section start */}
            <div className='h-full w-[70%] bg-[#171717] ml-2 rounded-2xl p-5'>
                {/* title */}
                <h3 className='text-lg font-bold text-white'>{elem.title}</h3>
                {/* rating */}
                <div className='flex items-center mt-2'>
                    <span className='text-yellow-500 text-lg mr-2'>★</span>
                    <span className='text-gray-200 text-sm'>{elem.rating}</span>
                    <span className='text-gray-200 text-sm ml-2'>|</span>
                    <span className='text-gray-200 text-sm ml-2'>{elem.reviews}</span>

                </div>
                {/* description */}
                <div>

                    <ProductDetails elem={elem} />
                </div>

            </div>
            {/* details section end */}

            {/* price section start */}
            <div className='h-full w-[10%] rounded-2xl bg-[#171717] text-white ml-2 rounded-2x py-20 flex flex-col items-end px-4'>
                <div className='text-2xl font-bold'>{elem.price}</div>
                <div className='text-lg '>{elem.originalPrice}</div>
                <div className='text-sm text-green-600 font-bold'>{elem.discount}</div>

            </div>
            {/* price section end */}
        </div>
    )
}

export default Card