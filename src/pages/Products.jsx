import React from 'react'
import { Footer, Navbar, Product } from "../components"
import SidebarFilter from '../components/SidebarFilter'

const Products = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <SidebarFilter />
        <Product />
      </div>
      <Footer />
    </>
  )
}

export default Products