import React, {Component} from "react";

function Project(props){
  return(


      <div className="jb-portfolio__item jb-portfolio__item_left">
        <div className="jb-portfolio__item__text">
          <h3>{props.title}</h3>
          <h4>{props.client}</h4>
          <p>{props.description}</p>
          <a href={props.linkURL1} className="jb-button">{props.linkText1}</a>
        </div>
        <div className="jb-portfolio__item__image">
          <img srcset={props.image1x, props.image2x} src={props.image2x} alt={props.imageAltText} loading="lazy"/>
        </div>
      </div>


  );
}

export default Project;
