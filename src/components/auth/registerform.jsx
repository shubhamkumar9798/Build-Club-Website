import React from 'react';

const RegisterForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Full Name
        </label>
        <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
      </div>
        <div className="mb-3">
            <label htmlFor="id" className="form-label">
              Build Club IITM ID
            </label>
            <input type="text" className="form-control" id="id" placeholder="Enter your Build Club IITM ID" />
            <button
  onClick={() => window.open("http://121.242.232.216:3000/registration/", "_blank", "noopener noreferrer")}
  className="text-blue-500 text-sm mt-2 block underline bg-transparent border-none cursor-pointer"
>
  Don’t have an ID? Generate Now
</button>

        </div>

        <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Register Number
        </label>
        <input type="number" className="form-control" id="number" placeholder="Enter your Register Number" />
      </div>
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
        <input type="password" className="form-control" id="password" placeholder="Create a password" />
      </div>
      <button type="submit" className="btn btn-primary w-100 mt-3">Register</button>
    </form>
  );
};

export default RegisterForm;
