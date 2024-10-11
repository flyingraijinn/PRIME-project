
import {ShopContext} from './Context.jsx'
import React, { useContext } from 'react'
const CartItem = ({ data }) => {
  const {id, productName, price, image } = data;
  const {cartItems, addToCart, removeFromCart, updateNewAmount} = useContext(ShopContext)
  return (
    <div className="border-2 py-2 px-5 rounded-lg m-5 flex item-center justify-center w-[500px] mx-auto">
      <img className=" w-[100px] h-[100px]" src={image} alt={productName} />
      <div className='text-center mt-3 font-semibold text'>
        <p>{productName}</p>
        <p >${price}</p>
        <button onClick={()=> removeFromCart(id)} className='mr-2 bg-green-400 px-3 rounded-lg text-center font-bold mt-1 hover:bg-green-600 duration-200 ease-out'> - </button>
        <input value={cartItems[id]} onChange={(e)=> updateNewAmount(Number(e.target.value),id)}   className='w-9 text-center border-2 rounded-lg'/>
        <button onClick={()=> addToCart(id)} className='ml-2  bg-green-400 px-2 rounded-lg text-center font-semibold hover:bg-green-600 duration-200 ease-out'> + </button>
      </div>
   
    </div>
  );
};

export default CartItem;
