import { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import resumePdf from '../assets/resumes/Resume - Ibrahim Ahmad - 2025.pdf';

function Home() {

  const { name, img } = personalDetails;

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePdf; // Replace with the correct path
    link.download = 'Ibrahim Ahmad - Resume - 2025.pdf'; // The name of the file once downloaded
    link.click();
  };

  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const h14 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h14.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width pt-20 md:flex justify-between items-center">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h1
            ref={h11}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            Hi,👋<br></br>My Name is<br></br>
          </h1>
          <h1
            ref={h12}
            className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            {name}
          </h1>
          
        </div>

        <button
          ref={h14}
          onClick={downloadResume}
          className="bg-green-500 hover:bg-green-700 text-white w-fit font-bold mt-4 py-2 px-4 rounded inline-flex items-center"
        >
          <span>Download Resume</span>
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 12l1.41-1.41L11 16.17V4h2v12.17l5.59-5.59L20 12l-8 8-8-8z"
            ></path>
          </svg>
        </button>


      </div>

     <div className="mt-5 md:mt-0 flex justify-center md:justify-end">
  <img
    ref={myimageref}
    className="w-40 sm:w-48 md:w-56 lg:w-64 rounded-full border-2"
    src={img}
    alt="Ibrahim Ahmad"
  />
</div>

    </main>
  );
}

export default Home;
