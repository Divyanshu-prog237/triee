import React from 'react'
import { Link } from 'react-router-dom'
import login from "../assets/images/login.png"
//import useAppContext from '../../AppContext'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Swal from 'sweetalert2'
import Logo from '../assets/logo.png'

const LoginSchema = Yup.object().shape({
  password: Yup.string().min(4, 'Too short!').max(20, 'Too Long!'),
  email: Yup.string().email('Invalid email').required('Required')
});

  const Login = () => {
    //const { setLoggedin } = useAppContext();

    const loginForm = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values, action) => {
            console.log(values);

            const res = await fetch('http://localhost:3000/users1/authenticate', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(res.status);
            action.resetForm();

            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful'
                })
                setLoggedin(true);

                const data = await res.json();
                sessionStorage.setItem('isloggedin', true);
                if(data.role === 'admin'){
                    sessionStorage.setItem('admin', JSON.stringify(data));
                    navigate('/admin/base');
                }else{
                    sessionStorage.setItem('user', JSON.stringify(data));
                    navigate('/');
                }
            } else if (res.status === 400
                ) {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Invalid email or password'

                })
            }
        },
        // step6: validation of LoginSchema
        validationSchema: LoginSchema
        
    });

  return ( 
    <div><>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <title>BUSINESS INCUBATOR</title>
    <link
      rel="stylesheet"
      href="assets/vendors/fontawesome-free/css/all.min.css"
    />
    <link rel="stylesheet" href="assets/css/style.css" />
    <header className="foi-header">
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light foi-navbar">
          <Link className="navbar-brand" to="/Home">
            <img src={Logo} alt="FOI" 
            height={50}
            style={{ marginTop: "-8px", marginBottom: "-8px" }}
             />
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/Home">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Features">
                  Features
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/Pages"

                >
                  Pages
                </Link>
                <div className="dropdown-menu" aria-labelledby="pagesMenu">
                  <Link className="dropdown-item" href="blog.html">
                    Blog
                  </Link>
                  <Link className="dropdown-item" to="/login">
                    Login
                  </Link>
                  <Link className="dropdown-item" to="/Register">
                    Register
                  </Link>
                  <Link className="dropdown-item"  to="/Faq">
                    FAQ
                  </Link>
                  <Link className="dropdown-item" to="/Blog">
                    Single blog
                  </Link>
                  <Link className="dropdown-item" to="/Privacypolicy">
                    Privacy policy
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to ="/Contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to ="/Services">
                  Services
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mt-2 mt-lg-0">
              <li className="nav-item mr-2 mb-3 mb-lg-0">
                <Link className="btn btn-secondary" to="/Register">
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-secondary" to="/Login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <main className="page-auth">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <section className="auth-wrapper">
              <div className="row">
                <div className="col-md-6 mb-4 mb-md-0">
                  <h2 className="auth-section-title">Log In</h2>
                  <p className="auth-section-subtitle">
                    Sign in to your account to continue.
                  </p>
                  <form onSubmit={loginForm.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="email">
                        Email <sup>*</sup>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email *"
                        onChange={loginForm.handleChange}
                        value={loginForm.values.email}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">
                        Password <sup>*</sup>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password *"
                        onChange={loginForm.handleChange}
                        value={loginForm.values.password}
                      />
                    </div>
                    <div className="form-actions-wrapper d-flex flex-wrap align-items-center justify-content-between">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="keepLogin"
                        />
                        <label className="form-check-label" htmlFor="keepLogin">
                          keep me login
                        </label>
                      </div>
                      <a href="#!" className="forgot-password-link">
                        Forgot password?
                      </a>
                    </div>
                    <button
                      className="btn btn-primary"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                  <p className="mb-0">
                    <Link
                      to="/Register"
                      className="text-dark font-weight-bold"
                    >
                      New User? Sign Up
                    </Link>
                  </p>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <img
                    src={login}
                    alt="login"
                    className="img-fluid"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
    <footer className="foi-footer text-white">
      <div className="container">
        <div className="row footer-content">
          <div className="col-xl-6 col-lg-7 col-md-8">
            <h2 className="mb-0">
              Do you want to know more or just have a question? write to us.
            </h2>
          </div>
          <div className="col-md-4 col-lg-5 col-xl-6 py-3 py-md-0 d-md-flex align-items-center justify-content-end">
            <a href="contact.html" className="btn btn-danger btn-lg">
              Contact form
            </a>
          </div>
        </div>
        <div className="row footer-widget-area">
          <div className="col-md-3">
            <div className="py-3">
              <img src="assets/images/logo-white.svg" alt="FOI" />
            </div>
            <p className="font-os font-weight-semibold mb3">Get our mobile app</p>
            <div>
              <button className="btn btn-app-download mr-2">
                <img src="assets/images/ios.svg" alt="App store" />
              </button>
              <button className="btn btn-app-download">
                <img src="assets/images/android.svg" alt="play store" />
              </button>
            </div>
          </div>
          <div className="col-md-3 mt-3 mt-md-0">
            <nav>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Account
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    My tasks
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Edit profile
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Activity
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-3 mt-3 mt-md-0">
            <nav>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Careers{" "}
                    <span className="badge badge-pill badge-secondary ml-3">
                      Hiring
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Shop with us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-3 mt-3 mt-md-0">
            <p>
              © foi. 2020{" "}
              <a
                href="https://www.bootstrapdash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-reset"
              >
                BootstrapDash
              </a>
              .
            </p>
            <p>All rights reserved.</p>
            <nav className="social-menu">
              <a href="#!">
                <img src="assets/images/facebook.svg" alt="facebook" />
              </a>
              <a href="#!">
                <img src="assets/images/instagram.svg" alt="instagram" />
              </a>
              <a href="#!">
                <img src="assets/images/twitter.svg" alt="twitter" />
              </a>
              <a href="#!">
                <img src="assets/images/youtube.svg" alt="youtube" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  </>
  </div>
  )
}

export default Login