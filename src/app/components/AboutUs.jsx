"use client"; // This indicates that the component uses client-side rendering
import React from "react";
import Image from 'next/image';
import boyholding from './img/boy-holding.jpg'; // Ensure this path is correct

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-2 mb-4">
            Time to Plan.
            <br />
            Your Time to invest.
          </h1>
          <p className="text-lg text-gray-600">
          At Alchem Bills, we empower Gen Z to master the art of investing and financial management with engaging resources and tools. We are committed to giving young people the information they need to make wise decisions because we think that having a solid understanding of finance is crucial to creating a secure future.


          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:pl-8"> {/* Added padding-left for larger screens */}
        <img 
            alt="Illustration of a globe with hot air balloons floating around it" 
            height="400" 
            src="https://i.postimg.cc/V6Bj5gn2/boy-holding.png" 
            width="600" 
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;