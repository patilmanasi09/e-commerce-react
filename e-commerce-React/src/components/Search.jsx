import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../components/Card'
import Loading from '../components/Loading'

const Search = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const query = new URLSearchParams(useLocation().search).get("q")
  console.log(query)

  useEffect(() => {
  fetch(`https://dummyjson.com/products/search?q=${query}`)
    .then(res => res.json())
    .then(data => {
      setProducts(data.products)
      setLoading(false)
    })
    .catch(() => setLoading(false))
}, [query])

  if (loading) return <Loading />

  return (
    <div className="container mt-4">
      <h4>Search Results for "{query}"</h4>

      <div className="row mt-3">
        {
          products.length > 0 ? (
            products.map(p => (
              <div className="col-md-3 mb-4" key={p.id}>
                <Card product={p} />
              </div>
            ))
          ) : (
            <p>No products found</p>
          )
        }
      </div>
    </div>
  )
}

export default Search