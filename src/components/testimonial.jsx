'use client';
import React from "react";

const testimonials = [
  {
    text: "It was overall a very fun and informative workshop and yes I will definitely recommend it to others.",
    name: "Heera",
    branch: "CSE",
  },
  {
    text: "Actually I would rate a full [five] stars for the effort it takes to teach students something new and yes I would recommend this workshop to others.",
    name: "Viswesh",
    branch: "EEE",
  },
  {
    text: "It was [a] great experience, I probably learnt more in this workshop than the entirety of 1st semester.",
    name: "Vivian",
    branch: "EEE",
  },
];

const TestimonialCard = () => (
    <div className="flex flex-wrap justify-center gap-8">
      <div className="max-w-xs bg-white shadow-lg rounded-lg p-6">
        <p className="italic text-gray-700">
          “It was overall a very fun and informative workshop and yes I will definitely recommend it to others.”
        </p>
        <p className="font-bold text-blue-800 mt-4">- Heera, CSE</p>
      </div>
      <div className="max-w-xs bg-white shadow-lg rounded-lg p-6">
        <p className="italic text-gray-700">
          “Actually I would rate a full [five] stars for the effort it takes to teach students something new and yes I would recommend this workshop to others.”
        </p>
        <p className="font-bold text-blue-800 mt-4">- Viswesh, EEE</p>
      </div>
      <div className="max-w-xs bg-white shadow-lg rounded-lg p-6">
        <p className="italic text-gray-700">
          “It was [a] great experience, I probably learnt more in this workshop than the entirety of 1st semester.”
        </p>
        <p className="font-bold text-blue-800 mt-4">- Vivian, EEE</p>
      </div>
    </div>
  );
  export default TestimonialCard;
  
