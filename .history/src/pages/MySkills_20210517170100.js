import React from "react";
import html from "../accessories/skills/html.png";
import css3 from "../accessories/skills/css3.png";
import sass from "../accessories/skills/sass.png";
import javascript from "../accessories/skills/js.png";
import react from "../accessories/skills/react.png";
import typesctipt from "../accessories/skills/typescript.png";

const MySkills = () => {
  return (
    <div className="main-skill">
      <div className="skill-box">
        <img src={html} alt="html" width="120px" height="120px" />
        <img src={css3} alt="css3" width="120px" height="120px" />
        <img src={sass} alt="sass" width="120px" height="120px" />
        <img src={javascript} alt="javascript" width="120px" height="120px" />
        <img src={react} alt="react" width="120px" height="120px" />
        <img src={typesctipt} alt="typescript" width="120px" height="120px" />
      </div>
    </div>
  );
};

export default MySkills;
