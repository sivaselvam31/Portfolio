import React from "react";
import {
  House,
  User,
  Briefcase,
  ChartBar,
  ListDashes,
  AddressBook,
  FileText
} from "phosphor-react";

const NAV_LINKS = [
  {
    id: 1,
    href: "#home",
    name: "Home",
    icon: React.createElement(House, { size: 24 })
  },
  {
    id: 2,
    href: "#about",
    name: "About",
    icon: React.createElement(User, { size: 24 })
  },
  {
    id: 3,
    href: "#skills",
    name: "Skills",
    icon: React.createElement(ChartBar, { size: 24 })
  },
  {
    id: 4,
    href: "#experience",
    name: "Experience",
    icon: React.createElement(Briefcase, { size: 24 })
  },
  {
    id: 5,
    href: "#projects",
    name: "Projects",
    icon: React.createElement(ListDashes, { size: 24 })
  },
  {
    id: 6,
    href: "#contact",
    name: "Contact",
    icon: React.createElement(AddressBook, { size: 24 })
  },
  {
    id: 7,
    href: "#resume",
    name: "Resume",
    icon: React.createElement(FileText, { size: 24 })
  }
];

export default NAV_LINKS;
