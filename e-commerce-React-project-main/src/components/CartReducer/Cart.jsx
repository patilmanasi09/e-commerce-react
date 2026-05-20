import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContextAPI } from "./CartProvider";

const Cart = () => {
  const {cartState, cartDispatch} = useContext(CartContextAPI)
  const [cartObject,setCartObject] = useState()
  const [cartProducts, setCartProducts] =useState([])

  useEffect(()=>{
    setCartObject(cartState)
    setCartProducts(cartState.cartProducts)
  },[])

  return (
    <>
    <Link to='/dashboard' >Back</Link>
    <div>Your BAG</div>
    <ul>
      {
        cartProducts.map((item,i)=>(
          <li key={i}>{item.prod_Name} 
          <button 
          // onClick={}
          >-</button>
          {item.prodQuantity}
          <button 
          // onClick={}
          >-</button>
          {item.prod_price}
          </li>
        ))
      }
    </ul>
    <hr />
    <p>Delivery Charges : {cartObject?.DeliveryCharges}</p>
    <p>Platform fee : {cartObject?.platformFee}</p>
    <hr />
<p><b>Total Amount</b> <i>{cartObject?.totalAmount}</i></p>
    </>
  )
}

export default Cart