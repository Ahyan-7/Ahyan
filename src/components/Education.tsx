import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Education: React.FC = () => {
  const { education, certifications, skills } = resumeData;

  return (
    <section id="education" className="relative py-24 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Education & Skills
          </h2>
          <div className="w-24 h-1 bg-indigo-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-indigo-400" />
              Academic Journey
            </h3>
            <div className="relative border-l border-white/10 ml-3 space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8"
                >
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                    <h4 className="text-xl font-bold text-white mb-1">{edu.institution}</h4>
                    <p className="text-indigo-300 font-medium mb-2">{edu.degree}</p>
                    <p className="text-slate-400 text-sm">{edu.dates}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills & Certifications */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-indigo-400" />
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills[0].items.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-4 py-2 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-full text-sm font-medium hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-indigo-400" />
                Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                    <span className="text-slate-300 text-sm leading-snug">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
