"use client"; // This indicates that the component uses client-side rendering
import React, { useEffect } from "react";
import Image from 'next/image';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const AboutUs = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div id="about" className="bg-gray-50">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2" data-aos="fade-right" delay="70"> {/* Added data-aos attribute */}
          <h1 className="text-4xl font-bold mb-2 mb-4">
            Time to Plan.
            <br />
            Your Time to Invest.
          </h1>
          <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
            At Alchem Bills, we empower Gen Z to level up their investing game and master financial management with dope resources and tools. We’re all about giving young people the 411 they need to make smart moves because we know that having a solid grip on finance is key to building a secure future.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:pl-8" data-aos="fade-left"> {/* Added data-aos attribute */}
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