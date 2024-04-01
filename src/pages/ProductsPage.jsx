import React from 'react'
import { Footer, Navbar, Products, SidebarFilter } from "../components"

const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <SidebarFilter />
        <Products />
      </div>
      <Footer />
    </>
  )
}

export default ProductsPage;