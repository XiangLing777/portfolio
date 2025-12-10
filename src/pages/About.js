// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  BookOpen, 
  Target, 
  Award, 
  Globe, 
  Heart, 
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
  GitBranch
} from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'UI/UX Design', icon: Palette, level: 'Advanced' },
    { name: 'Web Development', icon: Code, level: 'Intermediate' },
    { name: 'Figma', icon: Layout, level: 'Advanced' },
    { name: 'React', icon: Code, level: 'Intermediate' },
    { name: 'JavaScript', icon: Code, level: 'Intermediate' },
    { name: 'Responsive Design', icon: Smartphone, level: 'Advanced' },
    { name: 'Unity', icon: GitBranch, level: 'Intermediate' },
    { name: 'Database Design', icon: Database, level: 'Basic' },
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
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
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
                    <div className="text-3xl font-bold text-primary mb-2">10+</div>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A diverse skill set that allows me to tackle projects from concept to completion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <skill.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{skill.name}</h3>
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

      {/* Education & Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Education & <span className="text-gradient">Journey</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <GraduationCap className="text-primary" />
                Education
              </h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-10"
                  >
                    <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                    <div className="absolute left-2.5 top-6 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent"></div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                    <p className="text-primary font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-500 text-sm mb-3 flex items-center gap-2">
                      <Calendar size={14} />
                      {edu.period}
                    </p>
                    <p className="text-gray-600">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Briefcase className="text-secondary" />
                Current Focus
              </h3>
              <div className="space-y-6">
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
                    <Target size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{focus}</span>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Beyond <span className="text-gradient">Design</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What inspires me and keeps me creative outside of design and development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <interest.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{interest.title}</h3>
                  <p className="text-gray-600 text-sm">{interest.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}