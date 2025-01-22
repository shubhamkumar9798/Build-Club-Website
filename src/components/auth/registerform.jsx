// 'use client';

// import React from 'react';

// const RegisterForm = () => {
//   return (
//     <form action="http://localhost:5000/api/auth/register" method="POST" suppressHydrationWarning>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Full Name
//         </label>
//         <input type="text" className="form-control" id="name" name="fullName" placeholder="Enter your full name" />
//       </div>
//         <div className="mb-3">
//             <label htmlFor="id" className="form-label">
//               Build Club IITM ID
//             </label>
//             <input type="text" className="form-control" id="id" name="bcid" placeholder="Enter your Build Club IITM ID" />
//             <button
//   onClick={() => window.open("http://121.242.232.216:3000/registration/", "_blank", "noopener noreferrer")}
//   className="text-blue-500 text-sm mt-2 block underline bg-transparent border-none cursor-pointer"
// >
//   Don’t have an ID? Generate Now
// </button>


//         </div>

//         <div className="mb-3">
//         <label htmlFor="number" className="form-label">
//           Register Number
//         </label>
//         <input type="number" className="form-control" id="number" name="regno" placeholder="Enter your Register Number" />
//       </div>
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
//         <input type="password" className="form-control" id="password" name="password" placeholder="Create a password" />
//       </div>
//       <button type="submit" className="btn btn-primary w-100 mt-3">Register</button>
//     </form>
//   );
// };

// export default RegisterForm;

// "use client";

// import React from "react";

// const RegisterForm = () => {
//   const handleGenerateID = () => {
//     window.open(
//       "http://link/registration/",
//       "_blank",
//       "noopener noreferrer"
//     );
//   };

//   return (
//     <form action="http://localhost:5000/api/auth/register" method="POST">
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Full Name
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="name"
//           name="fullName"
//           placeholder="Enter your full name"
//           required
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="id" className="form-label">
//           Build Club IITM ID
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="id"
//           name="bcid"
//           placeholder="Enter your Build Club IITM ID"
//           required
//         />
//         <button
//           type="button"
//           onClick={() => window.open("http://121.242.232.216:3000/registration/", "_blank", "noopener noreferrer")}
//           className="text-blue-500 text-sm mt-2 block underline bg-transparent border-none cursor-pointer"
//         >
//           Don’t have an ID? Generate Now
//         </button>
//       </div>
//       <div className="mb-3">
//         <label htmlFor="number" className="form-label">
//           Register Number
//         </label>
//         <input
//           type="number"
//           className="form-control"
//           id="number"
//           name="regno"
//           placeholder="Enter your Register Number"
//           required
//         />
//       </div>
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
//           placeholder="Create a password"
//           required
//         />
//       </div>
//       <button type="submit" className="btn btn-primary w-100 mt-3">
//         Register
//       </button>
//     </form>
//   );
// };

// export default RegisterForm;

'use client';

import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    bcid: '',
    regno: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Registration successful!');
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during registration.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="id" className="form-label">
          Build Club IITM ID
        </label>
        <input
          type="text"
          className="form-control"
          id="id"
          name="bcid"
          value={formData.bcid}
          onChange={handleChange}
          placeholder="Enter your Build Club IITM ID"
          required
        />
      </div>
      <button
          type="button"
          onClick={() => window.open("http://121.242.232.216:3000/registration/", "_blank", "noopener noreferrer")}
          className="text-blue-500 text-sm mt-2 block underline bg-transparent border-none cursor-pointer"
        >
          Don’t have an ID? Generate Now
        </button>
      <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Register Number
        </label>
        <input
          type="number"
          className="form-control"
          id="number"
          name="regno"
          value={formData.regno}
          onChange={handleChange}
          placeholder="Enter your Register Number"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
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
          value={formData.password}
          onChange={handleChange}
          placeholder="Create a password"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100 mt-3">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
