import { useState } from "react";

function Work({
  position,
  company,
  location,
  type,
  duration,
  link,
  logo,
  transcript,
  contributions,
  extraImageDetails,
}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <article
      className={`transition-all duration-300 p-4 border-b-2 border-dark-content dark:border-light-content border-opacity-20 dark:border-opacity-20
        rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900
        ${showMore ? "bg-blue-100 dark:bg-blue-900" : ""}
      `}
    >
      {/* Header section */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <img src={logo} alt="logo" className="w-16 h-16 border-2 rounded-full" />
        <div className="flex-1 w-full">
          <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row text-center sm:text-left">
            <h1 className="text-content text-lg sm:text-xl font-semibold">{position}</h1>
            <span className="bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-100 text-xs font-medium px-3 py-1 rounded-2xl mt-2 sm:mt-0">
              {type}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row justify-between mt-2 text-sm text-content">
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => window.open(link, "_blank")}
                className="hover:underline text-blue-700 dark:text-blue-300"
              >
                {company}
              </button>
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                {location}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-0">{duration}</p>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <div className="mt-4 text-center sm:text-right">
        <button
          onClick={() => setShowMore((prev) => !prev)}
          className="text-blue-600 dark:text-blue-300 hover:underline text-sm font-medium"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* Expanded Content */}
      {showMore && (
        <div className="mt-4 sm:ml-20 text-center sm:text-left">
          {contributions?.length > 0 && (
            <>
              <h4 className="underline underline-offset-4 font-semibold mb-2">My Contributions:</h4>
              <ol className="list-decimal list-inside text-sm text-content space-y-1">
                {contributions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
            </>
          )}

          {extraImageDetails && (
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center sm:justify-start items-center sm:items-start">
              <div className="w-52 h-28 rounded-lg overflow-hidden">
                <img src={extraImageDetails.image} alt="extra" className="object-cover w-full h-full" />
              </div>
              <div className="text-sm text-content text-center sm:text-left">
                <h4 className="font-semibold">{extraImageDetails.title}</h4>
                <p>{extraImageDetails.description}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

export default Work;
