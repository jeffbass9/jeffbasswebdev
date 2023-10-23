import React, {Component} from "react";

function Project(props){
  let link2 = "";

  if(props.linkURL2 && props.linkText2){
    link2 = <a href={props.linkURL2} className="jb-button">{props.linkText2}</a>
  }

  return(


      <div className="jb-portfolio__item jb-portfolio__item_left">
        <div className="jb-portfolio__item__text">
          <h3>{props.title}</h3>
          <h4>{props.client}</h4>
          <p>{props.description}</p>
          <a href={props.linkURL1} className="jb-button">{props.linkText1}</a>
          {link2}
        </div>
        <div className="jb-portfolio__item__image">
          <img src={props.image2x} alt={props.imageAltText} loading="lazy"/>
        </div>
      </div>


  );
}

export default Project;
