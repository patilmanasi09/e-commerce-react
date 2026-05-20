import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'
import { ThemeContext } from '../Theme/ThemeProvider'
import { useContext } from 'react'
const Dashboard = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div>


      <div>

        <div className="container-fluid ">
          <div className="row">

            {/* Sidebar */}
            <div
              className={`col-md-2  p-3 ${theme === 'light' ? 'light-sidebar' : 'bg-secondary'}`}
              style={{ backgroundColor: "rgb(241, 248, 145)", color: "white", position: "sticky", top: 0, height: "100vh" }}>
              <h5 className={`mb-3 ${theme === 'light' ? 'icon-light' : 'icon-dark'}`}>Filters</h5>
              <div>
                <h6 className={`${theme === 'light' ? 'icon-light' : 'icon-dark'}`}> Category</h6>
                <div className={`${theme === 'light' ? 'icon-light' : 'icon-dark'}`}><input type="checkbox" /> Men</div>
                <div className={`${theme === 'light' ? 'icon-light' : 'icon-dark'}`}><input type="checkbox" /> Women</div>
                <div className={`${theme === 'light' ? 'icon-light' : 'icon-dark'}`}><input type="checkbox" /> Kids</div>
              </div>
            </div>

            {/* Products Section */}
            <div className="col-md-10 p-4">
              <h4 className={`mb-3 ${theme === 'light' ? 'icon-light' : 'color-dark'}`}>Products</h4>

              <div className="row">
                <ProductList />
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Dashboard
