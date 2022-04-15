// import { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import { useEffect, useState } from "react";
import img from "../img/home-bg.svg";

export const Home = () => {
  const [showButton, setShowButton] = useState(false);
  const [showBox, setShowBox] = useState("scale-0");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
    setShowBox("scale-100");
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div className="h-screen w-screen scroll-smooth">
      <section
        id="home"
        className="h-4/5 w-full flex justify-center flex-col mt-20"
      >
        <div className="flex flex-row justify-center items-center h-full">
          <div
            className={`${showBox} border-2 h-64 w-1/2 duration-500 hover:border justify-center hover:shadow-2xl shadow-xl opacity-90 bg-white rounded-3xl flex items-center flex-col m-4`}
          >
            <p className="text-4xl font-semibold font-mono">
              Hello There! <br />{" "}
              <p className="typing text-2xl font-lightbold font-mono ml-0 m-4">
                ~ I'm a Full Stack Web Developer.
              </p>
              <div className="flex flex-row space-x-8 text-2xl mt-12">
                <a
                  className="hover:outline-dotted rounded-full duration-300 ease-in-out"
                  href="https://github.com/BadrChoujai"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="hover:outline-dotted rounded-sm duration-300 ease-in-out"
                  href="https://linkedin.com/in/Choujai-badr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="hover:outline-dotted rounded-sm duration-300 ease-in-out"
                  href="https://stackoverflow.com/users/18541625/badr-choujai"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaStackOverflow />
                </a>
              </div>
            </p>
          </div>
          <div className="h-4/5 homePage-curve flex justify-center items-center w-1/2 ">
            <div className="h-full w-full justify-center flex items-end self-center">
              <img className="object-cover rounded-lg" src={img} alt="my-img" />
            </div>
          </div>
        </div>
        <div className="h-auto w-auto flex items-center justify-center p-4">
          <div className="animate-bounce text-lg hover:text-gray-900 w-12 h-12 rounded-full flex justify-center p-4 duration-500">
            <a href="/#about">
              <lord-icon
                src="https://cdn.lordicon.com/xhdhjyqy.json"
                trigger="loop"
                style={{ width: "40px", height: "40px" }}
              ></lord-icon>
            </a>
          </div>
        </div>
      </section>
      <section className="h-auto w-full flex justify-center" id="about">
        <div className="flex flex-col w-full">
          <div className="w-36 self-center my-10">
            <div className="bg-white hover:shadow-2xl shadow-xl rounded-xl opacity-95 flex justify-center duration-500">
              <p className="p-4 font-semibold text-gray-900 text-xl">
                <code>About Me</code>
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="about-card">
              <div className="mb-4 flex-wrap">
                <lord-icon
                  src="https://cdn.lordicon.com/nobciafz.json"
                  trigger="hover"
                  colors="primary:#000000,secondary:#000000"
                  stroke="25"
                  style={{ width: "80px", height: "80px" }}
                ></lord-icon>
              </div>
              <ReactTooltip />
              <p className="text-gray-900 w-3/4 mb-2 text-md font-medium break-words">
                As a software developer i really focus on my goals and gradualy
                reach them, when it comes to developing i enjoy going through
                every part of the journey and make the design come to reality.
              </p>
              <br />
              <p className="text-gray-900 w-3/4 text-md font-medium break-words">
                I'm Learning and seeking knowledge every day, good at
                problem-solving, a Javascript Geek :). Ready to face any
                challenging projects, and developing the software that can
                fulfilll the dreams of both the seller and the customer.
                <pre className="float-right my-10 mr-4">
                  <quote>~ CHOUJAI</quote>
                </pre>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-full w-full flex justify-center" id="experience">
        <div className="flex flex-col w-full mt-2">
          <div className="w-auto self-center my-10">
            <div className="bg-white hover:shadow-2xl shadow-xl rounded-xl opacity-95 flex justify-center duration-500">
              <p className="p-4 font-semibold text-gray-900 text-xl">
                <code>Work Experience</code>
              </p>
            </div>
          </div>
          <div className="w-auto self-center mt-4">
            <div className="bg-white border hover:border-gray-600 shadow-2xl duration-500 hover:shadow-xl rounded-xl opacity-95 flex justify-center">
              <p className="p-8 font-semibold text-gray-900">
                <code>
                  Some of my Work Experiences throughout my journey as a
                  Software Developer.
                </code>
              </p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap h-full space-x-12 justify-center items-center">
            <div className="experience-card">
              <div className="my-2 flex-wrap">
                <lord-icon
                  src="https://cdn.lordicon.com/sygggnra.json"
                  trigger="hover"
                  colors="primary:#000000,secondary:#000000"
                  style={{ width: "80px", height: "80px" }}
                ></lord-icon>
              </div>
              <p className="text-gray-900 text-center w-auto text-md font-medium overflow-scroll">
                I was an intern as a full stack web developer for 3+ months,
                where i've learned and used some new technologies and tools such
                as (Laravel, Nuxt.js,Vue.js...)
              </p>
            </div>
            <div className="experience-card">
              <div className="my-2 flex-wrap">
                <lord-icon
                  src="https://cdn.lordicon.com/etllbcfy.json"
                  trigger="hover"
                  colors="primary:#000000,secondary:#000000"
                  style={{ width: "80px", height: "80px" }}
                ></lord-icon>
              </div>
              <p className="text-gray-900 text-center overflow-scroll w-auto text-md font-medium break-words">
                Built A personal project where i show my skills using both
                Vue.js and Laravel, Called <strong>PROD-ACTIVE </strong>that is
                existing in a repo on my github.
              </p>
            </div>
            <div className="experience-card">
              <div className="my-2 flex-wrap">
                <lord-icon
                  src="https://cdn.lordicon.com/pvbjsfif.json"
                  trigger="hover"
                  colors="primary:#000000,secondary:#000000"
                  style={{ width: "80px", height: "80px" }}
                ></lord-icon>
              </div>
              <p className="text-gray-900 w-auto h-auto text-md text-center font-medium overflow-scroll">
                Started Working as a Full Stack Developer at{" "}
                <a
                  className="font-bold"
                  href="https://hi5group.co.uk/"
                  target="_blanck"
                >
                  @Hi5group
                </a>{" "}
                on September 2021, where i Develop and maintain applications
                using standard development tools and integrate user-facing
                elements developed by a front-end developers with server side
                logic. integrating data from various back-end services and
                databases. responsible for maintaining, expanding, and scaling
                the company's platform.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-wrap justify-between opacity-90 bg-gray-900 p-2 border-t-2 flex-row text-white w-full">
        <div>
          <p className="bg-gray-900">Copyright 2022</p>
        </div>
        <div>
          <a
            className="bg-gray-900 flex items-center flex-row hover:underline decoration-dashed"
            href="https://github.com/BadrChoujai"
            rel="noreferrer"
            target="_blank"
          >
            <FiGithub className="mx-1" /> CHOUJAI
          </a>
        </div>
      </footer>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <lord-icon
            src="https://cdn.lordicon.com/eflfmgmj.json"
            trigger="hover"
            style={{ width: "50px", height: "50px" }}
          ></lord-icon>
        </button>
      )}
    </div>
  );
};
