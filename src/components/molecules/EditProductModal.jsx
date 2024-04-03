import React from 'react';
import CreateProductPage from '../../pages/dashboard/DashboardCreateProduct';
import './molecules.scss';

const EditProductModal = (props) => {
  const { currProduct } = props
  return (
    <div
      className="modal fade"
      tabIndex={-1}
      id="user-form-modal"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-edit-button" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <CreateProductPage isEdit={true} currProduct={currProduct} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default EditProductModal;
