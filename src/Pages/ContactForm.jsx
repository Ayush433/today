import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e, { resetForm }) => {
    e.preventDefault();
  };
  console.log(formData);

  return (
    <>
      <Navbar />
      <form
        className="bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-lg font-medium mb-4">Contact Us</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="border border-gray-400 p-2 rounded-lg w-full"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
