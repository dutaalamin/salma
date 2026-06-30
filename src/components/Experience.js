import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2, MapPin, CheckSquare, Award, Briefcase, Camera } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Fashion Designer Assistant",
      company: "Apique",
      date: "Apr 2026 - May 2026",
      location: "Indonesia",
      icon: <Building2 className="w-4 h-4 text-stone-400 shrink-0" />,
      highlights: [
        "Assisted in fabric assessment and selection.",
        "Sewed buttons and embellishments to enhance garment details.",
        "Compiled and managed an annual order summary.",
        "Conducted final quality checks on garments before shipment.",
        "Packed and prepared orders for out-of-town clients.",
        "Hand-sewed beads and sequins onto kebayas with precision.",
        "Created kebaya patterns for production."
      ]
    },
    {
      role: "Freelance Fashion Designer",
      company: "Self-Employed",
      date: "Jan 2025 - Present",
      location: "Indonesia",
      icon: <Briefcase className="w-4 h-4 text-stone-400 shrink-0" />,
      highlights: [
        "Designed custom clothing and fashion collections tailored to client preferences.",
        "Created detailed sketches and digital illustrations for design concepts.",
        "Selected high-quality fabrics and materials to align with design aesthetics.",
        "Developed garment patterns and oversaw the production process.",
        "Collaborated with clients and manufacturers to ensure design accuracy and quality standards.",
        "Conducted market research and trend analysis to inform design decisions and ensure collections align with current fashion trends."
      ]
    },
    {
      role: "Freelance Fashion Photographer",
      company: "Self-Employed",
      date: "Jan 2025 - Present",
      location: "Indonesia",
      icon: <Camera className="w-4 h-4 text-stone-400 shrink-0" />,
      highlights: [
        "Captured high-quality images for fashion, portraits, and product photography.",
        "Edited and retouched photos using professional software to enhance visual appeal.",
        "Directed photoshoots to achieve the desired artistic vision and branding objectives.",
        "Worked closely with clients to understand their creative needs and deliver tailored visual solutions."
      ]
    },
    {
      role: "Fashion Designer Assistant",
      company: "Leura Kebaya",
      date: "Jul 2023 - Aug 2023",
      location: "Indonesia",
      icon: <Building2 className="w-4 h-4 text-stone-400 shrink-0" />,
      highlights: [
        "Assisted in fabric assessment and selection.",
        "Sewed buttons and embellishments to enhance garment details.",
        "Compiled and managed an annual order summary.",
        "Conducted final quality checks on garments before shipment.",
        "Packed and prepared orders for out-of-town clients.",
        "Hand-sewed beads and sequins onto kebayas with precision.",
        "Created kebaya patterns for production."
      ]
    },
    {
      role: "Owner (Export Import)",
      company: "Suabeleza.id",
      date: "Jun 2021 - May 2022",
      location: "Indonesia",
      icon: <Building2 className="w-4 h-4 text-stone-400 shrink-0" />,
      highlights: [
        "Led product sample development and collection board creation.",
        "Sourced suppliers from both domestic and international markets.",
        "Designed product catalogs and curated mood boards for branding.",
        "Marketed products to local and international customers.",
        "Managed client communications and closed sales deals.",
        "Successfully sold over 500 products while maintaining an excellent reputation."
      ]
    }
  ];

  // Shared date+location badge component
  const MetaBadge = ({ date, location }) => (
    <div className="flex flex-col md:items-end gap-1 text-stone-500 font-semibold text-xs shrink-0 bg-stone-50/80 p-3 rounded-2xl border border-stone-100/50">
      <span className="flex items-center gap-1.5 text-stone-700">
        <Calendar className="w-3.5 h-3.5 text-amber-500 shrink-0" />
        {date}
      </span>
      <span className="flex items-center gap-1.5 mt-1 text-stone-500">
        <MapPin className="w-3.5 h-3.5 shrink-0 text-stone-400" />
        {location}
      </span>
    </div>
  );

  return (
    <section className="py-10 max-w-7xl mx-auto" id="experience">

      {/* ─── WORK EXPERIENCE ─── */}
      <div className="flex flex-col items-center text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight font-serif italic">
          Working Experience
        </h2>
        <div className="w-16 h-px bg-stone-400 mt-8"></div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-stone-100/60 shadow-sm relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-stone-100 pb-5 mb-6">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-[10px] font-bold text-amber-600 uppercase tracking-wider mb-1">
                  Professional Experience
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  {exp.role}
                </h3>
                <h4 className="text-sm sm:text-base font-semibold text-amber-600 flex items-center gap-1.5">
                  {exp.icon}
                  {exp.company}
                </h4>
              </div>
              <MetaBadge date={exp.date} location={exp.location} />
            </div>

            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-widest text-stone-400 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500" />
                Key Contributions &amp; Achievements
              </h5>
              <ul className="space-y-3.5">
                {exp.highlights.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 text-stone-600 font-medium text-sm leading-relaxed"
                  >
                    <div className="p-1 bg-amber-50 rounded-lg text-amber-600 shrink-0 mt-0.5 shadow-sm border border-amber-100/30">
                      <CheckSquare className="w-3.5 h-3.5" />
                    </div>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
