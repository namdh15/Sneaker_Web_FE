import './atoms.scss';

const EmptyComponent = (props) => {
  const { isSlide, message1, message2 } = props;
  return (
    <div className="container-fluid  mt-100">
      <div className="row">
        <div className="col-md-12">
          <div className="card" style={{ backgroundColor: isSlide && 'transparent' }} >
            <div className="card-body cart">
              <div className="col-sm-12 empty-cart-cls text-center">
                <img
                  src={isSlide ? "./assets/empty-cart.png" : "https://i.imgur.com/dCdflKN.png"}
                  width={130}
                  height={130}
                  className="img-fluid mb-4 mr-3"
                />
                <h3>
                  {/* <strong>Your Cart is Empty</strong> */}
                  <strong>{message1}</strong>
                </h3>
                {/* <h4>Add something to make me happy</h4> */}
                <h4>{message2}</h4>
                {!isSlide &&
                  <a
                    href="#"
                    className="btn btn-primary cart-btn-transform m-3"
                    data-abc="true"
                  >
                    continue shopping
                  </a>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default EmptyComponent;