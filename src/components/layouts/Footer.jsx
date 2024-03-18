import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="py-4" style={{ backgroundColor: '#bcbcbc ' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <ul className="list-unstyled">
                <li>Our Story</li>
                <li>Our Mission</li>
                <li>Sustainability</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Customer Service</h5>
              <ul className="list-unstyled">
                <li>FAQs</li>
                <li>Contact Us</li>
                <li>Shipping & Returns</li>
                <li>Size Guide</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Connect With Us</h5>
              <ul className="list-unstyled">
                <li>Follow us on social media:</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="text-center">
                Subscribe to Our Newsletter - Stay updated with our latest collections, promotions, and news. Enter your email address below.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="text-center">
                © 2024 Your Sandal Brand Name. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
