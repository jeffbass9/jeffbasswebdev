import React, {Component} from "react";
import jeff_bass_resume from "../img/jeff-bass-resume-2025.pdf";


function Header(props){
  return(
    <div className="jb-header">

      <div className="jb-bio">

        <div className="jb-bio__text">
          <h1>Jeff Bass</h1>
          <h2>React / Wordpress / ASP.Net</h2>
          <p>I am a self-motivated web developer with a passion for learning.</p>
          <p>Keeping up with the latest
          standards and trends, I love working with Wordpress, creating new design
          components across a variety of frameworks, improving browser performance
          and accessibility, and troubleshooting complex issues. </p>
          <div className="jb-bio__buttons">
            <a href={jeff_bass_resume} className="jb-button">Resume</a>
            <a href="mailto:jeffbass9@gmail.com" className="jb-button">Contact</a>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Header;
