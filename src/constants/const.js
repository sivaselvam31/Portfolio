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
import { FaInstagram } from "react-icons/fa";


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

import { SiPython, SiTailwindcss, SiDjango, SiMysql, SiMongodb  } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { MdHtml, MdCss } from "react-icons/md";
import { IoLogoReact } from "react-icons/io5";
import { FaNode, FaGitAlt, FaNpm } from "react-icons/fa";

export const skills = [
  { id: 1, name: "Python", icon: React.createElement(SiPython ,{size:24})},
  { id: 2, name: "JavaScript", icon: React.createElement(IoLogoJavascript ,{size:24})},
  { id: 3, name: "HTML5", icon:React.createElement(MdHtml ,{size:24})},
  { id: 4, name: "CSS3", icon: React.createElement(MdCss ,{size:24})},
  { id: 5, name: "TailwindCSS", icon: React.createElement(SiTailwindcss ,{size:24})},
  { id: 6, name: "React.js", icon: React.createElement(IoLogoReact ,{size:24})},
  { id: 7, name: "Node.js", icon: React.createElement(FaNode ,{size:24})},
  { id: 8, name: "Django", icon: React.createElement(SiDjango ,{size:24})},
  { id: 9, name: "MySQL", icon: React.createElement(SiMysql  ,{size:24})},
  { id: 10, name: "MongoDB", icon: React.createElement(SiMongodb ,{size:24})},
  { id: 11, name: "Git", icon: React.createElement(FaGitAlt ,{size:24})},
  { id: 12, name: "NPM", icon: React.createElement(FaNpm ,{size:24})},
  { id: 13, name: "Manual Testing", icon: React.createElement(SiPython ,{size:24})},
  { id: 14, name: "Docker", icon: React.createElement(FaDocker ,{size:24})},
  // { id: 15, name: "", icon: "docker-icon.png" },
  // { id: 16, name: "", icon: "testing-icon.png" },
];


