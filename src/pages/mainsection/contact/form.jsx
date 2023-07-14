import React from "react";
import './form.css'

const ContactForm = () => {
  return (
    
      <div className="form-wrapper">
        <form >
          <div className="fullname">
            <label htmlFor=""></label>
            <input type="text" name="" id="" placeholder="Full Name" />
          </div>
          <div className="fullname">
            <label htmlFor=""></label>
            <input type="email" name="" id="" placeholder="Email" />
          </div>
          <div className="fullname">
            <label htmlFor=""></label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Send me a Message"
            />
          </div>
          <div className="btn-wrapper">
            <button type="submit">
                Send me a Message
            </button>
          </div>
        </form>
      </div>

  );
};

export default ContactForm;
