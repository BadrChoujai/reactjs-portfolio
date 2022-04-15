import { useState } from "react";

export const InputForm = () => {
  const [toggle, setToggle] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setToggle(true);
  }

  function CheckDone() {
    return (
      <lord-icon
        src="https://cdn.lordicon.com/jvihlqtw.json"
        trigger="hover"
        colors="primary:#000000,secondary:#000000"
        style={{ width: "40px", height: "40px" }}
      ></lord-icon>
    );
  }

  return (
    <div className="font-mono font-semibold pt-2">
      <form className="flex justify-center items-center flex-col space-y-6">
        <div className="flex flex-row p-2 space-x-4">
          <div className="form-floating mb-3 xl:w-64">
            <label for="floatingInput" class="text-gray-700">
              First Name
            </label>
            <input
              className="input-form"
              placeholder="First"
              type="text"
              required
            />
          </div>
          <div className="form-floating mb-3 xl:w-64">
            <label for="floatingInput" class="text-gray-700">
              Last Name
            </label>
            <input
              className="input-form"
              placeholder="Last"
              type="text"
              required
            />
          </div>
        </div>
        <div className="flex flex-row p-2  space-x-4">
          <div className="form-floating mb-3 xl:w-64">
            <label for="floatingInput" class="text-gray-700">
              E-mail
            </label>
            <input
              className="input-form"
              placeholder="E-mail"
              type="email"
              required
            />
          </div>
          <div className="form-floating mb-3 xl:w-64">
            <label for="floatingInput" class="text-gray-700">
              Phone
            </label>
            <input
              className="input-form"
              placeholder="Phone Number"
              type="cell"
              required
            />
          </div>
        </div>
        <div className="flex w-full p-4 h-44">
          <div className="form-floating xl:w-full">
            <label for="floatingInput" class="text-gray-700">
              Message
            </label>
            <textarea
              className="input-form h-full p-2"
              placeholder="Your Message..."
              type="text"
              required
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end p-4 pt-0 w-full">
          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            className="w-full shadow-lg hover:shadow flex items-center justify-center rounded-lg text-gray-900 bg-white border border-gray-900 duration-500"
          >
            {toggle ? (
              <CheckDone />
            ) : (
              <lord-icon
                src="https://cdn.lordicon.com/rhvddzym.json"
                trigger="hover"
                colors="primary:#000000,secondary:#000000"
                style={{ width: "50px", height: "50px" }}
              ></lord-icon>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
