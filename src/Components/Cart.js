import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoryList from './CategoryList';
import { clearCart } from '../utils/cartSlice.js';

const Cart = () => {

  const cartItems = useSelector((store)=>store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = ()=> {
    dispatch(clearCart())
  }

  return (
    <div className='text-center p-5 m-5'>
      <h1 className='font-bold text-2xl'>Cart</h1>
      <div className="w-6/12 mx-auto">
        <button className='p-2 m-2 bg-black text-white rounded-xl cursor-pointer' onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length === 0 && <h1 className='m-4 p-4 text-2xl '>Cart is Empty....!!!!</h1>}
        <CategoryList items = {cartItems}/>
      </div>
    </div>
  )
}

export default Cart