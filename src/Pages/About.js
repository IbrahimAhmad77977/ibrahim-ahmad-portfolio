import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
      </section>
      <section>
        {/* TODO: GET THIS DURATION TO A VARIABLE TOO */}
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-4">
          Work Experience (1 year 5 months)
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration, Link, Logo, Contributions }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
              link={Link}
              logo={Logo}
              contributions={Contributions}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration, Link, Logo, Transcript, Contributions }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
              link={Link}
              logo={Logo}
              transcript={Transcript}
              contributions={Contributions}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
