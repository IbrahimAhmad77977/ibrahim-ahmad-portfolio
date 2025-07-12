import React from "react";
import Work from "../Components/Work";
import { personalDetails, eduDetails, interests } from "../Details";

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
            {/* Interests Section */}
      <section>
  <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-6">
    Interests
  </h1>
  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
    {React.Children.toArray(
      interests.map(({ Title, Platforms, Stats, Frequency, Activities }) => (
        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-md p-6 transition hover:shadow-lg border dark:border-neutral-800">
          <h2 className="text-xl font-bold text-dark-heading dark:text-light-heading mb-2">
            {Title}
          </h2>

          {Platforms && (
            <p className="text-content text-sm mb-1">
              <span className="font-medium">Platforms:</span> {Platforms.join(", ")}
            </p>
          )}

          {Frequency && (
            <p className="text-content text-sm mb-1">
              <span className="font-medium">Frequency:</span> {Frequency}
            </p>
          )}

          {Stats && (
            <p className="text-content text-sm mb-1">
              <span className="font-medium">Community Size:</span>{" "}
              Discord: {Stats.DiscordMembers}, Subreddit: {Stats.SubredditSubscribers}
            </p>
          )}

          <ul className="list-disc list-inside text-content text-sm mt-3 space-y-1">
            {Activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      ))
    )}
  </div>
</section>


    </main>
  );
}

export default About;
