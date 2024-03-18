import React, { useState } from 'react';

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
    <div className="sidebar" style={{ flex: '1 0 20%', paddingLeft: '2em' }}>
      <h4>Filter Sandals</h4>

      <div>
        <h5>By Gender</h5>
        <div className='filter-type-content'>
          <div className='filter-item filter-gender'>
            <input
              type="checkbox"
              id="male"
              value="male"
              onChange={(e) =>
                setGenderFilters((prevFilters) =>
                  e.target.checked
                    ? [...prevFilters, e.target.value]
                    : prevFilters.filter((filter) => filter !== e.target.value)
                )
              }
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className='filter-item filter-gender'>
            <input
              type="checkbox"
              id="female"
              value="female"
              onChange={(e) =>
                setGenderFilters((prevFilters) =>
                  e.target.checked
                    ? [...prevFilters, e.target.value]
                    : prevFilters.filter((filter) => filter !== e.target.value)
                )
              }
            />
            <label htmlFor="female">Female</label>
          </div>
          <div className='filter-item filter-gender'>
            <input
              type="checkbox"
              id="kids"
              value="kids"
              onChange={(e) =>
                setGenderFilters((prevFilters) =>
                  e.target.checked
                    ? [...prevFilters, e.target.value]
                    : prevFilters.filter((filter) => filter !== e.target.value)
                )
              }
            />
            <label htmlFor="kids">Kids</label>
          </div>
          <div className='filter-item filter-gender'>
            <input
              type="checkbox"
              id="others"
              value="others"
              onChange={(e) =>
                setGenderFilters((prevFilters) =>
                  e.target.checked
                    ? [...prevFilters, e.target.value]
                    : prevFilters.filter((filter) => filter !== e.target.value)
                )
              }
            />
            <label htmlFor="others">Others</label>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '1em' }}>
        <h5>By Color</h5>
        <div className='filter-type-content'>
          <div className='filter-item filter-color'>
            <input
              type="radio"
              id="red"
              name="color"
              value="red"
              onChange={(e) => setColorFilter(e.target.value)}
            />
            <label htmlFor="red"><span className="color-sample red" /></label>
          </div>
          <div className='filter-item filter-color'>
            <input
              type="radio"
              id="yellow"
              name="color"
              value="yellow"
              onChange={(e) => setColorFilter(e.target.value)}
            />
            <label htmlFor="yellow"><span className="color-sample yellow" /></label>
          </div>
          <div className='filter-item filter-color'>
            <input
              type="radio"
              id="black"
              name="color"
              value="black"
              onChange={(e) => setColorFilter(e.target.value)}
            />
            <label htmlFor="black"><span className="color-sample black" /></label>
          </div>
          <div className='filter-item filter-color'>
            <input
              type="radio"
              id="white"
              name="color"
              value="white"
              onChange={(e) => setColorFilter(e.target.value)}
            />
            <label htmlFor="white"><span className="color-sample white" /></label>
          </div>
          <div className='filter-item filter-color'>
            <input
              type="radio"
              id="blue"
              name="color"
              value="blue"
              onChange={(e) => setColorFilter(e.target.value)}
            />
            <label htmlFor="blue"><span className="color-sample blue" /></label>
          </div>
        </div>
      </div>

      <div>
        <h5>By Size</h5>
        <div className='filter-type-content'>
          <div className='filter-item filter-size'>
            <input
              type="checkbox"
              id="size1"
              value="1"
              onChange={(e) =>
                setSizeFilters((prevFilters) =>
                  e.target.checked
                    ? [...prevFilters, e.target.value]
                    : prevFilters.filter((filter) => filter !== e.target.value)
                )
              }
            />
            <label htmlFor="size1">1</label>
          </div>
          <div className='filter-item filter-size'>
            <input
              type="checkbox"
              id="size2"
              value="2"
              onChange={(e) =>
                setSizeFilters((prevFilters) =>
                  e.target.checked
                    ? [...prevFilters, e.target.value]
                    : prevFilters.filter((filter) => filter !== e.target.value)
                )
              }
            />
            <label htmlFor="size2">2</label>
          </div>
          <div className='filter-item filter-size'>
            <input
              type="checkbox"
              id="size3"
              value="3"
              onChange={(e) =>
                setSizeFilters((prevFilters) =>
                  e.target.checked
                    ? [...prevFilters, e.target.value]
                    : prevFilters.filter((filter) => filter !== e.target.value)
                )
              }
            />
            <label htmlFor="size3">3</label>
          </div>
          <div className='filter-item filter-size'>
            <input
              type="checkbox"
              id="size4"
              value="4"
              onChange={(e) =>
                setSizeFilters((prevFilters) =>
                  e.target.checked
                    ? [...prevFilters, e.target.value]
                    : prevFilters.filter((filter) => filter !== e.target.value)
                )
              }
            />
            <label htmlFor="size4">4</label>
          </div>
          <div className='filter-item filter-size'>
            <input
              type="checkbox"
              id="size5"
              value="5"
              onChange={(e) =>
                setSizeFilters((prevFilters) =>
                  e.target.checked
                    ? [...prevFilters, e.target.value]
                    : prevFilters.filter((filter) => filter !== e.target.value)
                )
              }
            />
            <label htmlFor="size5">5</label>
          </div>
        </div>
      </div>
      <button className="btn btn-outline-dark btn-sm m-2" onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default SidebarFilter;
