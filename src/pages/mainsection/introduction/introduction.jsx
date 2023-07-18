import React from "react";
import Translate3d from "../../../components/globe/theGlobe";
import HelloEmoji from "../../../components/helloEmoji/helloEmoji";
import Profession from "../../../components/profession-text/profession";
import Description from "../../../components/summary/description";
import Name from "../../../components/Name-intro/name";
import "./introduction.css";

const Introduction = () => {
  return (
    <div className="introduction-container">

      <div className="introduction-txt">
        <div>
          <HelloEmoji />
        </div>
        <div>
          <Name />
        </div>
        <div>
          <Profession />
        </div>
        <div>
          <Description />
        </div>
      </div>
      <div className="Translate3d-img">
        <Translate3d />
    </div>
    </div>
  );
};

export default Introduction;
