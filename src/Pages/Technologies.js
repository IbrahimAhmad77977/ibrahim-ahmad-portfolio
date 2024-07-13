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
    stripe,
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

      <section>
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Backend
        </h2>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 mb-6">
        <div className={iconContainerStyle}>
          <img src={rails} alt="Ruby on Rails logo" data-tooltip-id="rails-tooltip" data-tooltip-place="bottom" data-tooltip-content="Ruby on Rails" />
          <Tooltip id="rails-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={nodejs} alt="Node.js logo" data-tooltip-id="nodejs-tooltip" data-tooltip-place="bottom" data-tooltip-content="Node.js" />
          <Tooltip id="nodejs-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={express} alt="Express.js logo" data-tooltip-id="express-tooltip" data-tooltip-place="bottom" data-tooltip-content="Express.js" />
          <Tooltip id="express-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={php} alt="PHP logo" data-tooltip-id="php-tooltip" data-tooltip-place="bottom" data-tooltip-content="Core PHP" />
          <Tooltip id="php-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={python} alt="Python logo" data-tooltip-id="python-tooltip" data-tooltip-place="bottom" data-tooltip-content="Python" />
          <Tooltip id="python-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={mysql} alt="MySQL logo" data-tooltip-id="mysql-tooltip" data-tooltip-place="bottom" data-tooltip-content="MySQL" />
          <Tooltip id="mysql-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={postgresql} alt="PostgreSQL logo" data-tooltip-id="postgresql-tooltip" data-tooltip-place="bottom" data-tooltip-content="PostgreSQL" />
          <Tooltip id="postgresql-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={supabase} alt="Supabase logo" data-tooltip-id="supabase-tooltip" data-tooltip-place="bottom" data-tooltip-content="Supabase" />
          <Tooltip id="supabase-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={sql} alt="SQL logo" data-tooltip-id="sql-tooltip" data-tooltip-place="bottom" data-tooltip-content="SQL" />
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
          <img src={react} alt="React.js logo" data-tooltip-id="reactjs-tooltip" data-tooltip-place="bottom" data-tooltip-content="React.js" />
          <Tooltip id="reactjs-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={sveltekit} alt="SvelteKit" data-tooltip-id="sveltekit-tooltip" data-tooltip-place="bottom" data-tooltip-content="SvelteKit" />
          <Tooltip id="sveltekit-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={jquery} alt="jQuery logo" data-tooltip-id="jquery-tooltip" data-tooltip-place="bottom" data-tooltip-content="jQuery" />
          <Tooltip id="jquery-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={html} alt="HTML logo" data-tooltip-id="html-tooltip" data-tooltip-place="bottom" data-tooltip-content="HTML" />
          <Tooltip id="html-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={css} alt="CSS logo" data-tooltip-id="css-tooltip" data-tooltip-place="bottom" data-tooltip-content="CSS" />
          <Tooltip id="css-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={sass} alt="SASS logo" data-tooltip-id="sass-tooltip" data-tooltip-place="bottom" data-tooltip-content="SASS" />
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
          <img src={gitkraken} alt="Git Kraken logo" data-tooltip-id="gitkraken-tooltip" data-tooltip-place="bottom" data-tooltip-content="Git Kraken" />
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
          <img src={aws} alt="AWS logo" data-tooltip-id="aws-tooltip" data-tooltip-place="bottom" data-tooltip-content="AWS" />
          <Tooltip id="aws-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={vercel} alt="Vercel logo" data-tooltip-id="vercel-tooltip" data-tooltip-place="bottom" data-tooltip-content="Vercel" />
          <Tooltip id="vercel-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={redis} alt="Redis logo" data-tooltip-id="redis-tooltip" data-tooltip-place="bottom" data-tooltip-content="Redis" />
          <Tooltip id="redis-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={stripe} alt="Stripe logo" data-tooltip-id="stripe-tooltip" data-tooltip-place="bottom" data-tooltip-content="Stripe" />
          <Tooltip id="stripe-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={daisyui} alt="Daisy UI logo" data-tooltip-id="daisyui-tooltip" data-tooltip-place="bottom" data-tooltip-content="Daisy UI" />
          <Tooltip id="daisyui-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={newrelic} alt="New Relic logo" data-tooltip-id="newrelic-tooltip" data-tooltip-place="bottom" data-tooltip-content="New Relic" />
          <Tooltip id="newrelic-tooltip" />
        </div>

        <div className={iconContainerStyle}>
          <img src={jira} alt="Jira logo" data-tooltip-id="jira-tooltip" data-tooltip-place="bottom" data-tooltip-content="Jira" />
          <Tooltip id="jira-tooltip" />
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
