'use client';

import React from 'react';

const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission here
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label htmlFor="name" className="form-label block text-gray-700 font-medium">
          Full Name
        </label>
        <input
          type="text"
          className="form-control block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          id="name"
          placeholder="Enter your full name"
          aria-label="Full Name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="id" className="form-label block text-gray-700 font-medium">
          Build Club IITM ID
        </label>
        <input
          type="text"
          className="form-control block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          id="id"
          placeholder="Enter your Build Club IITM ID"
          aria-label="Build Club IITM ID"
        />
        <span
          onClick={() => window.open("http://121.242.232.216:3000/registration/", "_blank", "noopener noreferrer")}
          role="button"
          className="text-blue-500 text-sm mt-2 block underline cursor-pointer"
        >
          Don’t have an ID? Generate Now
        </span>
      </div>

      <div className="mb-4">
        <label htmlFor="number" className="form-label block text-gray-700 font-medium">
          Register Number
        </label>
        <input
          type="number"
          className="form-control block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          id="number"
          placeholder="Enter your Register Number"
          aria-label="Register Number"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="form-label block text-gray-700 font-medium">
          Email Address
        </label>
        <input
          type="email"
          className="form-control block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          id="email"
          placeholder="Enter your email"
          aria-label="Email Address"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="form-label block text-gray-700 font-medium">
          Password
        </label>
        <input
          type="password"
          className="form-control block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          id="password"
          placeholder="Create a password"
          aria-label="Password"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
