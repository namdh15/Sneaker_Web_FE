import React from 'react'
import RowSelect from '../../atoms/RowSelect';
import { PRODUCT_COLOR, PRODUCT_SIZE } from '../../../constants/products.constant';
import RowInput from '../../atoms/RowInput';

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
        <div className="modal-content" style={{ marginTop: '10em' }}>
          <div className="modal-header">
            <span aria-hidden="true"><b>Create/Update product variant</b></span>
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
              <div className="col-12 col-sm-6 mb-3">
                <div className="mb-2 ml-5">
                  <b>Variant Image</b>
                </div>
                <div className="mx-auto d-flex justify-content-center" style={{ width: "90%", height: '90%', }}>
                  <div
                    className="d-flex justify-content-center align-items-center text-center rounded"
                    style={{ backgroundColor: "rgb(233, 236, 239)", padding: '1em', width: 'inherit', height: 'inherit' }}
                  >
                    <img style={{ width: 'inherit', height: 'inherit' }} src='https://i.imgur.com/EJOjIMC.jpeg' alt="" />
                    {/* <span style={{ width: 'inherit', height: 'inherit', color: "rgb(166, 168, 170)", font: "bold 12pt Arial" }}>Upload image from your browser</span> */}
                  </div>
                </div>
                <div className="required text-center">
                  <label htmlFor="image">
                    <input
                      type="file"
                      className="form-control d-none"
                      id="image"
                      name="image"
                      accept="image/*"
                    />
                    <span class="btn btn-outline-primary" style={{ marginTop: '-1em' }}>
                      <i className="fa fa-fw fa-camera" /> Select Photo
                    </span>
                  </label>
                </div>
              </div>
              <div className="col-12 col-sm-6 mb-3">
                <div className="mb-2">
                  <b>Detail statics</b>
                </div>
                <RowSelect
                  item={{
                    label: 'Size',
                    name: 'size',
                  }}
                  options={PRODUCT_SIZE}
                />
                <RowSelect
                  item={{
                    label: 'Color',
                    name: 'color',
                  }}
                  options={PRODUCT_COLOR}
                />
                <RowInput
                  items={[
                    {
                      required: true,
                      label: 'Quantity',
                      name: 'quantity',
                      placeholder: "0",
                      type: 'number',
                    }
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-danger mr-3 "
              type="submit"
              data-dismiss="modal"
              aria-label="Close">Cancel</button>
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HandleVariantModal;
