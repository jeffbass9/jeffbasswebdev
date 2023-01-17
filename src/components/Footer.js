import React, {Component} from "react";

import linkedin_icon from '../img/icon-linkedin.svg';
import github_icon from '../img/icon-github.svg';
import instagram_icon from '../img/icon-instagram.svg';
import email_icon from '../img/icon-email.svg';


function Footer(props){
  return(
    <div className="jb-footer">
      <div className="jb-footer__inner">
        <h3>Contact me</h3>
        <ul>
          <li><a href="https://www.linkedin.com/in/jeffbasswebdev/"><img src={linkedin_icon} alt="Connect with me on LinkedIn"/></a></li>
          <li><a href="https://github.com/jeffbass9"><img src={github_icon} alt="Follow me on Github"/></a></li>
          <li><a href="https://www.instagram.com/jeffbass12/"><img src={instagram_icon} alt="Follow me on Instagram"/></a></li>
          <li><a href="mailto:jeffbass9@gmail.com"><img src={email_icon} alt="Email me at jeffbass9@gmail.com"/></a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
