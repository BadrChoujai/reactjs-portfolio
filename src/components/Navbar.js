import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const path = useLocation().pathname;
  return (
    <div className="h-auto z-10 w-full bg-gray-900 opacity-90 overflow-hidden flex flex-wrap content-center justify-between border-b shadow-lg p-4">
      <Link
        className="flex items-center relative border border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-gray900"
        to="/"
      >
        <code className="choujai px-6 py-2 btn2 border-2 text-lg font-bold text-white border-white hover:bg-white hover:text-gray-900 duration-300">
          CHOUJAI
        </code>
      </Link>
      <code className="self-center">
        <nav className="flex space-x-6 items-center">
          <Link
            className="px-3 choujai text-md font-bold py-1 border-2 bg-gray900 text-white border-white hover:bg-white hover:text-gray-900 duration-300"
            to="/"
          >
            Home
          </Link>
          {path === "/" ? (
            <a
              className="px-3 choujai text-md font-bold py-1 border-2 bg-gray900 text-white border-white hover:bg-white hover:text-gray-900 duration-300"
              href="#about"
            >
              About
            </a>
          ) : (
            ""
          )}
          <Link
            className="px-3 choujai text-md font-bold py-1 border-2 bg-gray900 text-white border-white hover:bg-white hover:text-gray-900 duration-300"
            to="contact-me"
          >
            Contact Me
          </Link>
        </nav>
      </code>
    </div>
  );
};
