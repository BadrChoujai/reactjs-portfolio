import { FiGithub } from "react-icons/fi";

export const Footer = () => {
  return (
    <div>
      <footer className="flex flex-wrap justify-between opacity-90 bg-gray-900 p-2 border-t-2 flex-row text-white w-full">
        <div>
          <p className="bg-gray-900">Copyright © 2022</p>
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
    </div>
  );
};
