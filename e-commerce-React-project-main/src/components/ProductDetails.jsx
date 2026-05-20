import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import Navbar from './Navbar'
import { ThemeContext } from '../Theme/ThemeProvider';
import { useContext } from 'react';

const ProductDetails = () => {

  const { id } = useParams()
  const { theme, toggleTheme } = useContext(ThemeContext)

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  async function fetchProduct() {
    await fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setError(true)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  if (loading) return <Loading />
  if (error) return <p>Something went wrong</p>

  return (

    <div className={`container mt-5 ${theme === 'light' ? 'product-light' : 'product-dark'}`}>
      <div className="row">


        <div className="col-md-6 text-center">
          <div className="border p-3">
            <img
              src={product.thumbnail}

              alt={product.title}
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
        </div>


        <div className="col-md-6 mt-4 ">
          <h3 className="fw-bold ">{product.title}</h3>

          <p className="">{product.category}</p>

          <h4 className="text-success">${product.price}</h4>

          <p>{product.description}</p>



          <div className="d-flex gap-3 mt-3">
            <button  
            className={`btn mt-2 ${theme === 'light' ? 'light-btn' : 'btn-dark'}`}>Add to Bag</button>
            <button 
            className={`btn mt-2 ${theme === 'light' ? 'light-btn' : 'btn-dark'}`}>Buy Now</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductDetails