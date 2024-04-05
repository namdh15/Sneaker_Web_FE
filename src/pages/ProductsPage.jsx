import React from 'react'
import { Products, SidebarFilter } from "../components"

const ProductsPage = () => {
  return (
    <div className='row' style={{ display: 'flex' }}>
      <SidebarFilter />
      <Products />
    </div>
  )
}

export default ProductsPage;