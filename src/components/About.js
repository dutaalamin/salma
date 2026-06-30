import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, FileSpreadsheet, ShieldCheck } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Award className="w-5 h-5 text-amber-600" />,
      title: "Fashion Design",
      description: "Proficient in designing elegant, culturally inspired, and modern fashion wear for various occasions."
    },
    {
      icon: <Briefcase className="w-5 h-5 text-amber-600" />,
      title: "Pattern Making",
      description: "Expert in drafting accurate patterns and turning intricate designs into real-life garments."
    },
    {
      icon: <FileSpreadsheet className="w-5 h-5 text-amber-600" />,
      title: "Graphic Design",
      description: "Skilled in creating digital fashion illustrations and visual materials using Adobe Suite and CorelDraw."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-600" />,
      title: "Production Planning",
      description: "Experienced in overseeing the production process, from sourcing materials to final execution."
    }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="about">

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tight">
          About Me
        </h2>
        <div className="w-14 h-1 bg-gradient-to-r from-amber-300 to-amber-500 rounded-full mt-4"></div>
      </motion.div>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-stone-600 text-base sm:text-lg leading-relaxed font-medium mb-12"
      >
        I am a fresh graduate in Craft, Textile & Fashion from Telkom University with a strong ability to adapt fashion trends, a high sense of responsibility, and excellent communication skills. Proficient in fashion design, pattern making, graphic design. Highly motivated to pursue a career in the fashion industry.
      </motion.p>

      {/* 4-pillar highlights grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col gap-3 p-5 bg-white hover:bg-amber-50/30 rounded-2xl border border-stone-100 hover:border-amber-100 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            <div className="p-2.5 bg-amber-50 rounded-xl self-start">
              {item.icon}
            </div>
            <div className="space-y-1.5">
              <h4 className="text-sm font-bold text-stone-800 tracking-tight leading-snug">
                {item.title}
              </h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default About;
