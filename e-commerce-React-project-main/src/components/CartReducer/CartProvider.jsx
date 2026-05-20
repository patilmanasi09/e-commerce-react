import React, { createContext, useReducer, useState } from 'react'
import { cartInitialState, cartReducer } from './cartReducer.js'


export const CartContextAPI = createContext(null)

const CartProvider = ({children}) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState)
  return (
    <CartContextAPI.Provider value={{cartState, cartDispatch}}>
      {children}
    </CartContextAPI.Provider>
  )
}

export default CartProvider