"use client"; // This indicates that the component uses client-side rendering
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { FiArrowRight } from "react-icons/fi";

const Card = ({ title, description, color, extraClass }) => {
  return (
    <motion.div
      className={`flex items-center justify-center p-6 border-2 border-black ${color} h-72 w-80 ${extraClass} group`} // Increased width of boxes to w-80
      whileHover={{ scale: 1.05 }} // Spring animation on hover
      transition={{ type: "spring", stiffness: 300 }} // Spring transition properties
    >
      <div className="relative"> {/* Added relative positioning for arrow */}
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="mt-2 text-sm">{description}</p> {/* Updated to use description */}
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-2">Features</h1> {/* Increased size for section title */}
      <p className="mb-6 text-center text-lg text-gray-700"> {/* Increased size for description and adjusted margin */}
        Discover the key features that empower you to take control of your financial future.
      </p>
      <div className="grid grid-cols-2 gap-8"> {/* Increased gap between columns */}
        {/* Cards with titles and descriptions */}
        <Card 
          title="DYNAMIC" 
          color="bg-green-300" 
          description="Stock Market Analysis: Gain insights into market trends and make informed investment decisions. Stay updated with real-time data and expert analysis." 
        />
        <Card 
          title="DATA DRIVEN" 
          color="bg-blue-300" 
          extraClass="-mt-4" 
          description="Portfolio Tracking: Monitor your investments and optimize your portfolio performance. Use our tools to analyze your asset allocation and risk." 
        />
        <Card 
          title="DUTIFUL" 
          color="bg-red-300" 
          description="Educate Yourself: Access resources to enhance your financial literacy and skills. Explore courses, articles, and interactive content tailored for you." 
        />
        <Card 
          title="DEMURE" 
          color="bg-yellow-300" 
          extraClass="-mt-4" 
          description="Economic Books: Explore essential readings to understand economic principles and theories. Discover both classic texts and contemporary analyses." 
        />
      </div>
    </div>
  );
};

export default Features;