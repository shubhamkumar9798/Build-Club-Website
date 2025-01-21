import React from 'react';
import ForgotPasswordForm from '@/components/auth/forgotpassform';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';  
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <div>

<Card className="text-center mb-4 mx-auto" style={{ maxWidth: '120px' }}>
        <CardContent className="p-2">
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
      
      <h2 className="text-center mb-4">Forgot Password</h2>
      <ForgotPasswordForm />
      <div className="text-center mt-4">
        <p>
          Remembered your password? <a href="/auth/login" className="link-primary">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
