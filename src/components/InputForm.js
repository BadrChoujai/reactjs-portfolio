import { useState } from "react";
import { send } from "@emailjs/browser";
import Swal from "sweetalert2";

export const InputForm = () => {
  const [toggle, setToggle] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const [toSend, setToSend] = useState({
    from_name: "",
    from_subject: "",
    from_phone: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setToggle(true);

    send("service_e5a1xj9", "template_i9af2uf", toSend, "xfIM4tzznZGslM6eL")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setToggle(false);
        Toast.fire({
          icon: "success",
          title: "Your message was sent succesfully!",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setToggle(false);
        Toast.fire({
          icon: "error",
          title: "Your message was not sent!",
        });
      });

    setToSend({
      from_name: "",
      from_subject: "",
      from_phone: "",
      message: "",
      reply_to: "",
    });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  function CheckDone() {
    return (
      <lord-icon
        src="https://cdn.lordicon.com/dpinvufc.json"
        trigger="loop"
        colors="primary:#000000,secondary:#000000"
        style={{ width: "40px", height: "40px" }}
      ></lord-icon>
    );
  }

  return (
    <div className="font-mono font-semibold pt-2">
      <form
        onSubmit={onSubmit}
        className="flex justify-center items-center flex-col space-y-6"
      >
        <div className="flex flex-row p-2 space-x-4">
          <div className="form-floating mb-3 xl:w-64">
            <label for="floatingInput" class="text-gray-700">
              Full Name
            </label>
            <input
              className="input-form"
              placeholder="name"
              value={toSend.from_name}
              onChange={handleChange}
              name="from_name"
              type="text"
              required
            />
          </div>
          <div className="form-floating mb-3 xl:w-64">
            <label for="floatingInput" class="text-gray-700">
              Subject
            </label>
            <input
              className="input-form"
              placeholder="Subject"
              value={toSend.from_subject}
              onChange={handleChange}
              name="from_subject"
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
              name="reply_to"
              placeholder="E-mail"
              value={toSend.reply_to}
              onChange={handleChange}
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
              name="from_phone"
              placeholder="Phone Number"
              value={toSend.from_phone}
              onChange={handleChange}
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
              name="message"
              placeholder="Your Message..."
              value={toSend.message}
              onChange={handleChange}
              type="text"
              required
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end p-4 pt-0 w-full">
          <button
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
