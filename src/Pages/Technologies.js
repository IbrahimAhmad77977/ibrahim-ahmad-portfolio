import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    rails,
    nodejs,
    express,
    php,
    python,
    mysql,
    postgresql,
    supabase,
    sql,
    sveltekit,
    jquery,
    ts,
    gitkraken,
    aws,
    redis,
    daisyui,
    newrelic,
    jira,
    notion,
    vercel
  } = techStackDetails;
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
      
      {/* <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
        <img src={redux} title="Redux" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={bootstrap} title="Bootstrap" alt="" />
        <img src={sass} title="SASS" alt="" />
      </section> */}

      {/* TODO: hovering should give me a better label! Use some library */}

      <section>
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Backend
        </h2>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 mb-6">
        <div>
          <img src={rails} title="Ruby on Rails" alt="" />
        </div>

        <div>
          <img src={nodejs} title="Node.js" alt="" />
        </div>

        <div>
          <img src={express} title="Express" alt="" />
        </div>

        <div>
          <img src={php} title="PHP" alt="" />
        </div>

        <div>
          <img src={python} title="Python" alt="" />
        </div>

        <div>
          <img src={mysql} title="MySQL" alt="" />
        </div>

        <div>
          <img src={postgresql} title="PostgreSQL" alt="" />
        </div>

        <div>
          <img src={supabase} title="Supabase" alt="" />
        </div>

        <div>
          <img src={sql} title="SQL" alt="" />
        </div>
        
      </section>
      
      <section>
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Frontend
        </h2>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 mb-6">
        <div>
          <img src={react} title="React.js" alt="" />
        </div>

        <div>
          <img src={sveltekit} title="SvelteKit" alt="" />
        </div>

        <div>
          <img src={jquery} title="jQuery" alt="" />
        </div>

        <div>
          <img src={html} title="HTML" alt="" />
        </div>

        <div>
          <img src={css} title="CSS" alt="" />
        </div>

        <div>
          <img src={sass} title="SASS" alt="" />
        </div>

      </section>

      <section>
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Utility and Version Control
        </h2>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 mb-6">
        <div>
          <img src={js} title="JavaScript" alt="" />
        </div>

        <div>
          <img src={ts} title="TypeScript" alt="" />
        </div>

        <div>
          <img src={tailwind} title="Tailwind" alt="" />
        </div>

        <div>
          <img src={bootstrap} title="Bootstrap" alt="" />
        </div>

        <div>
          <img src={git} title="Git" alt="" />
        </div>

        <div>
          <img src={github} title="GitHub" alt="" />
        </div>

        <div>
          <img src={gitkraken} title="Git Kraken" alt="" />
        </div>
      </section>

      <section>
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Others
        </h2>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 mb-6">
        <div>
          <img src={aws} title="AWS" alt="" />
        </div>

        <div>
          <img src={vercel} title="Vercel" alt="" />
        </div>

        <div>
          <img src={redis} title="Redis" alt="" />
        </div>

        <div>
          <img src={daisyui} title="Daisy UI" alt="" />
        </div>

        <div>
          <img src={newrelic} title="New Relic" alt="" />
        </div>

        <div>
          <img src={jira} title="Jira" alt="" />
        </div>

        <div>
          <img src={notion} title="Notion" alt="" />
        </div>
        
      </section>

      {/* <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section> */}
    </main>
  );
}

export default Technologies;
