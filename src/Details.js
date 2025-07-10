// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logos/aak_tech_logo_light.png";
import logo from "./assets/logos/aak_tech_logo_light.png";
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

import rails from "./assets/techstack/rails.png"
import express from "./assets/techstack/express.png"
import nodejs from "./assets/techstack/nodejs.jpg"
import php from "./assets/techstack/php.jpg"
import python from "./assets/techstack/python.jpg"
import mysql from "./assets/techstack/mysql.png"
import postgresql from "./assets/techstack/postgresql.png"
import supabase from "./assets/techstack/supabase.png"
import sql from "./assets/techstack/sql.jpg"

import sveltekit from "./assets/techstack/sveltekit.png"
import jquery from "./assets/techstack/jquery.svg"

import ts from "./assets/techstack/ts.png"
import gitkraken from "./assets/techstack/gitkraken.png"

import aws from "./assets/techstack/aws.png"
import redis from "./assets/techstack/redis.png"
import daisyui from "./assets/techstack/daisyui.png"
import stripe from "./assets/techstack/stripe.png"
import newrelic from "./assets/techstack/newrelic.png"
import jira from "./assets/techstack/jira.png"
import notion from "./assets/techstack/notion.png"
import vercel from "./assets/techstack/vercel.svg"

// Porject Images
import projectImage3 from "./assets/projects/project3.jpg";


import dropellaProjectImage from "./assets/projects/dropellaImage.jpg"
import lumsafarProjectImage from "./assets/projects/lumsafarImage.png"
import a5bcProjectImage from "./assets/projects/a5bcImage.png"
import hyndburnPantryProjectImage from "./assets/projects/hyndburnPantryImage.png"
import innerLahoreProjectImage from "./assets/projects/innerLahoreImage.png"
import abdulBasitPawarPortfolioImage from "./assets/projects/basitPortfolioImage.png"
// import softwareHouseProjectImage from "./assets/projects/softwareHouseImage"
import highwayRacersProjectImage from "./assets/projects/highwayRacersImage.jpg"
import breakoutsAndSetupsProjectImage from "./assets/projects/breakoutSetupsImage.png"

// Education images
import datacampLogo from "./assets/education/datacamp-logo.png"
import helsinkiLogo from "./assets/education/helsinki-logo.png"
import lumsLogo from "./assets/education/lums-logo.jpg"

// Transcripts
import transcript from "./assets/transcripts/Abdullah Ahmad's Transcript.pdf"

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Ibrahim Ahmad",
  img: profile,
  about: `Software Engineer with a strong foundation in web development. 
          Proficient in many technologies including SvelteKit, Tailwind, and Bootstrap. I'm eager to leverage my skills and embrace new challenges in the world of web development and software engineering.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/ibrahim-ahmad-4036b1322/",
  github: "https://github.com/IbrahimAhmad77977",
  stackoverflow: "https://stackoverflow.com/users/27017180/ibrahim-ahmad",
};

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Helsinki Course",
    Company: "Houston Inc",
    Location: "Online",
    Type: "Online",
    Duration: "June 2025 – Current",
    Link: "https://fullstackopen.com/en/",
    Logo: datacampLogo,
    Contributions: [
      "Learned about Fundamentals of Web Apps",
      "Currently learning about the fundamentals of React, such as state and hooks",
    ]
  },
  {
    Position: "Computer Science Tutoring",
    Company: "University of Helsinki",
    Location: "Online",
    Type: "Online",
    Duration: "April 2025 - Current",
    Logo: helsinkiLogo,
    Contributions: [
      "Learned programming fundamentals, object-oriented programming and currently learning about databases (following the syllabus of FAST NUCES",
      "Completed assignments of each module and went over them with a tutor from the FAST University",
    ]
  },
  {
    Position: "Bachelor of Science in Computer Science",
    Company: `Lahore University of Management Sciences`,
    Location: "Lahore, Pakistan",
    Type: "Full Time",
    Duration: "Aug 2019 - Jun 2023",
    Link: "https://www.linkedin.com/school/lahore-university-of-management-sciences/",
    Logo: lumsLogo,
    Transcript: transcript,
    Contributions: [
      "Led a team of five developers to build an Android-based endless runner game, Highway Racers, as my Final Year Project.",
      "Developed LUMSafar, a university socializing app, during my Software Engineering course.",
      "Completed courses in AI, Machine Learning, and Data Science, delivering projects for each and demonstrating a solid understanding of their concepts.",
      "Participated in the university badminton team for three years, winning two medals in internal tournaments and competing with other universities.",
    ]
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
  rails: rails,
  nodejs: nodejs,
  express: express,
  php: php,
  python: python,
  mysql: mysql,
  postgresql: postgresql,
  supabase: supabase,
  sql: sql,
  sveltekit: sveltekit,
  jquery: jquery,
  ts: ts,
  gitkraken: gitkraken,
  aws: aws,
  redis: redis,
  daisyui: daisyui,
  newrelic: newrelic,
  stripe: stripe,
  jira: jira,
  notion: notion,
  vercel: vercel
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Dropella",
    image: dropellaProjectImage,
    description: `A web app built to faciliate e-commerce specialists by providing them precise analytical tools.`,
    techstack: "SvelteKit, Svelte, TypeScript, JavaScript, Supabase, Stripe, Tailwind CSS",
    previewLink: "https://dropella.vercel.app",
    githubLink: null,
    contributions: [
      'Successfully launched the 1st build of Dropella, delivering a functional app and ensuring resolution of all bugs.',
      'Led and mentored 10 front-end developers, fostering collaboration with designers and back-end developers to deliver efficient and cohesive project development.',
      'Enhanced customer conversion rates by 30% by implementing paid one-day trial periods before subscriptioncommitments in Stripe.',
      'Integrated 25+ products, stores, and ads APIs, ensuring precise real-time analytics and enhancing overall app functionality.',
      "Integrated OpenAI's ChatGPT-3M6 to provide intelligent data insights, where API data was insufficient, leading to a more fulfilling user experience.",
      'Utilized Tailwind and Daisy UI to craft a pixel-perfect, responsive UI, achieving a 95% Figma design fidelity for a user-friendly app interface.',
      'Implemented internal store tracking for sales’ listings and details pages, maintaining data integrity and accuracy per client requirements.'
    ]
  },

  {
    title: "Breakouts and Setups",
    image: breakoutsAndSetupsProjectImage,
    description: `A web app built to guide those interested in stocks, by providing in-depth analysis with real-time market conditions.`,
    techstack: "Node.js, MongoDB, React.js, Firebase, Stripe, Tailwind CSS",
    previewLink: "https://dashboard.breakoutsandsetups.com",
    githubLink: null,
    contributions: [
      'Developed a custom emailing system for admins with Firebase, enabling them to efficiently communicate with premium users, enhancing user engagement.',
      'Enhanced user experience by implementing 8 additional UI sections and a drag-and-drop feature, allowing users to easily add tickers to watchlists, increasing platform interactivity',
      "Implemented customizable timeframe-based layouts, enabling users to dynamically toggle and control the visibility of various data elements for each timeframe"
    ]
  },
  
  {
    title: "LUMSafar",
    image: lumsafarProjectImage,
    description: `A mobile app built to faciliate socializing between students of Lahore University of Management Sciences.`,
    techstack: "React Native, TypeScript, JavaScript, Node.js, MongoDB",
    previewLink: null,
    githubLink: "https://github.com/AhsanSarwar45/LUMSafar",
    contributions: [
      "Developed the backend for the user profile module and related features.",
      "Majorly worked in documenting proposal document, SRS, and SDS.",
      "Conducted usability testing of the app."
    ]
  },

  {
    title: "Inner Lahore Tour Guide",
    image: innerLahoreProjectImage,
    description: `An informatory tour guide web app, built with an interactive map to generate plans for tourists.`,
    techstack: "React.js, Tailwind",
    previewLink: "abdulbasitpawar.com",
    githubLink: null,
    contributions: [
      "Delivered a functional app that suggests randomized, sensible tour plans to tourists.",
      "Ensured an attractive and aesthetic user interface.",
    ]
  },

  {
    title: "Abdul Basit Pawar's Portfolio",
    image: abdulBasitPawarPortfolioImage,
    description: `A portfolio for a Math tutor, offering classes online to an international audience.`,
    techstack: "SvelteKit",
    previewLink: "https://www.abdulbasitpawar.com/",
    githubLink: null,
    contributions: [
      "Collaborated closely with the client to design and develop the website.",
      "Managed deployment and hosting of the website.",
    ]
  },
  
  {
    title: "Hyndburn Pantry Management System",
    image: hyndburnPantryProjectImage,
    description: `An admin panel built to manage customers and employees of the Hyndburn Pantry (U.K.).`,
    techstack: "React.js, Node.js, Express, MongoDB, Tailwind",
    previewLink: "https://app.hyndburnfoodpantry.co.uk",
    githubLink: null,
    contributions: [
      "Integrated reading of customers' RFID cards into the system",
      "Revamped the old app with a new UI.",
      "Developed user management feature and customer reports feature in "
    ]
  },

  {
    title: "Askari 5 Badminton Club",
    image: a5bcProjectImage,
    description: `A passion project and a web app, built to showcase Askari 5 Badminton Club's (Lahore) details.`,
    techstack: "HTML, CSS, JavaScript, SASS",
    previewLink: "https://askari-5-badminton-club.vercel.app/",
    githubLink: "https://github.com/AbdullahAhmadAAK/a5bc-club",
    contributions: [
      "Showcased relevant information for the club in a page, customizing another template.",
      "Made the template responsive and unique so that it would look better for a badminton club's website."
    ]
  },

  {
    title: "Software House Management System",
    image: projectImage3,
    description: `A purely functional web app built to help a software house manage everything within it, including projects, employees and tasks.`,
    techstack: "React.js, Express, Node.js, MySQL",
    previewLink: null,
    githubLink: "https://github.com/raffayatiq/Software-House-Management-System",
    contributions: [
      "Developed frontend and backend for login, privilege levels, creating employee reviews and viewing employees' data.",

    ]
  },

  {
    title: "Highway Racers",
    image: highwayRacersProjectImage,
    description: `An Android-based endless runner game, in which the rider has to avoid obstacles, collect coins and just keep riding until his bike is destroyed by collisions.`,
    techstack: "Unity 3D, C#",
    previewLink: null,
    githubLink: "https://github.com/ammantariq41/p01-highway_racers_2",
    contributions: [
      "Led and managed a team of 5 developers, delegating tasks and ensuring team cohesion.",
      "Developed various game features in it,such as infinite path generation, bike movement and bike aesthetics.",
      "Contributed to the game's UI by creating aesthetic start and end screens.",
      "Wrote and maintained 80%+ of the documentation.",
      "Researched into game development resources - “The Art of Game Design” and a game development YouTube playlist by Mindstorm Studios."
    ]
  }
];

// Enter your Contact Details here
export const contactDetails = {
  email: "ibrahimahmad77977@gmail.com",
  phone: "+92 335 7797796",
};
