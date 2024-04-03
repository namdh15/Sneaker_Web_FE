import React from 'react'

const RowInput = (props) => {
  const { items, isTextArea } = props
  return (
    <div className="row">
      {
        items?.map((item) => (
          <div className="col">
            <div className={`form-group ${item.required && 'required'}`}>
              <label>{item.label}</label>
              {isTextArea ?
                <textarea
                  disabled={item.disabled}
                  className="form-control"
                  rows={5}
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeholder}
                  onChange={item.handleChangeValue}
                  value={item.value}
                />
                :
                <input
                  disabled={item.disabled}
                  className="form-control"
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeholder}
                  onChange={item.handleChangeValue}
                  value={item.value}
                />}
            </div>
          </div>

        ))
      }
    </div>
  )
}
export default RowInput;
