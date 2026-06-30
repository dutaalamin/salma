import React from 'react';
import { motion } from 'framer-motion';

import foto1 from '../images/foto1.png';
import foto2 from '../images/foto2.png';
import foto3 from '../images/foto3.png';
import foto4 from '../images/foto4.png';
import foto5 from '../images/foto5.png';
import foto6 from '../images/foto6.png';

const Projects = () => {
  const projects = [
    {
      title: "Art of Central Java",
      category: "Fashion Collection",
      description: "Inspired by street fashion trends and the rising popularity of traditional fabric (kain), blending cultural heritage with coastal Pekalongan batik.",
      image: foto1
    },
    {
      title: "Laras Ayu",
      category: "Modest Wear",
      description: "Meaning 'harmony and beauty', this collection reflects inner grace with delicate embroidery and ketupat mangrove batik patterns.",
      image: foto2
    },
    {
      title: "Ribborn",
      category: "Dresses",
      description: "A fusion of 'ribbon' and 'born', offering princess-inspired dresses with an elegant twist for daily and formal occasions.",
      image: foto3
    },
    {
      title: "Zero Waste Fashion",
      category: "Sustainable Fashion",
      description: "Sustainable fashion project focusing on 0% total waste produced, utilizing creative pattern cutting and fabric use.",
      image: foto4
    },
    {
      title: "Fashion Accessories",
      category: "Accessories",
      description: "Includes creations like a sling bag crafted from denim, combined with floral patterns and Ketupat Mangrove Kutawaru batik motif.",
      image: foto5
    },
    {
      title: "Illustrations & Patterns",
      category: "Digital & Hand Drawing",
      description: "Various fashion illustrations, digital drawings, hand drawings, and digital pattern creations using software and manual skills.",
      image: foto6
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto" id="projects">
      <div className="flex flex-col items-center text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight font-serif italic">
          Portfolio & Projects
        </h2>
        <div className="w-16 h-px bg-stone-400 mt-8"></div>
      </div>

      <div className="px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14 pb-24">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-card overflow-hidden transition-all duration-500 shadow-sm hover:shadow-2xl group flex flex-col h-full bg-white/70 
                ${idx % 3 === 1 ? 'lg:mt-24' : ''} 
                ${idx % 2 === 1 ? 'md:mt-16 lg:mt-0 lg:[&:nth-child(3n+2)]:mt-24' : ''}
              `}
            >
              {/* Image Container */}
              <div className="w-full aspect-[3/4] relative overflow-hidden bg-white/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Content Container */}
              <div className="p-6 relative z-10 flex-1 flex flex-col">
                <span className="text-[10px] uppercase tracking-widest font-bold text-amber-500 mb-2 block">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Projects;
