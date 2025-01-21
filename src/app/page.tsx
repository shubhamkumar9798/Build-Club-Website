'use client';
import React from "react";
import ParticlesBackground from "@/components/ParticlesBackground.jsx";
import AboutUs from "@/components/aboutUs";
import TestimonialCard from "@/components/testimonial";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (

    <div className="bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen overflow-y-scroll">
      {/* First Page Section */}
      <div className="relative h-screen">
        <ParticlesBackground />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
          {/* Logo Section */}
          <div className="mb-8">
            <Link href="/" passHref>
              <Image
                src="/lononobg.png"
                alt="Logo"
                width={300}
                height={80}
                priority
                className="mx-auto"
              />
            </Link>
          </div>

          {/* Tagline */}
          <h1 className="text-4xl font-bold text-blue-800 mb-6">
            Connect · Collaborate · Create
          </h1>

          {/* Buttons */}
          <div className="flex space-x-4">
            <Link href="auth/register" passHref>
              <button className="px-6 py-3 text-blue-600 font-semibold bg-white border border-blue-600 rounded-lg shadow-md hover:bg-blue-100 transition duration-300">
                Register
              </button>
            </Link>
            <Link href="auth/login" passHref>
              <button className="px-6 py-3 text-blue-600 font-semibold bg-white border border-blue-600 rounded-lg shadow-md hover:bg-blue-100 transition duration-300">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="min-h-screen bg-white flex flex-col justify-center items-center px-8 py-16 shadow-inner">
        <AboutUs />
      </div>

	  

      {/* Testimonial Section */}
      <div className="w-full relative flex flex-wrap min-h-screen bg-transparent flex flex-col justify-center items-center px-8 py-16 pl-50">
  			<h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
    			What Students Say
  			</h2>
  		<div className="flex flex-wrap justify-center gap-8 px-4">
    		<TestimonialCard />
			
  		</div>
		  
		</div>

      {/* Footer Section */}
	  
	  	
	  <Footer />
      
    </div>
	
	
  );
}
