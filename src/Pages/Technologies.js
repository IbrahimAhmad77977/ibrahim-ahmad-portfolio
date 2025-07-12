import React from "react";
import { techStackDetails } from "../Details";
import { Tooltip } from 'react-tooltip'

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    tailwind,
    bootstrap,
    git,
    github,
    supabase,
    sveltekit,
    ts,
    notion,
    vercel,
    SQLite,
    C,
    CPP,
  } = techStackDetails;

  const iconContainerStyle = "transition duration-200 hover:scale-110"

  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section className="mb-6">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>

      <section>
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Backend
        </h2>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 mb-6">

        <div className={iconContainerStyle}>
          <img src={supabase} alt="Supabase logo" data-tooltip-id="supabase-tooltip" data-tooltip-place="bottom" data-tooltip-content="Supabase" />
          <Tooltip id="supabase-tooltip" />
        </div>

        
      </section>
      
      <section className="mt-16">
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Frontend
        </h2>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 mb-6">
        <div className={iconContainerStyle}>
          <img src={react} alt="React.js logo" data-tooltip-id="reactjs-tooltip" data-tooltip-place="bottom" data-tooltip-content="React.js" />
          <Tooltip id="reactjs-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={sveltekit} alt="SvelteKit" data-tooltip-id="sveltekit-tooltip" data-tooltip-place="bottom" data-tooltip-content="SvelteKit" />
          <Tooltip id="sveltekit-tooltip" />
        </div>

     

        <div className={iconContainerStyle}>
          <img src={html} alt="HTML logo" data-tooltip-id="html-tooltip" data-tooltip-place="bottom" data-tooltip-content="HTML" />
          <Tooltip id="html-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={css} alt="CSS logo" data-tooltip-id="css-tooltip" data-tooltip-place="bottom" data-tooltip-content="CSS" />
          <Tooltip id="css-tooltip" />
        </div>

    

      </section>

      <section className="mt-16">
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Utility and Version Control
        </h2>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 mb-6">
        <div className={iconContainerStyle}>
          <img src={js} alt="JavaScript logo" data-tooltip-id="javascript-tooltip" data-tooltip-place="bottom" data-tooltip-content="JavaScript" />
          <Tooltip id="javascript-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={ts} alt="TypeScript logo" data-tooltip-id="typescript-tooltip" data-tooltip-place="bottom" data-tooltip-content="TypeScript" />
          <Tooltip id="typescript-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={tailwind} alt="Tailwind CSS logo" data-tooltip-id="tailwind-tooltip" data-tooltip-place="bottom" data-tooltip-content="Tailwind" />
          <Tooltip id="tailwind-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={bootstrap} alt="Bootstrap logo" data-tooltip-id="bootstrap-tooltip" data-tooltip-place="bottom" data-tooltip-content="Bootstrap" />
          <Tooltip id="bootstrap-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={git} alt="Git logo" data-tooltip-id="git-tooltip" data-tooltip-place="bottom" data-tooltip-content="Git" />
          <Tooltip id="git-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={github} alt="GitHub logo" data-tooltip-id="github-tooltip" data-tooltip-place="bottom" data-tooltip-content="GitHub" />
          <Tooltip id="github-tooltip" />
        </div>

           <div className={iconContainerStyle}>
          <img src={C} alt="C logo" data-tooltip-id="C-tooltip" data-tooltip-place="bottom" data-tooltip-content="C" />
          <Tooltip id="C-tooltip" />
        </div>

   <div className={iconContainerStyle}>
          <img src={CPP} alt="C++ logo" data-tooltip-id="C++-tooltip" data-tooltip-place="bottom" data-tooltip-content="C++" />
          <Tooltip id="C++-tooltip" />
        </div>

           <div className={iconContainerStyle}>
          <img src={SQLite} alt="SQLite logo" data-tooltip-id="SQLite-tooltip" data-tooltip-place="bottom" data-tooltip-content="SQLite" />
          <Tooltip id="SQLite-tooltip" />
        </div>
      
      </section>

      <section className="mt-16">
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Others
        </h2>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 mb-6">
  

        <div className={iconContainerStyle}>
          <img src={vercel} alt="Vercel logo" data-tooltip-id="vercel-tooltip" data-tooltip-place="bottom" data-tooltip-content="Vercel" />
          <Tooltip id="vercel-tooltip" />
        </div>


   

        <div className={iconContainerStyle}>
          <img src={notion} alt="Notion logo" data-tooltip-id="notion-tooltip" data-tooltip-place="bottom" data-tooltip-content="Notion" />
          <Tooltip id="notion-tooltip" />
        </div>
        
      </section>
    </main>
  );
}

export default Technologies;
