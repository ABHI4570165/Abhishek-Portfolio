// src/data/skills.jsx

// 1. Import VscVscode from the correct package
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt, FaGithub, FaDatabase } from "react-icons/fa";
import { SiBootstrap, SiTailwindcss, SiMysql, SiPostman, SiVercel, SiEclipseide } from "react-icons/si"; // Removed SiVisualstudiocode from here
import { BiLogoSpringBoot } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc"; // Added this line

export const skillsData = [
  {
    id: 1,
    title: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
      { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
      { name: "React.js", icon: <FaReact color="#61DAFB" /> },
      { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
    ]
  },
  {
    id: 2,
    title: "Backend",
    items: [
      { name: "Java", icon: <FaJava color="#007396" /> },
      { name: "Core Java", icon: <FaJava color="#E76F00" /> },
      { name: "J2EE", icon: <BiLogoSpringBoot color="#6DB33F" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "JDBC", icon: <FaDatabase color="#f29111" /> },
      { name: "SQL", icon: <FaDatabase color="#00758F" /> }
    ]
  },
  {
    id: 3,
    title: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt color="#F05032" /> },
      { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
      { name: "VS Code", icon: <VscVscode color="#007ACC" /> }, // Updated here
      { name: "Vercel", icon: <SiVercel color="#ffffff" /> },
      { name: "Eclipse", icon: <SiEclipseide color="#2C2255" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> }
    ]
  }
];