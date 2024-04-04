import React from 'react'
// assets
import { IconBoxOff } from '@tabler/icons-react';

const InitialComponent = () => {
  return (
    <div className="container-fluid  mt-100">
      <div className="row">
        <div className="col-md-12">
          <div className="card" style={{ backgroundColor: 'transparent' }} >
            <div className="card-body cart">
              <div className="col-sm-12 empty-cart-cls text-center">
                <IconBoxOff stroke={2} size="8rem" />
                <h3> <strong>Not available</strong> </h3>
                <h4>Choose certain item for more information</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default InitialComponent;