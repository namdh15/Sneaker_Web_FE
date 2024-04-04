import React from 'react'

const HandleVariantModal = () => {
  return (
    <div
      className="modal fade"
      tabIndex={-1}
      id="variant-form-modal"
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
            <div className="row">
              <div className="col"></div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HandleVariantModal;
