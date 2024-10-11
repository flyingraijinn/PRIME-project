import React, { useContext } from 'react'
import {ShopContext} from './Context.jsx'
const Products = (props) => {
    const {addToCart, cartItems} = useContext(ShopContext)
    const {id, productName, price, image} = props.data;
    const cartItemAmount = cartItems[id]
  return (
    
    <div className=' border-green-600 border-[2px] py-2 px-5 rounded-lg m-5'>
        <img className='w-[200px] h-[200px] bg-transparent mt-3' src={image} alt="product" />
    <div className='mt-5 text-center'>
    <p className='mt-2 text-center'><b>{productName}</b></p>
    <p className='mt-2 text-center font-semibold'>${price}</p>
    <button onClick={()=> addToCart(id)} className='bg-green-500 text-black text-lg font-[Poppins] mb-3 rounded-lg hover:bg-green-600 duration-200 ease-in-out py-1 px-4 mt-2'> Add to Cart 
        {cartItemAmount > 0 && <> ({cartItemAmount})</>}
    </button>
    </div>
    </div>
    
  )
}

export default Products