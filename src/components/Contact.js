/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";
// import { LoadingSquere } from "./LoadingSquere";
import ReactTooltip from "react-tooltip";
import { InputForm } from "./InputForm";

export const Contact = () => {
  const [copycat, setCopyCat] = useState("Click to copy");

  function copied() {
    navigator.clipboard.writeText("choujai.badr@gmail.com");
    setCopyCat("copied!");
    setTimeout(() => {
      setCopyCat("Click to copy");
    }, 2000);
  }

  return (
    <div className="h-screen w-screen">
      <section className="h-full w-full flex items-center flex-col justify-start">
        <div className="w-auto h-auto self-center my-10">
          <div className="bg-white hover:shadow-lg shadow-xl rounded-xl opacity-95 flex justify-center duration-500">
            <p className="p-4 font-semibold text-gray-900 text-center text-xl">
              <code>Contact Me</code>
            </p>
          </div>
        </div>
        <div className="h-4/6 w-4/6 rounded-xl bg-white border flex flex-row">
          <div className="h-full border flex flex-col justify-start p-4 shadow-md hover:shadow-xl duration-500 rounded-xl w-1/2">
            <div className="w-full">
              <div className="bg-white hover:shadow-md shadow-lg border rounded-xl opacity-95 flex justify-center duration-500">
                <p className="p-4 font-semibold text-gray-900 text-xl">
                  <code>Contact Information</code>
                </p>
              </div>
              <div className="w-full h-80 flex flex-col my-2">
                <p className="text-sm ml-4 font-mono text-gray-400 font-light p-2">
                  Fill up the form and i'll get back to you within 24 hours.
                </p>
                <template className="flex justify-center flex-col my-8">
                  <div className="px-4">
                    <div className="mt-4 flex items-center text-gray-900">
                      <lord-icon
                        src="https://cdn.lordicon.com/zzcjjxew.json"
                        trigger="hover"
                        colors="primary:#000000,secondary:#000000"
                        style={{ width: "40px", height: "40px" }}
                      ></lord-icon>
                      <h1 className="px-2 text-gray-900 text-sm capitalize">
                        Tangier, Morocco
                      </h1>
                    </div>
                    <div className="flex items-center mt-4 text-gray-900">
                      <ReactTooltip />
                      <lord-icon
                        src="https://cdn.lordicon.com/tkgyrmwc.json"
                        trigger="hover"
                        style={{ width: "40px", height: "40px" }}
                      ></lord-icon>
                      <a
                        onClick={copied}
                        data-tip={copycat}
                        href="#"
                        className="px-2 text-gray-900 text-sm"
                      >
                        choujai.badr@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="px-4">
                    <div className="flex items-center mt-4 text-gray-900">
                      <lord-icon
                        src="https://cdn.lordicon.com/cnbtojmk.json"
                        trigger="hover"
                        colors="primary:#000000,secondary:#000000"
                        style={{ width: "40px", height: "40px" }}
                      ></lord-icon>
                      <h1 className="px-2 text-gray-900 text-sm">
                        +212 708286926
                      </h1>
                    </div>
                  </div>
                </template>
              </div>
              <div className="border w-full border-gray-900"></div>
              <div className="ml-6 w-full flex items-start justify-center h-24 flex-col">
                <nav className="text-gray-900 flex flex-row justify-evenly space-x-8">
                  <a
                    className="hover:outline-dotted rounded-full duration-300 ease-in-out"
                    href="https://github.com/BadrChoujai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="h-6 w-6" />
                  </a>
                  <a
                    className="hover:outline-dotted rounded-sm duration-300 ease-in-out"
                    href="https://linkedin.com/in/Choujai-badr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                  <a
                    className="hover:outline-dotted rounded-sm duration-300 ease-in-out"
                    href="https://stackoverflow.com/users/18541625/badr-choujai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaStackOverflow className="h-6 w-6" />
                  </a>
                  <a
                    className="hover:outline-dotted rounded-sm duration-300 ease-in-out"
                    href="https://www.instagram.com/badroo_ch/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="h-6 w-6" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div className="justify-end w-3/4 h-full shadow-md hover:shadow-xl duration-500  bg-white">
            <InputForm />
          </div>
        </div>
      </section>
    </div>
  );
};
