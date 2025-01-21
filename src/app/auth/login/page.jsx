import React from 'react';
import LoginForm from '@/components/auth/loginform';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image'; 
import Link from "next/link"; 

const Login = () => {
  return (
    <div>
      <Card className="text-center mb-3 mx-auto" style={{ maxWidth: '100px' }}>
        <CardContent className="p-1">
        <Link href="/" passHref>
          <Image
            src="/buildclublogo.png"
            alt="Club Logo"
            width={150}   // Adjust width to fit the card
            height={150}  // Adjust height to fit the card
            style={{ objectFit: 'contain' }}  // Ensure the image fits inside while maintaining aspect ratio
          />
        </Link>
        </CardContent>
      </Card>


      <h2 className="text-center mb-4">Login</h2>
      <LoginForm />
      <div className="text-center mt-4">
        <p>
          Don't have an account? <a href="/auth/register" className="link-primary">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
