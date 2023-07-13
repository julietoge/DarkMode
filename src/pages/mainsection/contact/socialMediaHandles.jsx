import React from "react";
import "./socialMediaHandles.css";

const SocialMediaHandles = () => {
  return (
    <div className="socialMediaHandles-Wrapper">
        <div className="linkedIn-Wrapper">
        <a href="http://" target="_blank" rel="noopener noreferrer">
        <img src="linkedIn" alt="LinkedIn" />
      </a>
        </div>
      
        <div className="linkedIn-Wrapper">
        <a href="http://" target="_blank" rel="noopener noreferrer">
        <img src="Email" alt="Email" />
      </a>
        </div>
        <div className="linkedIn-Wrapper">
        <a href="http://" target="_blank" rel="noopener noreferrer">
        <img src="WatsApp" alt="WatsApp" />
      </a>
        </div>
        <div className="linkedIn-Wrapper">
        <a href="http://" target="_blank" rel="noopener noreferrer">
        <img src="GitHub" alt="GitHub" />
      </a>
        </div>
    </div>
  );
};

export default SocialMediaHandles;
