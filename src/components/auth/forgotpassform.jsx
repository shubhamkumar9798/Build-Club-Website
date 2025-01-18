import React from 'react';

const ForgotPasswordForm = () => {
  return (
    <form>
      

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Enter your email address
        </label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
      </div>
      <button type="submit" className="btn btn-primary w-100 mt-3">Send Reset Link</button>
    </form>
  );
};

export default ForgotPasswordForm;
