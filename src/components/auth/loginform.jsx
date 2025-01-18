import React from 'react';

const LoginForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="password" placeholder="Enter your password" />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <a href="/auth/forgotpassword" className="link-primary">Forgot Password?</a>
      </div>
      <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
    </form>
  );
};

export default LoginForm;
