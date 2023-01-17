import React from "react";

import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Skills from "../components/Skills";
import ProjectList from "../components/ProjectList";
import Footer from "../components/Footer";

import bio_image from '../img/profile-image.jpeg';
import background from '../img/good-press-photo-website-draft-1.jpg';

function HomePage(){
  return(

    <div className="jb-container">

      <Header background={background} image={bio_image} />
      <Skills />
      <ProjectList />
      <Footer />

    </div>
  )
}

export default HomePage;
