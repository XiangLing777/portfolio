// src/data/projects.js
import project1Img from '../assets/projects/project1.jpg';
import project2Img from '../assets/projects/project2.jpg';
import project3Img from '../assets/projects/project3.jpg';
import project4Img from '../assets/projects/project4.jpg';
import project5Img from '../assets/projects/project5.jpg';
import project6Img from '../assets/projects/project6.jpg';
import project7Img from '../assets/projects/project7.jpg';
//import project8Img from '../assets/projects/project8.jpg';
//import project9Img from '../assets/projects/project9.jpg';
//import project10Img from '../assets/projects/project10.jpg';
// 基础URL路径 - 根据你的项目结构调整
const ATTACHMENTS_BASE_URL = '/attachments';

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
    imageUrl: project1Img,
    objectives: [
      'Create awareness about sustainable living',
      'Design engaging visual content',
      'Target specific audience demographics'
    ],
    challenges: [
      'Balancing informative content with visual appeal',
      'Ensuring cross-platform compatibility'
    ],
    duration: '3 days',
    role: 'Individual work',
    attachments: [
      {
        id: 'att1-1',
        name: 'Sustainable_Living pdf',
        fileName: 'Sustainable_Living.pdf',
        path: `${ATTACHMENTS_BASE_URL}/project1/Sustainable_Living.pdf`,
        type: 'pdf',
        size: '96.6 KB'
      },
    ]
  },
  {
    id: 2,
    title: 'Cheongsam Beauty',
    description: '5 different variation characters.',
    category: 'Design',
    technologies: ['Adobe Illustrator'],
    link: '#',
    featured: true,
    year: '2024',
    imageUrl: project2Img,
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
    duration: '3 days',
    role: 'Individual work',
    attachments: [
      {
        id: 'att2-1',
        name: 'Cheongsam_beauty pdf',
        fileName: 'Cheongsam_beauty.pdf',
        path: `${ATTACHMENTS_BASE_URL}/project2/Cheongsam_beauty.pdf`,
        type: 'pdf',
        size: '95.8 KB'
      },
      {
        id: 'att2-2',
        name: 'Cheongsam_beauty ai',
        fileName: 'Cheongsam_beauty.ai',
        path: `${ATTACHMENTS_BASE_URL}/project2/Cheongsam_beauty.ai`,
        type: 'ai',
        size: '536 KB'
      },
    ]
  },
  {
    id: 3,
    title: 'Hot Pot',
    description: 'A website that allows you to view different hot pot ingredients and add to your favorite.',
    category: 'Web Development',
    technologies: ['HTML', 'Bootstrap', 'JavaScript','CSS'],
    link: '#',
    featured: false,
    year: '2024',
    imageUrl: project3Img,
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
    duration: '2 days',
    role: 'Individual work',
    attachments: [
    ]
  },
  {
    id: 4,
    title: 'Escape room',
    description: 'VR Escape Room in a moonlit classical Chinese garden.',
    category: 'AR/VR',
    technologies: ['Unity'],
    link: '#',
    featured: true,
    year: '2025',
    imageUrl: project4Img,
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
    role: 'Individual work',
    attachments: [
      {
        id: 'att4-1',
        name: 'Game Design Document',
        fileName: 'Game Design Document',
        path: `${ATTACHMENTS_BASE_URL}/project4/Game Design Document.docx`,
        type: 'unitypackage',
        size: '570 KB'
      },
      {
        id: 'att4-2',
        name: 'Gameplay Video',
        fileName: 'Screenrecord.mp4',
        path: `${ATTACHMENTS_BASE_URL}/project4/Screenrecord.mp4`,
        type: 'mp4',
        size: '56.9 MB'
      },
    ]
  },
  {
    id: 5,
    title: 'Schedulite',
    description: 'Task Prioritisation App for Students',
    category: 'Web Development',
    technologies: ['React with React Router','Node.js','JWT','MySQL'],
    link: 'https://ca-2-education-learning-support-j1rn-njsygcjfi.vercel.app',
    featured: true,
    year: '2026',
    imageUrl: project5Img,
    objectives: [
      'Help students prioritise tasks automatically',
      'Generate a structured schedule based on urgency',
      'Improve time management and productivity',
      'Reduce stress caused by decision fatigue'
    ],
    challenges: [
      'Encountered technical issues during development',
    'Resolved through team discussion and external resources',
    'Adopted a divide-and conquer approach with regular check-ins',
    ],
    duration: '3 weeks',
    role: 'Team work: Admin Page',
    attachments: [
      {
        id: 'att5-1',
        name: 'Project Presentation Slide',
        fileName: 'schedulite.pdf',
        path: `${ATTACHMENTS_BASE_URL}/project5/schedulite.pdf`,
        type: 'pdf',
        size: '3.26 MB'
      },
    ]
  },
  {
    id: 6,
    title: 'Energy saver monitor',
    description: 'Eco-friendly home energy tracker app for sustainable Singapore living.',
    category: 'Mobile App Development',
    technologies: ['API Routes','React Native','MySQL','Node.js'],
    link: '#',
    featured: false,
    year: '2026',
    imageUrl: project6Img,
    objectives: [
      'Help users understand and optimize their electricity usage habits',
      'Calculate the energy consumption (kWh) of household appliances',
      'Automatically calculate electricity costs (based on Singapore electricity rates)',
    ],
    challenges: [
      'API definitions require alignment between frontend and backend.',
    'Some members are falling behind schedule.',
    ],
    duration: '3 days',
    role: 'Team work: Server.js, Home.js',
    attachments: [
      {
        id: 'att6-1',
        name: 'Energy saver monitor Demo',
        fileName: 'Energy_saver_monitor.webm',
        path: `${ATTACHMENTS_BASE_URL}/project6/Energy_saver_monitor.webm`,
        type: 'webm',
        size: '66.7 MB'
      },
    ]
  },
  {
    id: 7,
    title: 'Fern & Frond',
    description: 'Eco-friendly fashion discovery with clear sustainable labeling.',
    category: 'UI/UX Design',
    technologies: ['Figma'],
    link: 'https://www.figma.com/design/22hj6BkttjYItDYm4ZeR98/XiangLing-24008149-Fern---Frond-Wireframe?node-id=10-2&t=I0vbdyixqz7J3v8c-1',
    featured: false,
    year: '2025',
    imageUrl: project7Img,
    objectives: [
      'To quickly and easily filter products based on verifiable sustainability criteria ',
      'To see standardized, clear sustainability badges or icons directly on product listings.',
      'To have a seamless and transparent shopping experience that does not require hours of research.',
      'To discover and support new, authentic sustainable brands through the platform itself.'
    ],
    challenges: [
      'Staying fashionable while ensuring usability',
    'Requires an eco-friendly color palette (green tones) but must not be monotonous.',
    ],
    duration: '1 weeks',
    role: 'Individual work',
    attachments: [
      {
        id: 'att7-1',
        name: 'Design.docx',
        fileName: 'Design.docx',
        path: `${ATTACHMENTS_BASE_URL}/project7/Design.docx`,
        type: 'docx',
        size: '529 KB'
      },
    ]
  },
];

// 项目分类
export const categories = ['All', 'UI/UX Design', 'Web Development', 'Design','AR/VR','Mobile App Development'];