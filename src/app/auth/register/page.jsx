import React from 'react';
import RegisterForm from '@/components/auth/registerform';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from "next/link";

const Register = () => {
  return (
    

    <div
      className="d-flex flex-column align-items-center min-h-screen justify-content-center"
      
    >
      
      {/* Logo Card */}
      <Card className="text-center mb-4 mx-auto" style={{ maxWidth: '120px' }}>
              <CardContent className="p-2">
                <Link href="/" passHref>
                          <Image
                            src="/buildclublogo.png"
                            alt="Club Logo"
                            width={150}   
                            height={150} 
                            style={{ objectFit: 'contain' }}  
                            priority
                          />
                        </Link>
              </CardContent>
            </Card>
      
      <h2 className="text-center mb-3" style={{ fontSize: '1.2rem' }}>Register</h2>
      
      
      <div style={{ width: '100%', maxWidth: '280px' }}>
        <RegisterForm />
      </div>
      
     
      <div className="text-center mt-2">
        <p style={{ fontSize: '0.85rem' }}>
          Already have an account? <a href="/auth/login" className="link-primary">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
