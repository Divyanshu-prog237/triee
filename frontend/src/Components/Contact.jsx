import React from 'react'

const Contact = () => {
  return (
    <div><>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <title>FOI App Landing Page</title>
    <link
      rel="stylesheet"
      href="assets/vendors/fontawesome-free/css/all.min.css"
    />
    <link rel="stylesheet" href="assets/css/style.css" />
    <header className="foi-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light foi-navbar">
          <a className="navbar-brand" href="index.html">
            <img src="assets/images/logo.svg" alt="FOI" />
          </a>
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
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="features.html">
                  Features
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="pagesMenu"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <div className="dropdown-menu" aria-labelledby="pagesMenu">
                  <a className="dropdown-item" href="blog.html">
                    Blog
                  </a>
                  <a className="dropdown-item" href="login.html">
                    Login
                  </a>
                  <a className="dropdown-item" href="register.html">
                    Register
                  </a>
                  <a className="dropdown-item" href="faq.html">
                    FAQ
                  </a>
                  <a className="dropdown-item" href="404.html">
                    404
                  </a>
                  <a className="dropdown-item" href="careers.html">
                    Careers
                  </a>
                  <a className="dropdown-item" href="blog-single.html">
                    Single blog
                  </a>
                  <a className="dropdown-item" href="privacy-policy.html">
                    Privacy policy
                  </a>
                </div>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="contact.html">
                  contact <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav mt-2 mt-lg-0">
              <li className="nav-item mr-2 mb-3 mb-lg-0">
                <a className="btn btn-secondary" href="register.html">
                  Sign up
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-secondary" href="login.html">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <main>
      <div className="container">
        <section className="page-header">
          <h2>Tell us about yourself</h2>
          <h5>
            Whether you have questions or you would just like to say hello,
            contact us.
          </h5>
        </section>
        <section className="contact-content">
          <div className="contact-widget media">
            <img src="assets/images/icon-4.png" alt="monitor" width="50px" />
            <div className="media-body">
              <h6 className="widget-title">Production Office</h6>
              <p className="widget-content">hello@youriste.com</p>
            </div>
          </div>
          <div className="contact-widget media">
            <img src="assets/images/icon-5.png" alt="book" width="40px" />
            <div className="media-body">
              <h6 className="widget-title">Administration Office</h6>
              <p className="widget-content">hello@youriste.com</p>
            </div>
          </div>
        </section>
        <section className="contact-form-wrapper">
          <form action="index.html">
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="name">
                  YOUR NAME <sup>*</sup>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name *"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="email">
                  YOUR EMAIL ADDRESS <sup>*</sup>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="feeney.matteo@schmeler.com"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="subject">
                  SUBJECT <sup>*</sup>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="subject"
                  placeholder="Development"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="phone">
                  YOUR PHONE NUMBER <sup>*</sup>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="635-396-9570"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-12">
                <label htmlFor="message">
                  HOW CAN WE HELP YOU? <sup>*</sup>
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows={7}
                  placeholder="Hi there, I would like to ..."
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary mb-4">
                Submit
              </button>
              <p className="form-footer-text">
                We'll get back to you in 1-2 business days.
              </p>
            </div>
          </form>
        </section>
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

export default Contact