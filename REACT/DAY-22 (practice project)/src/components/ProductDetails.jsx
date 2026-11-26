import React from 'react'

const ProductDetails = ({ elem }) => {
  console.log(elem.offers[0])
  return (
    <>
      <ul className='text-gray-700 text-sm mt-2 list-disc ml-5 '>
        {elem.details.map((item, index) => {
          return <li className='text-gray-100' key={index}>{item}</li>
        })}

      </ul>
      <div className='text-gray-700 text-sm mt-4 font-bold text-green-700 ml-3 flex flex-col gap-1'>

        <p>{elem.offers.bankOffer}</p>
        <p>{elem.offers.exchangeOffer}</p>

      </div>
    </>
  )
}

export default ProductDetails