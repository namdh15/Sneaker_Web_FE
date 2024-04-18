import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBProgress,
  MDBProgressBar,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { useSelector } from "react-redux";
import { PRODUCT_COLOR, PRODUCT_GENDER } from "../constants";

export default function OrderDetail() {
  const order = useSelector((state) => state?.order);
  console.log(order);

  return (
    <>
      <section
        className="h-100 gradient-custom"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="10" xl="8">
              <MDBCard style={{ borderRadius: "10px" }}>
                <MDBCardHeader className="px-4 py-5">
                  <MDBTypography tag="h5" className="text-muted mb-0">
                    Thanks for your Order
                  </MDBTypography>
                </MDBCardHeader>
                <MDBCardBody className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p
                      className="lead fw-normal mb-0"
                      style={{ color: "#a8729a" }}
                    >
                      Receipt
                    </p>
                    <p className="small text-muted mb-0">
                      Receipt Voucher : 1KAU9-84UIL
                    </p>
                  </div>

                  {order?.selected?.map((item, index) => {
                    return (
                      <MDBCard className="shadow-0 border mb-4">
                        <MDBCardBody>
                          <MDBRow>
                            <MDBCol md="2">
                              <MDBCardImage
                                src={item?.image}
                                fluid
                                alt="Phone"
                              />
                            </MDBCol>
                            <MDBCol
                              md="2"
                              className="text-center d-flex justify-content-center align-items-center"
                            >
                              <p className="text-muted mb-0">{item?.name}</p>
                            </MDBCol>
                            <MDBCol
                              md="2"
                              className="text-center d-flex justify-content-center align-items-center"
                            >
                              <p className="text-muted mb-0 small">{PRODUCT_COLOR[item?.color]}</p>
                            </MDBCol>
                            <MDBCol
                              md="2"
                              className="text-center d-flex justify-content-center align-items-center"
                            >
                              <p className="text-muted mb-0 small">
                                Gender: {PRODUCT_GENDER[item?.gender]}
                              </p>
                            </MDBCol>
                            <MDBCol
                              md="2"
                              className="text-center d-flex justify-content-center align-items-center"
                            >
                              <p className="text-muted mb-0 small">Qty: {item?.stock}</p>
                            </MDBCol>
                            <MDBCol
                              md="2"
                              className="text-center d-flex justify-content-center align-items-center"
                            >
                              <p className="text-muted mb-0 small">vnd {item?.price}</p>
                            </MDBCol>
                          </MDBRow>
                          <hr
                            className="mb-4"
                            style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                          />
                          <MDBRow className="align-items-center">
                            <MDBCol md="2">
                              <p className="text-muted mb-0 small">Track Order</p>
                            </MDBCol>
                            <MDBCol md="10">
                              <MDBProgress
                                style={{ height: "6px", borderRadius: "16px" }}
                              >
                                <MDBProgressBar
                                  style={{
                                    borderRadius: "16px",
                                    backgroundColor: "#a8729a",
                                  }}
                                  width={65}
                                  valuemin={0}
                                  valuemax={100}
                                />
                              </MDBProgress>
                              <div className="d-flex justify-content-around mb-1">
                                <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                  Out for delivary
                                </p>
                                <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                  Delivered
                                </p>
                              </div>
                            </MDBCol>
                          </MDBRow>
                        </MDBCardBody>
                      </MDBCard>
                    )
                  })}

                  <div className="d-flex justify-content-between pt-2">
                    <p className="fw-bold mb-0">Order Details</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Total</span> vnd {order?.subtotal}
                    </p>
                  </div>

                  <div className="d-flex justify-content-between pt-2">
                    <p className="text-muted mb-0">Total Items : {order?.totalItems}</p>
                    <p className="text-muted mb-0">Invoice Number : 788152</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Discount</span> vnd 19%
                    </p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p className="text-muted mb-0">
                      Invoice Date : 22 Dec,2019
                    </p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">GST 18%</span> 123
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-5">
                    <p className="text-muted mb-0">
                      Recepits Voucher : 18KU-62IIK
                    </p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Delivery Charges</span>{" "}
                      Free
                    </p>
                  </div>
                </MDBCardBody>
                <MDBCardFooter
                  className="border-0 px-4 py-5"
                  style={{
                    backgroundColor: "#a8729a",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <MDBTypography
                    tag="h5"
                    className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                  >
                    Total paid: <span className="h2 mb-0 ms-2">vnd {order?.subtotal !== undefined ? +order?.subtotal * 0.81 : 0}</span>
                  </MDBTypography>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      </section>
    </>
  );
}