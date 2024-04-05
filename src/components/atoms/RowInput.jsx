import React from 'react'

const RowInput = (props) => {
  const { items, isTextArea } = props
  return (
    <div className="row">
      {
        items?.map((item) => (
          <div className="col">
            <div className={`form-group ${item.required && 'required'}`}>
              <label className="form-label">{item.label}</label>
              {isTextArea ?
                <textarea
                  disabled={item.disabled}
                  className="form-control"
                  rows={5}
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeholder}
                  onChange={item.handleChangeValue}
                  // value={item.value}
                  required
                />
                :
                <input
                  disabled={item.disabled}
                  className="form-control"
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeholder}
                  onChange={item.handleChangeValue}
                  // value={item.value}
                  required
                />}
              <div class="invalid-feedback">
                Please provide valid value.
              </div>
            </div>
          </div>

        ))
      }
    </div>
  )
}
export default RowInput;
