import React, { useContext } from 'react'
import { PRODUCTS } from '../product'
import {ShopContext} from './Context.jsx'
import CartItem from './CartItem.jsx'
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate();
    const {cartItems, getTotalCartAmount, clearCart} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
  return (
    <div className='h-auto'>
        <h1 className='text-3xl font-bold m-5 text-center '>Your Items Selected Here</h1>
        <div>
            {PRODUCTS.map((product)=>{
                if(cartItems[product.id] !== 0)
                    return <CartItem  data={product}/>
            })}
        </div>
        <p className='text-center text-3xl'>Total : ${totalAmount}</p>
        <div className='item-center justify-center flex mt-5 mb-5'>
        <button onClick={clearCart} className='bg-red-500 py-2 px-5 rounded-lg mr-2 hover:bg-red-700 text-white font-semibold'>Clear All</button>
        <button onClick={()=> navigate("/Shop")} className='bg-green-500 text-black font-semibold hover:bg-green-600 duration-200 ease-in-out px-4 py-2 rounded-lg mr-2'>Continue Shopping</button>
        <button  className='bg-green-500 text-black font-semibold hover:bg-green-600 duration-200 ease-in-out px-4 py-2 rounded-lg'>Check Out</button>
      </div>
    </div>
  )
}

export default Cart
