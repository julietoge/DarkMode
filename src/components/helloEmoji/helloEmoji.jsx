import React from "react";
import Hello from "./hello";
import Emoji from "./emoji";
import './helloEmoji.css'

const HelloEmoji = () => {
  return (
    <div className="helloEmoji">
        <div><Hello /></div>
        <div><Emoji /></div>
      
      
    </div>
  );
};

export default HelloEmoji;
