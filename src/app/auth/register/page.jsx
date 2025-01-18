import React from 'react';
import RegisterForm from '@/components/auth/registerform';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const Register = () => {
  return (
    

    <div
      className="d-flex flex-column align-items-center min-h-screen justify-content-center"
      style={{

        height: '100vh', // Ensure the div takes up the full viewport height
        padding: '10px', // Adjust padding to avoid overflow
        //boxSizing: 'border-box',
        overflow: 'hidden', // Prevent any possible scroll overflow
      }}
    >
      
      {/* Logo Card */}
      <Card className="text-center mb-4 mx-auto" style={{ maxWidth: '120px' }}>
              <CardContent className="p-2">
                <Image
                  src="/buildclublogo.png"
                  alt="Club Logo"
                  width={150}   // Adjust width to fit the card
                  height={150}  // Adjust height to fit the card
                  style={{ objectFit: 'contain' }}  // Ensure the image fits inside while maintaining aspect ratio
                />
              </CardContent>
            </Card>
      {/* Register Heading */}
      <h2 className="text-center mb-3" style={{ fontSize: '1.2rem' }}>Register</h2>
      
      {/* Register Form */}
      <div style={{ width: '100%', maxWidth: '280px' }}>
        <RegisterForm />
      </div>
      
      {/* Link to Login */}
      <div className="text-center mt-2">
        <p style={{ fontSize: '0.85rem' }}>
          Already have an account? <a href="/auth/login" className="link-primary">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
