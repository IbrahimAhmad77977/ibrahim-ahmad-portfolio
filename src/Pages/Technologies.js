import React from "react";
import { techStackDetails } from "../Details";
import { Tooltip } from 'react-tooltip'

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
        <div className={iconContainerStyle}>
          <img src={rails} alt="" data-tooltip-id="rails-tooltip" data-tooltip-place="bottom" data-tooltip-content="Ruby on Rails" />
          <Tooltip id="rails-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={nodejs} alt="" data-tooltip-id="nodejs-tooltip" data-tooltip-place="bottom" data-tooltip-content="Node.js" />
          <Tooltip id="nodejs-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={express} alt="" data-tooltip-id="express-tooltip" data-tooltip-place="bottom" data-tooltip-content="Express.js" />
          <Tooltip id="express-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={php} alt="" data-tooltip-id="php-tooltip" data-tooltip-place="bottom" data-tooltip-content="Core PHP" />
          <Tooltip id="php-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={python} alt="" data-tooltip-id="python-tooltip" data-tooltip-place="bottom" data-tooltip-content="Python" />
          <Tooltip id="python-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={mysql} alt="" data-tooltip-id="mysql-tooltip" data-tooltip-place="bottom" data-tooltip-content="MySQL" />
          <Tooltip id="mysql-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={postgresql} alt="" data-tooltip-id="postgresql-tooltip" data-tooltip-place="bottom" data-tooltip-content="PostgreSQL" />
          <Tooltip id="postgresql-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={supabase} alt="" data-tooltip-id="supabase-tooltip" data-tooltip-place="bottom" data-tooltip-content="Supabase" />
          <Tooltip id="supabase-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={sql} alt="" data-tooltip-id="sql-tooltip" data-tooltip-place="bottom" data-tooltip-content="SQL" />
          <Tooltip id="sql-tooltip" />
        </div>
        
      </section>
      
      <section className="mt-16">
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Frontend
        </h2>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 mb-6">
        <div className={iconContainerStyle}>
          <img src={react} alt="" data-tooltip-id="reactjs-tooltip" data-tooltip-place="bottom" data-tooltip-content="React.js" />
          <Tooltip id="reactjs-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={sveltekit} alt="" data-tooltip-id="sveltekit-tooltip" data-tooltip-place="bottom" data-tooltip-content="SvelteKit" />
          <Tooltip id="sveltekit-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={jquery} alt="" data-tooltip-id="jquery-tooltip" data-tooltip-place="bottom" data-tooltip-content="jQuery" />
          <Tooltip id="jquery-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={html} alt="" data-tooltip-id="html-tooltip" data-tooltip-place="bottom" data-tooltip-content="HTML" />
          <Tooltip id="html-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={css} alt="" data-tooltip-id="css-tooltip" data-tooltip-place="bottom" data-tooltip-content="CSS" />
          <Tooltip id="css-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={sass} alt="" data-tooltip-id="sass-tooltip" data-tooltip-place="bottom" data-tooltip-content="SASS" />
          <Tooltip id="sass-tooltip" />
        </div>

      </section>

      <section className="mt-16">
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Utility and Version Control
        </h2>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 mb-6">
        <div className={iconContainerStyle}>
          <img src={js} alt="" data-tooltip-id="javascript-tooltip" data-tooltip-place="bottom" data-tooltip-content="JavaScript" />
          <Tooltip id="javascript-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={ts} alt="" data-tooltip-id="typescript-tooltip" data-tooltip-place="bottom" data-tooltip-content="TypeScript" />
          <Tooltip id="typescript-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={tailwind} alt="" data-tooltip-id="tailwind-tooltip" data-tooltip-place="bottom" data-tooltip-content="Tailwind" />
          <Tooltip id="tailwind-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={bootstrap} alt="" data-tooltip-id="bootstrap-tooltip" data-tooltip-place="bottom" data-tooltip-content="Bootstrap" />
          <Tooltip id="bootstrap-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={git} alt="" data-tooltip-id="git-tooltip" data-tooltip-place="bottom" data-tooltip-content="Git" />
          <Tooltip id="git-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={github} alt="" data-tooltip-id="github-tooltip" data-tooltip-place="bottom" data-tooltip-content="GitHub" />
          <Tooltip id="github-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={gitkraken} alt="" data-tooltip-id="gitkraken-tooltip" data-tooltip-place="bottom" data-tooltip-content="Git Kraken" />
          <Tooltip id="gitkraken-tooltip" />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Others
        </h2>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 mb-6">
        <div className={iconContainerStyle}>
          <img src={aws} alt="" data-tooltip-id="aws-tooltip" data-tooltip-place="bottom" data-tooltip-content="AWS" />
          <Tooltip id="aws-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={vercel} alt="" data-tooltip-id="vercel-tooltip" data-tooltip-place="bottom" data-tooltip-content="Vercel" />
          <Tooltip id="vercel-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={redis} alt="" data-tooltip-id="redis-tooltip" data-tooltip-place="bottom" data-tooltip-content="Redis" />
          <Tooltip id="redis-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={daisyui} alt="" data-tooltip-id="daisyui-tooltip" data-tooltip-place="bottom" data-tooltip-content="Daisy UI" />
          <Tooltip id="daisyui-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={newrelic} alt="" data-tooltip-id="newrelic-tooltip" data-tooltip-place="bottom" data-tooltip-content="New Relic" />
          <Tooltip id="newrelic-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={jira} alt="" data-tooltip-id="jira-tooltip" data-tooltip-place="bottom" data-tooltip-content="Jira" />
          <Tooltip id="jira-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={notion} alt="" data-tooltip-id="notion-tooltip" data-tooltip-place="bottom" data-tooltip-content="Notion" />
          <Tooltip id="notion-tooltip" />
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
