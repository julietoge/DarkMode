import React from "react";
import AuthLayout from "../../components/authLayout/auth";

const Contact = () => {
  return (
    <AuthLayout>
      <div className="title">
        <h1>Contact Me</h1>
        <p>Say Hello!</p>
      </div>
      <div className="socialMediaHandles-Wrapper">
        <div className="">LinkedIn</div>
        <div className="">Email</div>
        <div className="">watsApp</div>
        <div className="">GitHub</div>
      </div>
    </AuthLayout>
  );
};

export default Contact;
