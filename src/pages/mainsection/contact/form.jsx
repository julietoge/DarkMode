import React, { useState } from "react";
import "./form.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const [errors, setErrors]= useState('')*

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement your form submission logic here
    try {
      const response = await fetch("https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Form submitted successfully");
        // Reset form fields
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="fullname">
          <label htmlFor=""></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="fullname">
          <label htmlFor=""></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
          />
        </div>
        <div className="fullname">
          <label htmlFor=""></label>
          <textarea
            id="message"
            name="message"
            cols="30"
            rows="10"
            placeholder="Send me a Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="btn-wrapper">
          <button type="submit">Send me a Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
