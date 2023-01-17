import React, {Component} from "react";


function Header(props){
  return(
    <div className="jb-header" style={{
        backgroundImage: `url(${props.background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>

      <div className="jb-bio">

        <div className="jb-bio__text">
          <h1>Jeff Bass is a web developer.</h1>
          <h3>He works with a wide variety of development stacks, but particularly loves working with Wordpress and React. He has worked in the non-profit and higher-ed industries over the past six years.</h3>
          <a href="">Hire Jeff.</a>
        </div>

      </div>

    </div>
  );
}

export default Header;
