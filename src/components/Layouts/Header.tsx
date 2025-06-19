"use client";
import React from "react";
import { motion, useScroll } from "motion/react"


const Header = () => {
  const { scrollY } = useScroll();

  const [axisY, setAxisY] = React.useState(0);

  React.useEffect(() => {
    const unsubscribe = scrollY.onChange((value) => {
      setAxisY(value);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ 
        opacity: axisY > 50 ? 1 : 0, 
        y: axisY > 50 ? 0 : -50 }}
      className="hidden md:block sticky top-5 z-50 backdrop-blur-md bg-white/30 border border-white/40 outline-1 outline-white/20 rounded-full mx-auto px-6 md:px-10 py-4 max-w-[90%] md:max-w-4xl lg:max-w-7xl"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">
          Workami
        </h1>

        <nav className="flex items-center gap-6">
          <ul className="flex gap-4 md:gap-6 text-sm md:text-base font-medium text-gray-700">
            <li className="hover:text-black transition-colors duration-200 cursor-pointer">Home</li>
            <li className="hover:text-black transition-colors duration-200 cursor-pointer">About</li>
            <li className="hover:text-black transition-colors duration-200 cursor-pointer">Contact</li>
          </ul>

          <button className="bg-black hover:bg-gray-900 text-white font-semibold rounded-full px-5 py-2 transition-colors duration-300">
            Get Started
          </button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
