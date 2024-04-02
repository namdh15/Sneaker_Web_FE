import React from 'react'
import { Products, SidebarFilter } from "../components"

const ProductsPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarFilter />
      <Products />
    </div>
  )
}

export default ProductsPage;