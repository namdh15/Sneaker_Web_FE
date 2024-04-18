import React, { useState } from 'react';
import RowSelect from '../atoms/RowSelect';
import { PRODUCT_CATEGORIES, PRODUCT_COLOR, PRODUCT_GENDER, PRODUCT_SIZE } from '../../constants';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

const SidebarFilter = (props) => {
  const { handlePayloadFilter } = props

  const [formFilterValue, setFormFilterValue] = useState({
    size: null,
    gender: null,
    categories: null,
    color: null,
  })

  const handleClearFilter = () => {
    setFormFilterValue({
      size: null,
      gender: null,
      categories: null,
      color: null,
    })
    handlePayloadFilter({
      size: null,
      gender: null,
      categories: null,
      color: null,
    })
  }

  return (
    <div className="sidebar col-12 col-md-3 pl-4 pt-5">
      <div className="col-12" style={{ position: 'sticky', top: '150px' }}>
        <h5>Filter Sandals</h5>
        <div className="row">
          <div className="navbar-expand-lg mb-5">
            <div id="navbarVerticalNavMenuEg2" className="collapse navbar-collapse">
              <div className="w-100">
                <form>
                  <div className="border-bottom pb-4">
                    <b>Filter by Size</b>
                    <div style={{ columnCount: 3 }}>
                      <RadioGroup
                        aria-labelledby="demo-error-radios"
                        name="quiz"
                        value={formFilterValue?.size}
                        onChange={(event) => { setFormFilterValue({ ...formFilterValue, size: event.target.value }) }}
                      >
                        {PRODUCT_SIZE.map((item, index) => (
                          <FormControlLabel value={item} control={<Radio />} label={item} />
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                  <div className="border-bottom pb-4">
                    <b>Select filter option</b>
                    <RowSelect
                      item={{
                        label: 'Gender',
                        name: 'gender',
                        value: formFilterValue?.gender,
                        handleChangeValue: (event) => setFormFilterValue({ ...formFilterValue, gender: event.target.value })
                      }}
                      options={PRODUCT_GENDER}
                    />
                    <RowSelect
                      item={{
                        label: 'Category',
                        name: 'category',
                        value: formFilterValue?.categories,
                        handleChangeValue: (event) => setFormFilterValue({ ...formFilterValue, categories: event.target.value })
                      }}
                      options={PRODUCT_CATEGORIES}
                    />
                  </div>
                  <div className="border-bottom pb-4">
                    <b>Filter by Color</b>
                    <div style={{ columnCount: 3 }}>
                      <RadioGroup
                        aria-labelledby="demo-error-radios"
                        name="quiz"
                        value={formFilterValue?.color}
                        onChange={(event) => { setFormFilterValue({ ...formFilterValue, color: event.target.value }) }}
                      >
                        {PRODUCT_COLOR.map((item, index) => (
                          <FormControlLabel value={index} control={<Radio />} label={item} />
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                  <div className="d-grid">
                    <button
                      type="button"
                      className="btn btn-outline-primary mb-3"
                      onClick={handleClearFilter}
                    >Clear all</button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handlePayloadFilter(formFilterValue)}
                    >Filter</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
