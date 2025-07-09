import React from "react";
import {
  House,
  User,
  Briefcase,
  ChartBar,
  ListDashes,
  AddressBook,
  FileText,
} from "phosphor-react";

import { FaSquareGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaNode, FaGitAlt, FaNpm, FaDocker } from "react-icons/fa";
import {
  SiPython,
  SiTailwindcss,
  SiDjango,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { MdHtml, MdCss } from "react-icons/md";
import { IoLogoReact } from "react-icons/io5";

const NAV_LINKS = [
  {
    id: 1,
    href: "#home",
    name: "Home",
    icon: React.createElement(House, { size: 24 }),
  },
  {
    id: 2,
    href: "#about",
    name: "About",
    icon: React.createElement(User, { size: 24 }),
  },
  {
    id: 3,
    href: "#skills",
    name: "Skills",
    icon: React.createElement(ChartBar, { size: 24 }),
  },
  {
    id: 4,
    href: "#experience",
    name: "Experience",
    icon: React.createElement(Briefcase, { size: 24 }),
  },
  {
    id: 5,
    href: "#projects",
    name: "Projects",
    icon: React.createElement(ListDashes, { size: 24 }),
  },
  {
    id: 6,
    href: "#contact",
    name: "Contact",
    icon: React.createElement(AddressBook, { size: 24 }),
  },
  {
    id: 7,
    href: "#resume",
    name: "Resume",
    icon: React.createElement(FileText, { size: 24 }),
  },
];
export default NAV_LINKS;

export const Find_Me_Icons = [
  {
    id: 8,
    href: "#",
    name: "github",
    icon: React.createElement(FaSquareGithub, { size: 24 }),
  },
  {
    id: 9,
    href: "#",
    name: "linked-in",
    icon: React.createElement(CiLinkedin, { size: 24 }),
  },
  {
    id: 10,
    href: "#",
    name: "instagram",
    icon: React.createElement(FaInstagram, { size: 24 }),
  },
];

//skill Section Icons

export const skills = [
  { id: 1, name: "Python", icon: React.createElement(SiPython, { size: 60 }) },
  {
    id: 2,
    name: "JavaScript",
    icon: React.createElement(IoLogoJavascript, { size: 60 }),
  },
  { id: 3, name: "HTML5", icon: React.createElement(MdHtml, { size: 60 }) },
  { id: 4, name: "CSS3", icon: React.createElement(MdCss, { size: 60 }) },
  {
    id: 5,
    name: "TailwindCSS",
    icon: React.createElement(SiTailwindcss, { size: 60 }),
  },
  {
    id: 6,
    name: "React.js",
    icon: React.createElement(IoLogoReact, { size: 60 }),
  },
  { id: 7, name: "Node.js", icon: React.createElement(FaNode, { size: 60 }) },
  { id: 8, name: "Django", icon: React.createElement(SiDjango, { size: 60 }) },
  { id: 9, name: "MySQL", icon: React.createElement(SiMysql, { size: 60 }) },
  {
    id: 10,
    name: "MongoDB",
    icon: React.createElement(SiMongodb, { size: 60 }),
  },
  { id: 11, name: "Git", icon: React.createElement(FaGitAlt, { size: 60 }) },
  { id: 12, name: "NPM", icon: React.createElement(FaNpm, { size: 60 }) },
  {
    id: 13,
    name: "Manual Testing",
    icon: React.createElement(SiPython, { size: 60 }),
  },
  { id: 14, name: "Docker", icon: React.createElement(FaDocker, { size: 60 }) },
  // { id: 15, name: "", icon: "docker-icon.png" },
  // { id: 16, name: "", icon: "testing-icon.png" },
];

export const Tools = [
  { id: 1, name: "Python", icon: React.createElement(SiPython, { size: 60 }) },
  {
    id: 2,
    name: "JavaScript",
    icon: React.createElement(IoLogoJavascript, { size: 60 }),
  },
  { id: 3, name: "HTML5", icon: React.createElement(MdHtml, { size: 60 }) },
  { id: 4, name: "CSS3", icon: React.createElement(MdCss, { size: 60 }) },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: React.createElement(SiTailwindcss, { size: 60 }),
  },
];

export const projects = [
  {
    id: 1,
    name: "Project 1",
    description:
      "This is a project description lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "#",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    name: "Project 2",
    description:
      "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
    image: "#",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    name: "Project 3",
    description: "This is a project description",
    image: "#",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    name: "Project 4",
    description: "This is a project description",
    image: "#",
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    name: "Project 5",
    description: "This is a project description",
    image: "#",
    github: "#",
    demo: "#",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    job: "Security & Defense Projects",
    date: "2021-2023",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Back-End Developer",
    job: "Car Manufacture",
    date: "2023-2024",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
