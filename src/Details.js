// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Abdullah Ahmad",
  tagline: "Changing the web, 1 app at a time",
  img: profile,
  about: `A software engineer and aspiring full-stack developer. Hellbent on focusing and giving the best he can to his clients.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/abdullah-ahmad-70b1bb13b/",
  github: "https://github.com/AbdullahAhmadAAK",
  twitter: "https://stackoverflow.com/users/19407338/abdullah-ahmad",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Software Engineer",
    Company: `Dubizzle Labs`,
    Location: "Lahore, Pakistan",
    Type: "Full Time",
    Duration: "Mar 2024 - May 2024",
  },
  {
    Position: "Associate Software Engineer",
    Company: `Dubizzle Labs`,
    Location: "Lahore, Pakistan",
    Type: "Full Time",
    Duration: "Sep 2023 - Mar 2024",
  },
  {
    Position: "Intern PHP Developer",
    Company: `Suave Solutions`,
    Location: "Lahore, Pakistan",
    Type: "Internship",
    Duration: "June 2023 - Sep 2023",
  },
  {
    Position: "Software Engineering Intern",
    Company: `Smart Technology House`,
    Location: "Lahore, Pakistan",
    Type: "Internship",
    Duration: "Jun 2022 - Aug 2022",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Full Stack Development",
    Company: "University of Helsinki",
    Location: "Online",
    Type: "Online",
    Duration: "Present - Present",
  },
  {
    Position: "Bachelor of Science in Computer Science",
    Company: `Lahore University of Management Sciences`,
    Location: "Lahore, Pakistan",
    Type: "Full Time",
    Duration: "Aug 2019 - June 2023",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Dropella",
    image: projectImage1,
    description: `An app built to faciliate e-commerce specialists by providing them analytical tools.`,
    techstack: "SvelteKit, Svelte, TypeScript, Supabase, Tailwind CSS",
    previewLink: "https://dropella.vercel.app",
    githubLink: "https://github.com/AbdullahAhmadAAK",
  },
  {
    title: "LUMSafar",
    image: projectImage2,
    description: `An app built to faciliate socializing between students of Lahore University of Management Sciences.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Software House Management System",
    image: projectImage3,
    description: `An app built to help a software house manage everything within it, including projects, employees and tasks.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  }
];

// Enter your Contact Details here
export const contactDetails = {
  email: "abdullahaak06@gmail.com",
  phone: "+92 331 4160816",
};
