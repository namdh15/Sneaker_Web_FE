import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { useDispatch } from "react-redux";
import { loginAction, loginAsAdminAction } from "../redux/action/authAction";

const Login = () => {

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = async (isAdmin = false, event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData()
    formData.append('email', email);
    formData.append('password', password);
    await dispatch(isAdmin ? loginAsAdminAction(formData, navigate) : loginAction(formData, navigate))
    // await dispatch(loginAction(formData, navigate))
    setLoading(false);
  }

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        {/* Nav tabs */}
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="#user">User</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#admin">Admin</a>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content">
          <div className="tab-pane container active" id="user">
            <div class="row my-4 h-100">
              <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                <form>
                  <div class="my-3">
                    <label for="display-4">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="my-3">
                    <label for="floatingPassword display-4">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
                  </div>
                  <div className="text-center">
                    <button class="my-2 mx-auto btn btn-dark" type="submit" onClick={(event) => handleSubmit(false, event)}>
                      {loading ? (
                        <div class="spinner-border" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      ) : ("Login")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="tab-pane container fade" id="admin">
            <div class="row my-4 h-100">
              <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                <form>
                  <div class="my-3">
                    <label for="display-4">Admin Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="my-3">
                    <label for="floatingPassword display-4">Admin Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <button class="my-2 mx-auto btn btn-dark" type="submit" onClick={(event) => handleSubmit(true, event)}>
                      {loading ? (
                        <div class="spinner-border" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      ) : ("Login")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
