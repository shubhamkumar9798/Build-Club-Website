// import React from 'react';

// const LoginForm = () => {
//   return (
//     <form action="http://localhost:5000/api/auth/login" method="POST">
//       <div className="mb-3">
//         <label htmlFor="email" className="form-label">
//           Email address
//         </label>
//         <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="password" className="form-label">
//           Password
//         </label>
//         <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" />
//       </div>
//       <div className="d-flex justify-content-between align-items-center">
//         <a href="/auth/forgotpassword" className="link-primary">Forgot Password?</a>
//       </div>
//       <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
//     </form>
//   );
// };

// export default LoginForm;

// "use client";
// import React, { useState } from 'react';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission

//     const response = await fetch('http://localhost:5000/api/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const result = await response.json();

//     if (response.ok) {
//       console.log('Login successful:', result);
//       // Handle successful login (e.g., save token, redirect)
//     } else {
//       console.error('Login failed:', result);
//       // Handle error (e.g., show error message)
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="email" className="form-label">
//           Email address
//         </label>
//         <input
//           type="email"
//           className="form-control"
//           id="email"
//           name="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)} // Update email state
//           required
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="password" className="form-label">
//           Password
//         </label>
//         <input
//           type="password"
//           className="form-control"
//           id="password"
//           name="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)} // Update password state
//           required
//         />
//       </div>
//       <div className="d-flex justify-content-between align-items-center">
//         <a href="/auth/forgotpassword" className="link-primary">
//           Forgot Password?
//         </a>
//       </div>
//       <button type="submit" className="btn btn-primary w-100 mt-3">
//         Login
//       </button>
//     </form>
//   );
// };

// export default LoginForm;

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const router = useRouter(); // Initialize the router
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //console.log('Sending data:', formData); // Debug

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Login successful:', result);
        localStorage.setItem('token', result.token);
        router.push('/student/ourTeam');
        // Handle successful login (e.g., save token, redirect)
      } else {
        console.error('Login failed:', result);
        // Handle error (e.g., show error message)
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100 mt-3">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
