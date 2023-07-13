import React from "react";
import "./socialMediaHandles.css";

const SocialMediaHandles = () => {
  return (
    <div className="socialMediaHandles-Wrapper">
        <div className="linkedIn-Wrapper">
        <a href="https://www.linkedin.com/in/ogechi-juliet-uhegbu" target="_blank" rel="noopener noreferrer">
        <img src="linkedIn" alt="LinkedIn" />
      </a>
        </div>
      
        <div className="linkedIn-Wrapper">
          <a href="mailto:julietogech127@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="Email" alt="Email" />
          </a>
        </div>
        <div className="linkedIn-Wrapper">
          <a href="https://wa.me/+2348138780831?text=This%20is%20a%20test" target="_blank" rel="noopener noreferrer">
          <img src="WatsApp" alt="WatsApp" />
          </a>
        </div>
        <div className="linkedIn-Wrapper">
        <a href="https://github.com/julietoge" target="_blank" rel="noopener noreferrer">
        <img src="GitHub" alt="GitHub" />
      </a>
        </div>
    </div>
  );
};

export default SocialMediaHandles;
