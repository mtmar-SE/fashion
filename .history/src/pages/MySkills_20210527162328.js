import React from "react";
import html from "../accessories/skills/html.png";
import css3 from "../accessories/skills/css3.png";
import sass from "../accessories/skills/sass.png";
import javascript from "../accessories/skills/js.png";
import react from "../accessories/skills/react.png";
import typesctipt from "../accessories/skills/typescript.png";

const MySkills = () => {
  return (
    <section>
      <div className="myskill">
        <div className="skill-item">
          <h3 className="skill-title">Html</h3>
          <div className="skill-item-img">
            <img src={html} alt="html" />
          </div>
          <p className="skill-desc">
            私の開発系ケインうぁsjdふぃおdsふぃおえhwf
          </p>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
