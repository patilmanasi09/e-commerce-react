import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import '../index.css'
import { ThemeContext } from '../Theme/ThemeProvider'

const Category = ({ setSelectedCategory }) => {

  const [categories, setCategories] = useState([])
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  return (
    <div className="category-container mb-3">

      <button
        className={`category-btn ${theme === 'light' ? 'category-btn-light' : 'category-btn-dark'}`}
        onClick={() => setSelectedCategory("all")}
      >
        All
      </button>

      {categories.map((cat, i) => (
  <button
    key={i}
    className={`category-btn ${theme === 'light' ? 'category-btn-light' : 'category-btn-dark'}`}
    onClick={() => setSelectedCategory(cat.slug)}
  >
    {cat.name}
  </button>
))}

    </div>
  )
}

export default Category