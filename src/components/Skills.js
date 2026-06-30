import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scissors, PenTool, Image as ImageIcon, Briefcase, Camera, 
  Grid, Monitor, Check
} from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Fashion & Creation",
      icon: <Scissors className="w-5 h-5 text-amber-600" />,
      skills: [
        { name: "Fashion Design", icon: <PenTool className="w-4 h-4 text-orange-600" /> },
        { name: "Pattern Making", icon: <Grid className="w-4 h-4 text-stone-600" /> },
        { name: "Textile & Fabric", icon: <ImageIcon className="w-4 h-4 text-amber-500" /> },
        { name: "Beading", icon: <Check className="w-4 h-4 text-amber-500" /> },
        { name: "Embroidery", icon: <Check className="w-4 h-4 text-indigo-500" /> }
      ]
    },
    {
      title: "Digital & Styling",
      icon: <Monitor className="w-5 h-5 text-amber-600" />,
      skills: [
        { name: "Graphic Design", icon: <Monitor className="w-4 h-4 text-blue-600" /> },
        { name: "Fashion Photography", icon: <Camera className="w-4 h-4 text-slate-700" /> },
        { name: "Styling", icon: <Briefcase className="w-4 h-4 text-amber-400" /> },
        { name: "Make up", icon: <Check className="w-4 h-4 text-orange-400" /> },
        { name: "Production Planning Process", icon: <Grid className="w-4 h-4 text-emerald-600" /> }
      ]
    },
    {
      title: "Software Tools",
      icon: <Monitor className="w-5 h-5 text-amber-600" />,
      skills: [
        { name: "Adobe Photoshop", icon: <Check className="w-4 h-4 text-blue-500" /> },
        { name: "Adobe Illustrator", icon: <Check className="w-4 h-4 text-orange-500" /> },
        { name: "CorelDraw", icon: <Check className="w-4 h-4 text-green-600" /> },
        { name: "Medibang", icon: <Check className="w-4 h-4 text-red-500" /> },
        { name: "Procreate", icon: <Check className="w-4 h-4 text-indigo-500" /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="py-10 max-w-7xl mx-auto" id="skills">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
          Professional Skill Set
        </h2>
        <div className="w-12 h-1 bg-amber-600/30 rounded-full mt-4"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8"
      >
        {categories.map((category, catIdx) => (
          <motion.div 
            key={catIdx}
            variants={cardVariants}
            className="glass-card rounded-2xl p-6 sm:p-8 border border-stone-100 shadow-sm flex flex-col h-full"
          >
            <div className="flex items-center gap-3 border-b border-stone-100 pb-4 mb-6">
              <div className="p-2 bg-amber-50 rounded-xl">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-800 tracking-tight">
                {category.title}
              </h3>
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-stone-50/45 hover:bg-stone-50 rounded-xl border border-stone-100/30 hover:border-amber-100/70 transition-all group duration-300"
                  >
                    <div className="p-1.5 bg-white rounded-lg shadow-sm border border-stone-100 text-stone-400 group-hover:text-amber-600 group-hover:border-amber-100 transition-all duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-stone-700 group-hover:text-stone-900 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
