import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
} from 'react-icons/fa';


import Work1 from './assets/project-3.jpg'
import Work2 from './assets/project-4.jpg'
import Work3 from './assets/project-1.jpeg';
import Work4 from './assets/project-2.jpg';


export const links = [
  {
    id: 1,
    name: 'Asosiy',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'Haqida',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfel',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Aloqa',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'Ism : ',
    description: 'Mador',
  },

  {
    id: 2,
    title: 'Familiya : ',
    description: 'Turgunboev',
  },

  {
    id: 3,
    title: 'Yosh : ',
    description: 29,
  },

  {
    id: 4,
    title: 'Millati : ',
    description: "O'zbek",
  },
  {
    id: 5,
    title: 'Manzil : ',
    description: 'Andijon viloyati Marhmat tumani',
  },

  {
    id: 6,
    title: 'Telefon : ',
    description: '+998 90 149 20 40',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'mador19931219@gmail.com',
  },

  {
    id: 8,
    title: 'telegram : ',
    description: '@web_dev_mador',
  },

  {
    id: 10,
    title: 'Til : ',
    description: "O'zbek, Rus",
  },
];

export const stats = [
  {
    id: 1,
    no: '6 oy',
    title: 'Tajriba',
  },

  {
    id: 2,
    no: '2',
    title: "Tugallangan <br /> Loyihalar",
  },
];
export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '95',
  },
  {
    id: 3,
    title: 'Css',
    percentage: '80',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '70',
  },

  {
    id: 4,
    title: 'React',
    percentage: '45',
  },
];
export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - Hozirgi',
    title: "Informatika va Axborot texnologiyalari o'qituvchisi <span> 31-maktab </span>",
    desc: "Maktabda dars berishdan tashqari veb dasturlash bilan shug'ullanaman",
  },
  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022-2023',
    title: 'Frontend <span> Digital City </span>',
    desc: "Hozirda Digital City o'quv markazida tajribali mentorlardan bilim va tajriba o'rganyabman",
  },
  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2012-2016',
    title: "Amaliy matematika va informatika yo'nalishi <span> Farg'ona davlat unversiteti </span>",
    desc: "O'qishdan tashqari Delphi dasturlash tilini o'rganganman",
  },
  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    title: "Onlayn ta'lim",
    desc: 'Google, w3schoolsrus.github.io, youtube, sammi.ac-- platformalari',
  },
];
export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Login Page - React Js',
    app :"https://login-page-virid-eight.vercel.app/"
  },

  {
    id: 2,
    img: Work2,
    title: 'Video - useRef',
    app :"https://video-use-ref.vercel.app/"

  },
  {
    id: 3,
    img: Work3,
    title: 'Marvel films',
    app :"https://marvel-peach.vercel.app/"

  },

  {
    id: 4,
    img: Work4,
    title: 'Creative UI Deasigner - React Js',
    app :"https://ui-designer-virid.vercel.app/"
  },
];
