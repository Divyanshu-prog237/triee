import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div><>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Ludiflex | Login &amp; Registration</title>
    <div className="wrapper">
      <nav className="nav">
        <div className="nav-logo">
          <p>LOGO .</p>
        </div>
        <div className="nav-menu" id="navMenu">
          <ul>
            <li>
              <Link href="" className="link active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="link">
                Contact
              </Link>
            </li>
            <li>
              <a href="#" className="link">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="link">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-button">
          <button className="btn white-btn" id="loginBtn" onclick="login()">
            Sign In
          </button>
          <button className="btn" id="registerBtn" onclick="register()">
            Sign Up
          </button>
        </div>
      </nav>
      
    </div>
  </>
  </div>
  )
}

export default Navbar
