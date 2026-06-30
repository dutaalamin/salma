import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import salmaPhoto from '../images/foto.jpeg';

const Hero = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#E6DFD3] overflow-hidden" id="home">

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 pt-20">
        
        {/* Left Column — Overlapping Editorial Typography */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-30 lg:-mr-20 lg:mt-16">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <h1 className="font-black leading-[0.9] tracking-tighter text-stone-900 text-[clamp(4rem,9vw,7rem)] font-serif">
              <span className="italic">Salma</span><br />
              <span className="font-light text-stone-700">Halimatus</span><br />
              <span className="font-medium text-stone-800">Sadiyah</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center lg:justify-start"
          >
            <button
              onClick={() => handleScroll('projects')}
              className="group flex items-center gap-4 px-8 py-4 bg-stone-900 text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] transition-all duration-500 ease-out hover:bg-amber-900 hover:pr-6 hover:pl-10 hover:shadow-2xl"
            >
              Explore Collections
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Right Column — Arch Shape Image */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative z-20 mt-8 lg:mt-0">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[85%] max-w-[420px] aspect-[2/3.2] overflow-hidden rounded-t-[1000px] rounded-b-2xl shadow-2xl border-4 border-[#E6DFD3]"
          >
            <img
              src={salmaPhoto}
              alt="Salma Halimatus Sadiyah"
              className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-95 hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
