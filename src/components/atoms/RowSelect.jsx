import React from 'react'

const RowSelect = (props) => {
  const { item, options } = props
  return (
    <div className="row">
      <div className="col">
        <div className="form-group">
          <label>{item.label}</label>
          <select
            onChange={item.handleChangeValue}
            name={item.name}
            class="form-select"
            aria-label="Default select example"
            value={item.value}
          >
            <option selected>Select {item.label}</option>
            {options?.map((it, index) => (
              <option value={index}>{it}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default RowSelect;
