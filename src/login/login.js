import React from 'react';
import './login.css'; // Make sure to create this CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
    return (
        <div className='bg-image'>
      <div className="d-flex align-items-center justify-content-center vh-100 bg-gradient">
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Login</h2>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Type your username"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Type your password"
              required
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <a href="#" className="text-muted">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-log w-100 mb-3">Login</button>
          <div className="text-center">Or Sign Up bye</div>
          <div className="d-flex justify-content-center mt-3">
            <button type="button" className="btn btn-outline-primary mx-1">
              <i className="fab fa-facebook"></i>
            </button>
            <button type="button" className="btn btn-outline-danger mx-1">
              <i className="fab fa-google"></i>
            </button>
            <button type="button" className="btn btn-outline-info mx-1">
              <i className="fab fa-twitter"></i>
            </button>
          </div>
        </form>
       </div>
      </div>
        </div>
    );
};

export default Login;
