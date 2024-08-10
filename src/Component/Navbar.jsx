import React from 'react';
import "./Components.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">Coding</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#"><Link to="/" className="text-decoration-none text-reset">Home</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" href="#"><Link to="/about" className="text-decoration-none text-reset">About</Link></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Features
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Tech</a></li>
                  <li><a className="dropdown-item" href="#">Non-Tech</a></li>
                  <li><a className="dropdown-item" href="#">Business</a></li>
                  <li><a className="dropdown-item" href="#">Schools</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-disabled="true" href="#"><Link to="/contact" className="text-decoration-none text-reset">Contact</Link></a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
            <div className="mx-2 gap d-flex gap-2">
              <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
              <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#signupModal">Signup</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="loginModalLabel">Login to Coding Blog</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container my-2 d-flex flex-column justify-content-center align-items-center">
                <div className="col-12">
                  <label htmlFor="loginEmail" className="form-label">Email</label>
                  <input type="email" className="form-control" id="loginEmail" placeholder="Enter Your Email" />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="col-12">
                  <br />
                  <label htmlFor="loginPassword" className="form-label">Password</label>
                  <input type="password" className="form-control" id="loginPassword" placeholder="Enter Your Password" />
                  <small id="passwordHelp" className="form-text text-muted">We'll never share your password with anyone else.</small>
                </div>
                <br />
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="loginCheck" />
                    <label className="form-check-label" htmlFor="loginCheck">
                      Check me out
                    </label>
                  </div>
                  <br />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="signupModalLabel">Create a Coding Blog Account</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container my-2 d-flex flex-column justify-content-center align-items-center">
                <div className="col-12">
                  <label htmlFor="signupName" className="form-label">Name</label>
                  <input type="text" className="form-control" id="signupName" placeholder="Enter Your Name" />
                </div>
                <div className="col-12">
                  <br />
                  <label htmlFor="signupPhone" className="form-label">Phone Number</label>
                  <input type="number" className="form-control" id="signupPhone" placeholder="Enter Your Mobile Number" />
                </div>
                <div className="col-12">
                  <br />
                  <label htmlFor="signupEmail" className="form-label">Email</label>
                  <input type="email" className="form-control" id="signupEmail" placeholder="Enter Your Email" />
                </div>
                <div className="col-12">
                  <br />
                  <label htmlFor="signupPassword" className="form-label">Password</label>
                  <input type="password" className="form-control" id="signupPassword" placeholder="Enter Your Password" />
                </div>
                <div className="col-12">
                  <br />
                  <label htmlFor="signupConfirmPassword" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="signupConfirmPassword" placeholder="Enter Your Confirm Password" />
                </div>
                <br />
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="signupCheck" />
                    <label className="form-check-label" htmlFor="signupCheck">
                      Check me out
                    </label>
                  </div>
                  <br />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">Create Account</button>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
