import React from 'react'
import { Link } from 'react-router-dom'
import plan from '../assets/planning.gif'
import manage from '../assets/management.mp4'
import launch from '../assets/launch2.gif'
const Services = () => {
  return (
    <div>
      
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
                <Link className="nav-link" to="/Home">
                  Home
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
              <li className="nav-item active dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="pagesMenu"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
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
                  <Link className="dropdown-item" to="/register">
                    Register <span className="sr-only">(current)</span>
                  </Link>
                  <Link className="dropdown-item" href="faq.html">
                    FAQ
                  </Link>
                  <Link className="dropdown-item" href="404.html">
                    404
                  </Link>
                  <Link className="dropdown-item" href="careers.html">
                    Careers
                  </Link>
                  <Link className="dropdown-item" href="blog-single.html">
                    Single blog
                  </Link>
                  <Link className="dropdown-item" href="privacy-policy.html">
                    Privacy Policy
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  contact
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
    <header className='head-img'>

</header>

      <section className='mt-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2 className='text-center pt-3' style={{ fontFamily: 'monospace', fontWeight: 'bold', color: 'maroon' }}>PLANNING</h2>
              <p className='text-center'>Our planning services craft tailored business roadmaps through market research and financial modeling, guiding startups and pivoting businesses for sustainable growth. Partner with us to turn your ideas into a strategically sound plan.</p>
              <div className='text-center'>
                <Link to='/PlanningServices' className='btn btn-outline-danger'>know more</Link>
              </div>
            </div>
            <div className="col-md-5">
              <img src={plan} alt='plan' className='img-fluid ser-img' />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img src={launch} alt='plan' className='img-fluid' />
            </div>
            <div className="col-md-7">
              <h2 className='text-center pt-5' style={{ fontFamily: 'monospace', fontWeight: 'bold', color: 'maroon' }}>LAUNCHING</h2>
              <p className='text-center'>Our launching services propel your business forward, offering expert guidance on locations, marketing, and funding. Partner with us for a seamless and impactful launch, navigating the early stages of your business journey with confidence.</p>
              <div className="text-center">
                <Link to='/LaunchingServices' className='btn btn-outline-danger '>know more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2 className='text-center pt-5' style={{ fontFamily: 'monospace', fontWeight: 'bold', color: 'maroon' }}>MANAGING</h2>
              <p className='text-center'>Our managing services drive ongoing success for your business. From seamless operations to strategic growth planning, we provide comprehensive support. Partner with us for efficient management that ensures your business not only survives but thrives.</p>
              <div className="text-center">
                <Link to='/ManagingServices' className='btn btn-outline-danger'>know more</Link>
              </div>
            </div>
            <div className="col-md-5">
              <video src={manage} alt='plan' className='m-vid' loop autoPlay muted />
            </div>
          </div>
        </div>
        
      </section>
    </div>
    
  )
}

export default Services