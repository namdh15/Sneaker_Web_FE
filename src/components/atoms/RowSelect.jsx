import React from 'react'

const RowSelect = (props) => {
  const { item, options } = props
  return (
    <div className="row">
      <div className="col">
        <div className={`form-group ${item.required && 'required'}`}>
          <label className="form-label">{item.label}</label>
          <select
            onChange={item.handleChangeValue}
            name={item.name}
            class="form-select"
            aria-label="Default select example"
            value={item.value}
            required={item.required}
          >
            <option
              selected
              disabled
              value=''
            >Select {item.label}</option>
            {options?.map((it, index) => (
              <option value={(item.name === 'size') ? it : index}>{it}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default RowSelect;
