// Enter all your detials in this file

// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import C from "./assets/techstack/c.png";
import CPP from "./assets/techstack/cpp.png";
import SQLite from "./assets/techstack/sqlite.png";


import supabase from "./assets/techstack/supabase.png"

import sveltekit from "./assets/techstack/sveltekit.png"

import ts from "./assets/techstack/ts.png"

import notion from "./assets/techstack/notion.png"
import vercel from "./assets/techstack/vercel.svg"

// Porject Images

import ChatApp from "./assets/projects/chat-app.png"
import ChessApp from "./assets/projects/chess-app.webp"
import DeltaTestApp from "./assets/projects/delta-test-app.png"


// Education images
import helsinkiLogo from "./assets/education/helsinki-logo.png"
import fastUniversityLogo from "./assets/education/fast-university-logo.png"
import havardUniversityLogo from "./assets/education/harvard-university-logo.png"
import lahoreSchoolOfLearningLogo from "./assets/education/lahore-school-of-learning-logo.png"

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
    Logo: helsinkiLogo,
    Contributions: [
      "Learned about Fundamentals of Web Apps",
      "Currently learning about the fundamentals of React, such as state and hooks",
    ]
  },
  {
    Position: "Computer Science Tutoring",
    Company: "FAST University",
    Location: "Online",
    Type: "Online",
    Duration: "April 2025 - Current",
    Link: "https://www.nu.edu.pk/",
    Logo: fastUniversityLogo,
    Contributions: [
      "Learned programming fundamentals, object-oriented programming and currently learning about databases (following the syllabus of FAST NUCES",
      "Completed assignments of each module and went over them with a tutor from the FAST University",
    ]
  },
  {
    Position: "Harvard's CS50 Course",
    Company: `Harvard University`,
    Location: "Cambridge, United Kingdom",
    Type: "Online",
    Duration: "Aug 2024 - Dec 2024",
    Link: "https://drive.google.com/file/d/1guENL1y0pUt1qSndHVFrpNGchZjvpFHq/view?usp=drive_link",
    Logo: havardUniversityLogo,
    Contributions: [
      "Studied a vast amount of modules, such as C, Algorithms, Data Structures, Basic Web Development, Cybersecurity",
      "Made a finance website which could track your finances for the final project",
      " Completed assignments for the modules"
    ]
  },
  {
    Position: "O-Level Education",
    Company: `Lahore School of Learning`,
    Location: "Lahore, Pakistan",
    Type: "In-person",
    Duration: "Nov 2013 - Sep 2024",
    Link: "https://lsl.edu.pk/",
    Logo: lahoreSchoolOfLearningLogo,
    Contributions: [
      "Scored 4 A’s and 4 B’s in CAIE O-Level exams (Science Stream)"
    ]
  },
];

export const interests = [
  {
    Title: "Chess Enthusiast",
    Platforms: ["Chess.com", "Lichess.org"],
    Activities: [
      "Play daily correspondence games on Chess.com and Lichess",
      "Analyze completed games to identify strengths and weaknesses",
      "Solve chess puzzles to sharpen tactical vision",
      "Study openings, endgames, and strategic concepts",
      "Participate in collaborative vote chess games"
    ]
  },
  {
    Title: "Fitness & Gym",
    Frequency: "Monday–Friday",
    Activities: [
      "Follow a consistent gym routine focusing on cardio and strength training",
    ]
  },
  {
    Title: "Community Moderator",
    Platforms: ["Among Us Discord", "r/AmongUs Subreddit"],
    Stats: {
      DiscordMembers: "549k+",
      SubredditSubscribers: "594k+"
    },
    Activities: [
      "Moderate discussions and enforce community guidelines",
      "Support and assist community members",
      "Handles reports"
    ]
  }
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  tailwind: tailwind,
  bootstrap: bootstrap,
  git: git,
  github: github,
  supabase: supabase,
  sveltekit: sveltekit,
  ts: ts,
  notion: notion,
  vercel: vercel,
  SQLite: SQLite,
  C: C,
  CPP: CPP
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Chat App",
    image: ChatApp, // Replace with image if available
    description: "A real-time chat application with user authentication and profile management.",
    techstack: "SvelteKit, Supabase",
    previewLink: "https://lnkd.in/geAYDguf",
    githubLink: "https://github.com/IbrahimAhmad77977/ibi-chat",
    contributions: [
      "Implemented realtime chat functionality using Supabase’s web sockets",
      "Implemented authentication using in-built JWT-based supabase mechanism",
      "Implemented user profile details module, allowing them to change information related to their user"
    ]
  },
  {
    title: "Chess App",
    image: ChessApp, // Replace with image if available
    description: "A multiplayer chess platform with move tracking and FEN synchronization.",
    techstack: "SvelteKit, Supabase, Chess.js",
    previewLink: "https://lnkd.in/g2AD-pKm",
    githubLink: "https://github.com/IbrahimAhmad77977/chess-app",
    contributions: [
      "Integrated the chess.js library to build a platform supporting games between authenticated users",
      "Synced the states of different games to Supabase database using FEN notation",
      "Implemented a game-wise moves’ tracking feature"
    ]
  },
  {
    title: "DeltaTest",
    image: DeltaTestApp, // Replace with image if available
    description: "Web app to test and demo mobile apps in the browser.",
    techstack: "Next.js, Supabase",
    previewLink: "https://lookatmyapp-web-vert.vercel.app/",
    githubLink: null,
    contributions: [
      "Built the UI of 10 pages with Tailwind CSS 3.4.1",
      "Carried out refactoring tasks as per the lead developer’s instructions throughout the codebase"
    ]
  }
];

// Enter your Contact Details here
export const contactDetails = {
  email: "ibrahimahmad77977@gmail.com",
  phone: "+92 335 7797796",
};
