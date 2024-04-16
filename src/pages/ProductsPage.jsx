import React, { useState } from 'react'
import { Products, SidebarFilter } from "../components"

const ProductsPage = () => {

  const [payloadFilter, setPayloadFilter] = useState()
  return (
    <div className='row' style={{ display: 'flex' }}>
      <SidebarFilter handlePayloadFilter={setPayloadFilter} />
      <Products payloadFilter={payloadFilter} />
    </div>
  )
}

export default ProductsPage;