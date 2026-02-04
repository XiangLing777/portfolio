// src/pages/About.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  BookOpen, 
  Target, 
  Award, 
  Globe, 
  Coffee, 
  Music,
  GraduationCap,
  Briefcase,
  Calendar,
  Code,
  Palette,
  Layout,
  Smartphone,
  Database,
  GitBranch,
  X
} from 'lucide-react';
import certificate1 from '../assets/certificates/Phython.png';
import certificate2 from '../assets/certificates/SQL.png';
import certificate3 from '../assets/certificates/React.png';
import aboutImage from '../assets/images/me.jpg';

export default function About() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const skills = [
    { name: 'UI/UX Design', icon: Palette, level: 'Intermediate' },
    { name: 'Web Development', icon: Code, level: 'Advanced' },
    { name: 'Figma', icon: Layout, level: 'Advanced' },
    { name: 'React', icon: Code, level: 'Intermediate' },
    { name: 'JavaScript', icon: Code, level: 'Intermediate' },
    { name: 'Responsive Design', icon: Smartphone, level: 'Advanced' },
    { name: 'Unity', icon: GitBranch, level: 'Basic' },
    { name: 'Database Design', icon: Database, level: 'Basic' },
  ];

  const certificates = [
    {
      id: 1,
      title: 'Python (Basic)',
      issuer: 'HackerRank',
      date: 'Issued Oct 2025',
      skills: ['It covers topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes'],
      color: 'from-blue-500 to-blue-600',
      imageUrl: certificate1 // 添加图片路径
    },
    {
      id: 2,
      title: 'SQL (Basic)',
      issuer: 'HackerRank',
      date: 'Issued Nov 2025',
      skills: ['It includes simple queries, relationships, and aggregators.'],
      color: 'from-purple-500 to-purple-600',
      imageUrl: certificate2
    },
    {
      id: 3,
      title: 'React (Basic)',
      issuer: 'HackerRank',
      date: 'Issued Jan 2026',
      skills: ['React (Basic) It covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation.'],
      color: 'from-pink-500 to-red-500',
      imageUrl: certificate3
    }
  ];

  const education = [
    {
      institution: 'Singapore Republic Polytechnic',
      degree: 'Diploma in Digital Design & Development',
      period: '2023 - Present',
      description: 'Focus on web development, UX design, and digital media production.'
    },
    {
      institution: 'Admiralty Secondary School',
      degree: 'O-Level',
      period: '2019 - 2023',
      description: 'Completed Singapore-Cambridge GCE O-Level curriculum.'
    }
  ];

  const interests = [
    { icon: BookOpen, title: 'Read Books', description: 'Read different stories and experience a new world' },
    { icon: Music, title: 'Listen Music', description: 'Listen to music to soothe mood' },
    { icon: Globe, title: 'Travel', description: 'Experience delicious food and beautiful scenery in different places' },
    { icon: Coffee, title: 'Gathering with friends', description: 'Gathering with friends can boost enthusiasm for life.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 证书图片弹窗 */}
      <AnimatePresence>
        {selectedCertificate && (
          <>
            {/* 遮罩层 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCertificate(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* 弹窗内容 */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              >
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedCertificate.title}</h3>
                    <p className="text-primary font-medium">{selectedCertificate.issuer}</p>
                  </div>
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="p-6">
                  <div className="max-h-[50vh] overflow-y-auto rounded-lg mb-6 bg-gray-100">
                    <img 
                      src={selectedCertificate.imageUrl} 
                      alt={selectedCertificate.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedCertificate.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      {selectedCertificate.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-6">
              <User size={16} className="text-primary" />
              <span className="text-sm font-medium text-gray-700">About Me</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Crafting <span className="text-gradient">Digital Experiences</span> <br />
              That Make an Impact
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I am Su XiangLing, a passionate Digital Design & Development student dedicated to creating 
              meaningful digital solutions that blend aesthetics with functionality.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={aboutImage} 
                    alt="About Me"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-sm font-light opacity-90">Digital Designer & Developer</p>
                    <p className="text-2xl font-bold">Based in Singapore</p>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-accent/20 to-pink-500/20 rounded-3xl blur-xl"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h2>
                  <p className="text-gray-600 leading-relaxed">
                    My journey into digital design started with a fascination for how technology 
                    can enhance human experiences. As a student at Singapore Republic Polytechnic, 
                    I've had the opportunity to work on diverse projects that challenge my creative 
                    and technical abilities.
                  </p>
                </div>

                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">2+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">100%</div>
                    <div className="text-sm text-gray-600">Passion</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section - 修改后 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A diverse skill set that allows me to tackle projects from concept to completion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl p-5 shadow-sm transition-all duration-300 border border-gray-100 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-3">
                      <skill.icon className="text-primary" size={20} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{skill.name}</h3>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      skill.level === 'Expert' 
                        ? 'bg-green-100 text-green-800' 
                        : skill.level === 'Advanced' 
                        ? 'bg-blue-100 text-blue-800'
                        : skill.level === 'Intermediate'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {skill.level}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 新增的Certificates Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-4">
              <Award size={16} className="text-primary" />
              <span className="text-sm font-medium text-gray-700">Certifications</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Validating my skills through recognized industry certifications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div 
                  onClick={() => setSelectedCertificate(cert)}
                  className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 border border-gray-200 hover:shadow-xl hover:-translate-y-1 h-full cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                      <Award className="text-gray-600" size={24} />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                      {cert.date}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-medium mb-4 text-sm">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cert.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500 hover:text-gray-700 transition-colors cursor-pointer">
                      Click to view certificate
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Education & <span className="text-gradient">Journey</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <GraduationCap className="text-primary" size={20} />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8"
                  >
                    <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                    <div className="absolute left-2 top-5 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent"></div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{edu.degree}</h4>
                    <p className="text-primary font-medium mb-1 text-sm">{edu.institution}</p>
                    <p className="text-gray-500 text-xs mb-2 flex items-center gap-1">
                      <Calendar size={12} />
                      {edu.period}
                    </p>
                    <p className="text-gray-600 text-sm">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Briefcase className="text-secondary" size={20} />
                Current Focus
              </h3>
              <div className="space-y-4">
                {[
                  'Developing responsive web applications with React',
                  'Creating intuitive user interfaces in Figma',
                  'Learning advanced animation techniques',
                  'Exploring AI integration in design tools',
                  'Building personal design system',
                  'Contributing to open-source projects'
                ].map((focus, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <Target size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{focus}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Beyond <span className="text-gradient">Design</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What inspires me and keeps me creative outside of design and development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl p-5 shadow-sm transition-all duration-300 border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center mb-4">
                    <interest.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{interest.title}</h3>
                  <p className="text-gray-600 text-xs">{interest.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}