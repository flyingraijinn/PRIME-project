import React from 'react'
import Products from './Products.jsx'
import {PRODUCTS} from '../product.js'
const Shop = () => {
  return (
    <div>
        <h1 className='text-5xl font-bold item-center justify-center flex mt-10 text-green-600 font-[Poppins]'>
           New Arrivals
        </h1>
        <div className='w-full items-center justify-center'>
            <div className='grid md:grid-cols-4 mt-10 place-items-center'>{PRODUCTS.map((product)=><Products key={product.id} data={product}/>)}</div>
        </div>
    </div>
  )
}

export default Shop