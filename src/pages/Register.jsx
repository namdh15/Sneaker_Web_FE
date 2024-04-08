import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerAction } from '../redux/action/authAction';

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData()
        formData.append('fullname', fullname);
        formData.append('email', email);
        formData.append('address', address);
        formData.append('phoneNumber', phoneNumber);
        formData.append('password', password);
        await dispatch(registerAction(formData, navigate))
        setLoading(false);
    }

    return (
        <div className="container my-3 py-3">
            <h1 className="text-center">Register</h1>
            <hr />
            <div class="row my-4 h-100">
                <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                    <form>
                        <div class="form my-3">
                            <label for="Name">Full Name</label>
                            <input
                                type="email"
                                class="form-control"
                                id="Name"
                                placeholder="Enter Your Name"
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <div class="form my-3">
                            <label for="Email">Email address</label>
                            <input
                                type="email"
                                class="form-control"
                                id="Email"
                                placeholder="name@example.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div class="form my-3">
                            <label for="Address">Address</label>
                            <input
                                type="text"
                                class="form-control"
                                id="Address"
                                placeholder="123.st, Ha Noi - Viet Nam"
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div class="form my-3">
                            <label for="Phone">Phone Number</label>
                            <input
                                type="text"
                                class="form-control"
                                id="Phone"
                                placeholder="(+84) "
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div class="form  my-3">
                            <label for="Password">Password</label>
                            <input
                                type="password"
                                class="form-control"
                                id="Password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="my-3">
                            <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                        </div>
                        <div className="text-center">
                            <button class="my-2 mx-auto btn btn-dark" type="submit" onClick={handleSubmit}>
                                {loading ? (
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                ) : ("Register")}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register