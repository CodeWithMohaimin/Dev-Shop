import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oycxhht",
        "template_8yhe1sj",
        form.current,
        "o0nJDbL0SwXNIoZA_"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="min-h-60 flex justify-center items-center bg-gray-900">
      <form
        className="flex flex-col max-w-xl mx-auto bg-gray-700 p-10 w-full rounded-xl"
        ref={form}
        onSubmit={sendEmail}
      >
        <label className="p-1 text-gray-200 text-lg">Name</label>
        <input
          placeholder="Type your Name"
          className="border-none p-2 outline-none mb-4 rounded-md"
          type="text"
          name="user_name"
        />
        <label className="p-1 text-gray-200 text-lg">Email</label>
        <input
          placeholder="Type your Email"
          className="border-none p-2 outline-none mb-4 rounded-md"
          type="email"
          name="user_email"
        />
        <label className="p-1 text-gray-200 text-lg">Message</label>
        <textarea
          className="border-none p-2 outline-none mb-4 min-h-20 rounded-md"
          placeholder="Say, What you want"
          name="message"
        />
        <input
          className="border-none cursor-pointer bg-teal-400 p-2 mt-4 hover:bg-teal-500 rounded-full"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};
export default Contact;
