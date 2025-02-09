import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem : (state,action)=>{
      state.items.push(action.payload);
    },
    removeItem: (state)=>{
      state.items.pop();
    },
    clearCart: (state)=>{
     // RTK- You can either mutate a state or return a new state
      state.items.length = 0;
      // return {items : []}
    }
  }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;