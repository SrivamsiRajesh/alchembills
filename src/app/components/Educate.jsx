"use client"; // This indicates that the component uses client-side rendering
import React from "react";

const DottedButton = () => {
  return (
    <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      Learn More
    </button>
  );
};

const Educate = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
            Knowledge
            <br className="md:hidden" />
            <span className="text-purple-500">
            {' '}is the key to success
              <br className="md:hidden" />
            </span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl mb-6"> {/* Added margin-bottom */}
            At Alchem Bills, we provide you with the tools and knowledge to navigate the world of finance. Learn how to turn your savings into investments and grow your wealth effectively.
          </p>
          <DottedButton /> {/* Added DottedButton component */}
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 flex justify-center">
          {/* Placeholder for video */}
          <video 
            controls 
            className="rounded-lg shadow-lg w-full" 
            height={400} 
            width={800}
          >
            <source src="https://file.io/oQ0Xd8fNtxIs" type="video/mp4" /> {/* Replace with your video URL */}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Educate;