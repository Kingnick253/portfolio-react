import React, { useState } from "react";
export const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  // function submitAndGo(event) {
  //     handleInputChange(event);
  // }

  return (
    <div
      className="p-5 shadow-xl flex justify-center "
      style={{ minHeight: "25vh" }}
      id="contact"
    >
      <form
        className="bg-gray-900 rounded-lg"
        name="contact"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-xl text-white text-center">Contact Me</h1>
        <label className=" text-white" htmlFor="name">
          Name
        </label>
        <div className=" text-black field col-12 col-md-10 mb-3 p-3">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            required="true"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <label className="text-white " htmlFor="email">
          Email
        </label>
        <div className="   text-black field col-12 col-md-10 mb-3 p-3">
          <input
            id="Email"
            type="text"
            name="Email"
            placeholder="Leave your email please"
            required="true"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <label className="text-white " htmlFor="message">
          Message
        </label>
        <div className=" text-black field col-12 col-md-10 mb-3 p-3">
          <textarea
            id="message"
            type="textarea"
            rows="5"
            name="message"
            placeholder="Please leave me a message :)"
            required="true"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className="font-bold rounded-lg text-white hover:bg-slate-600 flex justify-center">
          Submit
        </button>
      </form>
    </div>
  );
};
