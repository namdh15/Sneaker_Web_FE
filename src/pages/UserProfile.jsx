import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../redux/action/authAction';
import { useNavigate } from 'react-router-dom';
import { Footer, Navbar } from '../components';
const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(state => state.auth.userData);
  const logout = async () => {
    await dispatch(logoutAction(navigate));;
  };
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Profile</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="form my-3">
                <label for="Name">Full Name</label>
                <input
                  disabled
                  type="email"
                  class="form-control"
                  id="Name"
                  value={userData.fullname}
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email address</label>
                <input
                  disabled
                  type="email"
                  class="form-control"
                  id="Email"
                  value={userData.email}
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Password</label>
                <input
                  disabled
                  type="password"
                  class="form-control"
                  id="Password"
                  placeholder="Password"
                />
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" onClick={logout} >
                  Logout
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default UserProfile;