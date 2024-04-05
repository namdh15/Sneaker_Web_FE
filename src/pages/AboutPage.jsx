import React from 'react'

const AboutPage = () => {
  return (
    <div className="container my-3 py-3">
      <h1 className="text-center">About Us</h1>
      <hr />
      <p className="lead text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        facere doloremque veritatis odit similique sequi. Odit amet fuga nam
        quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
        totam vero quas provident ipsam, veritatis nostrum velit quos
        recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
        earum unde eligendi autem praesentium, doloremque distinctio nesciunt
        porro tempore quis eaque labore voluptatibus ea necessitatibus
        exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
        tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
        quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
        delectus expedita a alias nam recusandae illo debitis repellat libero,
        quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
        dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
      </p>

      <h2 className="text-center py-4">Our Products</h2>
      <div className="row">
        <div className="col-md-3 col-sm-6 mb-3 px-3">
          <div className="card h-100">
            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
            <div className="card-body">
              <h5 className="card-title text-center">Mens's Clothing</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-3 px-3">
          <div className="card h-100">
            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
            <div className="card-body">
              <h5 className="card-title text-center">Women's Clothing</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-3 px-3">
          <div className="card h-100">
            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
            <div className="card-body">
              <h5 className="card-title text-center">Jewelery</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-3 px-3">
          <div className="card h-100">
            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
            <div className="card-body">
              <h5 className="card-title text-center">Electronics</h5>
            </div>
          </div>
        </div>
      </div>

      <form className="row g-3 needs-validation" noValidate="">
        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltip01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationTooltip01"
            defaultValue="Mark"
            required=""
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>
        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltip02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationTooltip02"
            defaultValue="Otto"
            required=""
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>
        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltipUsername" className="form-label">
            Username
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="validationTooltipUsernamePrepend">
              @
            </span>
            <input
              type="text"
              className="form-control"
              id="validationTooltipUsername"
              aria-describedby="validationTooltipUsernamePrepend"
              required
            />
            <div className="invalid-tooltip">
              Please choose a unique and valid username.
            </div>
          </div>
        </div>
        <div className="col-md-6 position-relative">
          <label htmlFor="validationTooltip03" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="validationTooltip03"
            required
          />
          <div className="invalid-tooltip">Please provide a valid city.</div>
        </div>
        <div className="col-md-3 position-relative">
          <label htmlFor="validationTooltip04" className="form-label">
            State
          </label>
          <select className="form-select" id="validationTooltip04" required="">
            <option selected="" disabled="" value="">
              Choose...
            </option>
            <option>...</option>
          </select>
          <div className="invalid-tooltip">Please select a valid state.</div>
        </div>
        <div className="col-md-3 position-relative">
          <label htmlFor="validationTooltip05" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="validationTooltip05"
            required=""
          />
          <div className="invalid-tooltip">Please provide a valid zip.</div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>


    </div>
  )
}

export default AboutPage