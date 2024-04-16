import React, { useEffect, useState } from 'react'
import RowSelect from '../../atoms/RowSelect';
import RowInput from '../../atoms/RowInput';
import { toast } from 'react-toastify';
import { PRODUCT_COLOR, PRODUCT_SIZE } from '../../../constants';

const HandleVariantModal = (props) => {
  const {
    isEdit,
    currVariant,
    handleTempVariants
  } = props;

  const initialVariant = {
    image: null,
    size: null,
    color: null,
    stock: null, // used as quantity
  }

  const [formValue, setFormValue] = useState(initialVariant);
  const [previewImage, setPreviewImage] = useState(formValue?.image);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file instanceof Blob) {
        setFormValue({ ...formValue, 'image': file })
        var reader = new FileReader();
        reader.onload = function () {
          setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        console.error('The selected file is not of type Blob.');
      }
    } else {
      console.error('No file selected.');
    }
  };

  const handleChangeValue = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  }

  const handleSubmitVariant = async (event) => {
    event.preventDefault();
    if (!formValue?.image) {
      toast.error('Import your image file!')
      return false;
    }
    if (isEdit) {

    } else {
      toast.info('You added a new variant to queue')
      handleTempVariants({ ...formValue, image: previewImage })
    }
  }

  useEffect(() => {
    setFormValue(currVariant);
    setPreviewImage(currVariant?.image)
    return () => {}
  }, [currVariant]);

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
          <form
            className="form needs-validation"
            onSubmit={handleSubmitVariant}
          >
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
                      <img
                        style={{ width: 'inherit', height: 'inherit' }}
                        src={previewImage ?? 'https://i.imgur.com/EJOjIMC.jpeg'}
                        alt=""
                      />
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
                        onChange={handleImageChange}
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
                      required: true,
                      label: 'Size',
                      name: 'size',
                      handleChangeValue: handleChangeValue,
                      value: formValue?.size
                    }}
                    options={PRODUCT_SIZE}
                  />
                  <RowSelect
                    item={{
                      required: true,
                      label: 'Color',
                      name: 'color',
                      handleChangeValue: handleChangeValue,
                      value: formValue?.color
                    }}
                    options={PRODUCT_COLOR}
                  />
                  <RowInput
                    items={[
                      {
                        required: true,
                        label: 'Quantity',
                        name: 'stock',
                        placeholder: "0",
                        type: 'number',
                        handleChangeValue: handleChangeValue,
                        value: formValue?.stock
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
              {
                isEdit ?
                  <button className="btn btn-primary" type='submit'>Submit</button> :
                  <button
                    className="btn btn-primary"
                    type='submit'
                    data-bs-dismiss="modal"
                  >Add</button>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default HandleVariantModal;
