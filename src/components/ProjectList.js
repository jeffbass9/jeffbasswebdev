import React from "react";
import Project from "../components/Project";
import spu_map_img1x from "../img/campus-map-screenshot.jpg";
import spu_map_img2x from "../img/campus-map-screenshot-2x.jpg";
import spu_video_img1x from "../img/faith-and-co-screenshot.jpg";
import spu_video_img2x from "../img/faith-and-co-screenshot-2x.jpg";
import spu_home_img1x from "../img/spu-homepage-screenshot.jpg";
import spu_home_img2x from "../img/spu-homepage-screenshot-2x.jpg";
import motion_calculator_img1x from "../img/motion-printshop-screenshot.jpg";
import motion_calculator_img2x from "../img/motion-printshop-screenshot-2x.jpg";
import twiggy_img1x from "../img/s1ngl-screenshot.jpg";
import twiggy_img2x from "../img/s1ngl-screenshot-2x.jpg";

class ProjectList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          title: "Interactive map",
          client: "Seattle Pacific University",
          description: "The university had an existing clickable map, but I wanted to take things into the third dimension. Using the Mapbox API, I created a color-coded map of campus, with custom pop-ups with images and links to relevant information for each location.",
          linkURL1: "https://spu.edu/campus-map/",
          linkText1: "View map",
          image1x: spu_map_img1x,
          image2x: spu_map_img2x,
          imageAltText: "A screenshot of a 3D map of Seattle Pacific University"
        },
        {
          title: "Video Library",
          client: "Seattle Pacific University",
          description: "The client wanted a filterable video grid to sort the content for a film series they produced, Faith & Co.. I had a blast writing a Wordpress plugin to handle a custom post type for each film, with Javascript handling the front-end functionality. I then provided training and documentation to empower the client to maintain the site on their own.",
          linkURL1: "https://faithandco.spu.edu/films/?season=season-1",
          linkText1: "View site",
          image1x: spu_video_img1x,
          image2x: spu_video_img2x,
          imageAltText: "A screenshot of a 3x3 grid of videos with a filter bar"
        },
        {
          title: "Homepage re-build",
          client: "Seattle Pacific University",
          description: "This was the project where I really internalized that I wanted to be a dedicated developer rather than a designer who codes. I took mockups and some static code from our senior web designer and built the 10+ components in a performant fashion, aiming to shave down the page load despite multiple animated elements. It pushed me out of my comfort zone, as I had to write C# to work with our CMS, Sitecore, whereas up until that point I had dealt mainly with Wordpress (HTML/CSS/JS/PHP).",
          linkURL1: "https://spu.edu",
          linkText1: "View site",
          image1x: spu_home_img1x,
          image2x: spu_home_img2x,
          imageAltText: "A screenshot of the Seattle Pacific University homepage"
        },
        {
          title: "Price calculator",
          client: "Motion Printshop",
          description: "While I was a freelancer, Motion Printshop enlisted me to build them a new website, with functionality for site visitors to get estimates on t-shirt and sticker order pricing. Using jQuery, I built an interactive calculator that took quantities, styles, and materials, and spit out a final price for potential customers. It’s been a treat to see other developers use this code on Codepen!",
          linkURL1: "https://github.com/jeffbass9/price-calculator",
          linkText1: "GitHub",
          image1x: motion_calculator_img1x,
          image2x: motion_calculator_img2x,
          imageAltText: "A screenshot of the Motion Printshop homepage"
        },
        {
          title: "Album release narrative experience",
          client: "Twiggy Rose",
          description: "This one was wild. LA-based band Twiggy Rose wanted to introduce audiences to their album through a fake dating website, where the AI who runs the matching algorithm tries to reach the user and break free from the confines of the website. It was a fun challenge to get the site to look broken, but on purpose.",
          linkURL1: "https://s1ngl.com/",
          linkText1: "View site(NSFW)",
          image1x: twiggy_img1x,
          image2x: twiggy_img2x,
          imageAltText: "A screenshot of a surreal fake dating site"
        }
      ],
    };

    // ...
  }

  // ...

  render() {
    return (
      <div className="jb-portfolio">
        <h2>Projects</h2>
        {this.state.projects.map((project) => (
          <Project
            key={project.index}
            title={project.title}
            client={project.client}
            description={project.description}
            linkURL1={project.linkURL1}
            linkText1={project.linkText1}
            image1x={project.image1x}
            image2x={project.image2x}
            imageAltText={project.imageAltText}
          />
        ))}
      </div>
    );
  }
}

export default ProjectList;
