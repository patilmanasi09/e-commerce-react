import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import '../index.css'
import { useContext } from 'react'
import { ThemeContext } from '../Theme/ThemeProvider'
import { cartInitialState, cartReducer } from './CartReducer/cartReducer'
import { CartContextAPI } from './CartReducer/CartProvider'

const Card = ({ product }) => {
  
  const { theme } = useContext(ThemeContext)
  const {cartState, cartDispatch} = useContext(CartContextAPI)


  return (

    <Link
      to={`/product/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="card h-100 shadow-sm product-card">

        <div className="img-wrapper">
          <img
            src={product.thumbnail}
            className="card-img-top product-img"
            alt={product.title}
          />
        </div>

        <div className="card-body d-flex flex-column">
          <h6 className="fw-bold">{product.title}</h6>

          <h5 className="mt-auto">${product.price}</h5>


          <button


            className={`btn mt-2 ${theme === 'light' ? 'light-btn' : 'btn-dark'}`}
            onClick={(e) => e.preventDefault()}
          >
            Add to Bag
          </button>


          <button
            className={`btn mt-2 ${theme === 'light' ? 'light-btn' : 'btn-dark'}`}

          >
            View More
          </button>

        </div>

      </div>

    </Link>
  )
}

export default Card