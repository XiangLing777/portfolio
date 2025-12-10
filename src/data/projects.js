// src/data/projects.js
export const projects = [
  {
    id: 1,
    title: 'Sustainable Living',
    description: 'Design an Electronic Direct Mail (EDM) to create awareness on one of the Six key pillars for the SG Green Plan 2030.',
    category: 'Design',
    technologies: ['Adobe Illustrator'],
    link: '#',
    featured: false,
    year: '2024',
    imageUrl: '/images/projects/project1.jpg',
    // 可选的扩展字段
    objectives: [
      'Create awareness about sustainable living',
      'Design engaging visual content',
      'Target specific audience demographics'
    ],
    challenges: [
      'Balancing informative content with visual appeal',
      'Ensuring cross-platform compatibility'
    ],
    duration: '1 week',
    role: 'Individual work'
  },
  {
    id: 2,
    title: '5 characters',
    description: '5 different variation characters.',
    category: 'Design',
    technologies: ['Adobe Illustrator'],
    link: '#',
    featured: true,
    year: '2024',
    imageUrl: '/images/projects/project2.jpg',
    objectives: [
      'Create 5 distinct character personalities with visual storytelling',
      'Master Adobe Illustrator tools for vector illustration',
      'Develop cohesive color palettes for each character',
      'Explore different illustration styles within a single series',
      'Build a portfolio piece showcasing character design skills',
    ],
    challenges: [
      'Maintaining visual consistency while creating diversity',
      'Balancing detail with clean vector aesthetics',
      'Developing unique silhouettes for each character',
      'Creating expressive faces and poses',
      'Managing complex color harmony across 5 designs'
    ],
    duration: '1 week',
    role: 'Individual work'
  },
  {
    id: 3,
    title: 'Hot Pot',
    description: 'A website that allows you to view different hot pot ingredients and add to your favorite.',
    category: 'Website Design',
    technologies: ['HTML', 'Bootstrap', 'JavaScript','CSS'],
    link: '#',
    featured: true,
    year: '2024',
    imageUrl: '/images/projects/project3.jpg',
    objectives: [
      'Create an interactive hot pot ingredient browsing platform',
      'Implement user-friendly ingredient selection and favoriting system',
      'Design responsive interface suitable for mobile devices',
      'Provide visually appealing ingredient display with images'
    ],
    challenges: [
      'Organizing diverse ingredient categories effectively',
      'Implementing smooth user interactions for favoriting',
      'Ensuring mobile-first responsive design',
      'Managing ingredient data display and user preferences'
    ],
    duration: '1 week',
    role: 'Individual work'
    
  },
  {
    id: 4,
    title: 'Escape room',
    description: 'VR Escape Room in a moonlit classical Chinese garden.',
    category: 'Branding',
    technologies: ['Unity'],
    link: '#',
    featured: false,
    year: '2025',
    imageUrl: '/images/projects/project4.jpg',
    objectives: [
      'Design an immersive VR experience in a Chinese garden setting',
      'Create atmospheric moonlit environment with traditional Chinese elements',
      'Develop engaging puzzle mechanics for escape room gameplay',
      'Implement smooth VR interactions and navigation'
    ],
    challenges: [
      'Balancing visual quality with VR performance optimization',
    'Creating authentic Chinese garden atmosphere and details',
    'Designing intuitive puzzles suitable for VR interaction',
    'Managing user comfort and motion in VR environment'
    ],
    duration: '4 weeks',
    role: 'Individual work'
  },
];

// 项目分类
export const categories = ['All', 'UI/UX Design', 'Web Development', 'Mobile Design', 'Branding'];