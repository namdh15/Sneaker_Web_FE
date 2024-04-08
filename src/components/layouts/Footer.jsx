import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="py-5" style={{ backgroundColor: '#343a40', color: '#ffffff' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>Discover our story, mission, and commitment to sustainability.</p>
              <p><a href="#" style={{ color: '#ffc107' }}>Learn more</a></p>
            </div>
            <div className="col-md-4">
              <h5>Customer Service</h5>
              <ul className="list-unstyled">
                <li><a href="#" style={{ color: '#ffc107' }}>FAQs</a></li>
                <li><a href="#" style={{ color: '#ffc107' }}>Contact Us</a></li>
                <li><a href="#" style={{ color: '#ffc107' }}>Shipping & Returns</a></li>
                <li><a href="#" style={{ color: '#ffc107' }}>Size Guide</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Connect With Us</h5>
              <p>Follow us on social media for the latest updates and promotions.</p>
              <ul className="list-inline">
                <li><a href="#" style={{ color: '#ffc107' }}>Facebook</a></li>
                <li><a href="#" style={{ color: '#ffc107' }}>Instagram</a></li>
                <li><a href="#" style={{ color: '#ffc107' }}>Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <p className="text-center" style={{ color: '#ffc107' }}>
                Subscribe to Our Newsletter - Stay updated with our latest collections, promotions, and news. Enter your email address below.
              </p>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="button-addon2" />
                <button className="btn btn-outline-warning" type="button" id="button-addon2">Subscribe</button>
              </div>
            </div>
          </div>
          <hr style={{ borderColor: '#ffc107' }} />
          <div className="row">
            <div className="col">
              <p className="text-center mb-0">
                &copy; 2024 Your Sandal Brand Name. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
