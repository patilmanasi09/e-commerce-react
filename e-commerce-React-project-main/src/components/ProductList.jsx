import React, { useEffect } from 'react'
import { useState } from 'react'
import '../index.css'
import Card from './Card'
import ProductDetails from './ProductDetails'
import Loading from './Loading'
import Category from './Category'



const ProductList = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    // ADDED: category state
    const [selectedCategory, setSelectedCategory] = useState("all")


    async function fetchProducts() {

        //  CHANGED: dynamic URL based on category
        let url = "https://dummyjson.com/products"

        if (selectedCategory !== "all") {
            //  IMPORTANT: encode category
            url = `https://dummyjson.com/products/category/${encodeURIComponent(selectedCategory)}`
        }

        await fetch(url) // CHANGED: using dynamic url
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setError(true)
                setLoading(false)
            })

    }





    useEffect(() => {
        setLoading(true)
        fetchProducts()
    }, [selectedCategory])//[selectedCategory])      


    if (loading) return <Loading />
    if (error) return <p>404 Page</p>

    return (
        <>
            {/* category component */}
            <Category setSelectedCategory={setSelectedCategory} />


            {
                products.map((product, i) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={i}>
                        <Card product={product} />
                    </div>
                ))
            }
        </>
    )
}

export default ProductList
