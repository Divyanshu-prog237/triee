import React from 'react'

const About = () => {
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
              <li className="nav-item active">
                <a className="nav-link" href="about.html">
                  About <span className="sr-only">(current)</span>
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
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  contact
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
    <main className="page-about">
      <div className="container">
        <section className="page-header">
          <h1>About</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb foi-breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About
              </li>
            </ol>
          </nav>
        </section>
        <section className="foi-page-section pt-0">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0 pr-lg-0">
              <h2 className="about-section-one-title">
                We provides support and resources to startup{" "}
                <span className="font-weight-normal">
                  {" "}
                  and early-stage companies.
                </span>
              </h2>
              <div className="about-section-one-content">
                <p>
                  At Business Incubator, we're your launchpad for success. Our
                  team is dedicated to nurturing the next generation of innovators
                  and entrepreneurs. With a suite of support services, including
                  mentorship, funding opportunities, and shared workspace, we
                  empower startups to thrive. Join us on this exciting journey as
                  we help turn your business dreams into reality.
                </p>
                <p>
                  Incubators often provide affordable office space or co-working
                  areas for startups.
                </p>
                <p className="mb-0">
                  {" "}
                  Incubators can connect startups with potential investors,
                  customers, and partners.
                </p>
              </div>
            </div>
            <div className="col-md-6 pl-lg-0 d-flex align-items-center align-items-lg-end">
              <img
                src="assets/images/about.png"
                alt="about"
                className="img-fluid"
                width="448px"
              />
            </div>
          </div>
        </section>
        <section className="foi-page-section">
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <img
                src="assets/images/bus_name.png"
                alt="about 2"
                className="w-100 img-fluid pr-md-5"
                width="437px"
              />
            </div>
            <div className="col-md-6">
              <h2 className="about-section-two-title">
                We create the best{" "}
                <span className="font-weight-normal">
                  solution for you and your business.
                </span>
              </h2>
              <div className="about-section-two-content">
                <p>
                  {" "}
                  We offers mentorship, business plan development assistance,
                  marketing and accounting advice, and other business support
                  services,{" "}
                </p>
                <p>
                  {" "}
                  Joining a business incubator can be a great way to get your
                  business off the ground. Incubators can provide you with the
                  resources and support you need to succeed.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="foi-page-section mb-5">
          <h5 className="text-center font-os mb-0">The amazing team</h5>
          <h2 className="team-section-title">Our Creative Minds</h2>
          <div className="row">
            <div className="col-md-3 mb-5">
              <div className="team-member-card">
                <img
                  src="assets/images/user/user_1.png"
                  alt="Cardarion Hart"
                  className="team-member-avatar"
                />
                <h6 className="mb-0">Cardarion Hart</h6>
                <p className="team-member-designation">CEO</p>
              </div>
            </div>
            <div className="col-md-3 mb-5">
              <div className="team-member-card">
                <img
                  src="assets/images/user/user_2.png"
                  alt="Gauthier Drewitt"
                  className="team-member-avatar"
                />
                <h6 className="mb-0">Gauthier Drewitt</h6>
                <p className="team-member-designation">HR Manager</p>
              </div>
            </div>
            <div className="col-md-3 mb-5">
              <div className="team-member-card">
                <img
                  src="assets/images/user/user_3.png"
                  alt="Labeeba Al Amer"
                  className="team-member-avatar"
                />
                <h6 className="mb-0">Labeeba Al Amer</h6>
                <p className="team-member-designation">Finance Manager</p>
              </div>
            </div>
            <div className="col-md-3 mb-5">
              <div className="team-member-card">
                <img
                  src="assets/images/user/user_4.png"
                  alt="Onyama Limba"
                  className="team-member-avatar"
                />
                <h6 className="mb-0">Onyama Limba</h6>
                <p className="team-member-designation">Software Engineer</p>
              </div>
            </div>
            <div className="col-md-3 mb-5">
              <div className="team-member-card">
                <img
                  src="assets/images/user/user_5.png"
                  alt="Athar Malakooti"
                  className="team-member-avatar"
                />
                <h6 className="mb-0">Athar Malakooti</h6>
                <p className="team-member-designation">CEO</p>
              </div>
            </div>
            <div className="col-md-3 mb-5">
              <div className="team-member-card">
                <img
                  src="assets/images/user/user_6.png"
                  alt="Kung Jiyeon"
                  className="team-member-avatar"
                />
                <h6 className="mb-0">Kung Jiyeon</h6>
                <p className="team-member-designation">HR Manager</p>
              </div>
            </div>
            <div className="col-md-3 mb-5">
              <div className="team-member-card">
                <img
                  src="assets/images/user/user_7.png"
                  alt="Mathijn Agter"
                  className="team-member-avatar"
                />
                <h6 className="mb-0">Mathijn Agter</h6>
                <p className="team-member-designation">Finance Manager</p>
              </div>
            </div>
            <div className="col-md-3 mb-5">
              <div className="team-member-card">
                <img
                  src="assets/images/user/user_8.png"
                  alt="Jontray Arnold"
                  className="team-member-avatar"
                />
                <h6 className="mb-0">Jontray Arnold</h6>
                <p className="team-member-designation">Software Engineer</p>
              </div>
            </div>
          </div>
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

export default About