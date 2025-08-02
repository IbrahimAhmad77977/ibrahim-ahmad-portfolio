import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <main className="container mx-auto max-width py-16 px-4">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-10 text-center">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {React.Children.toArray(
            projectDetails.map(
              ({
                title,
                image,
                description,
                techstack,
                previewLink,
                githubLink,
                contributions,
              }) => (
                <div className="flex flex-col h-full">
                  <Project
                    title={title}
                    image={image}
                    description={description}
                    techstack={techstack}
                    previewLink={previewLink}
                    githubLink={githubLink}
                    contributions={contributions}
                  />
                </div>
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
