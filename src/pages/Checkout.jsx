import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {useSearchParams} from 'react-router-dom'

const SuccessCheckout = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="message-box _success">
            <i className="fa fa-check-circle" aria-hidden="true" />
            <h2> Your payment was successful </h2>
            <p>
              {" "}
              Thank you for your payment. we will <br />
              be in contact with more details shortly{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const FailureChekout = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="message-box _success _failed">
            <i className="fa fa-times-circle" aria-hidden="true" />
            <h2> Your payment failed </h2>
            <p> Try again later </p>
          </div>
        </div>
      </div>
    </div>
  )
}


const Checkout = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const checkoutStatus  = searchParams.get('success') ? true : false;
  useEffect(() => {
    console.log(checkoutStatus);
  })
  return (
    <div className="container my-3 py-3">
      {checkoutStatus ? <SuccessCheckout /> : <FailureChekout />}
    </div>
  );
};

export default Checkout;
