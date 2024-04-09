import React, { useState } from 'react';
import RowSelect from '../atoms/RowSelect';
import { PRODUCT_CATEGORIES, PRODUCT_GENDER, PRODUCT_SIZE } from '../../constants/products.constant';

const SidebarFilter = ({ applyFilters }) => {
  const [genderFilters, setGenderFilters] = useState([]);
  const [colorFilter, setColorFilter] = useState('');
  const [sizeFilters, setSizeFilters] = useState([]);

  const handleApplyFilters = () => {
    applyFilters({
      gender: genderFilters,
      color: colorFilter,
      size: sizeFilters
    });
  };

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
                    <div style={{ columnCount: 2 }}>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="sizeSCheckbox"
                            defaultChecked=""
                          />
                          <label className="form-check-label" htmlFor="sizeSCheckbox">S (27)</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-bottom pb-4">
                    <b>Select filter option</b>
                    <RowSelect
                      item={{
                        label: 'Gender',
                        name: 'gender',
                      }}
                      options={PRODUCT_GENDER}
                    />
                    <RowSelect
                      item={{
                        label: 'Category',
                        name: 'category',
                      }}
                      options={PRODUCT_CATEGORIES}
                    />
                  </div>
                  <div className="border-bottom pb-4">
                    <b>Filter by Color</b>
                    <div style={{ columnCount: 2 }}>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="sizeSCheckbox"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="sizeSCheckbox"
                          >
                            S (27)
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="d-grid">
                    <button type="button" className="btn btn-outline-primary mb-3">Clear all</button>
                    <button type="button" className="btn btn-primary">Filter</button>
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
