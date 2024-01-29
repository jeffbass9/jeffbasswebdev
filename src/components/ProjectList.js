import React from "react";
import Project from "../components/Project";
import spu_map_img1x from "../img/campus-map-screenshot.jpg";
import spu_map_img2x from "../img/campus-map-screenshot-2x.jpg";
import spu_video_img1x from "../img/faith-and-co-screenshot.jpg";
import spu_video_img2x from "../img/faith-and-co-screenshot-2x.jpg";
import spu_home_img1x from "../img/spu-homepage-screenshot.jpg";
import spu_home_img2x from "../img/spu-homepage-screenshot-2x.jpg";
import spu_stories_img1x from "../img/stories.jpg";
import spu_stories_img2x from "../img/stories-2x.jpg";
import motion_calculator_img1x from "../img/motion.jpg";
import motion_calculator_img2x from "../img/motion-2x.jpg";

class ProjectList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          title: "Headless Wordpress blog",
          client: "Seattle Pacific University",
          description: "The university had an existing alumni stories site that needed a redesign. Our designer put together a great static mockup and I converted it into a headless Wordpress theme with Next.js and GraphQL.",
          linkURL1: "https://stories-next-uc-web-team-projects.vercel.app/",
          linkText1: "View site",
          image1x: spu_stories_img1x,
          image2x: spu_stories_img2x,
          imageAltText: "A screenshot of a 3D map of Seattle Pacific University"
        },
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
        // {
        //   title: "Homepage re-build",
        //   client: "Seattle Pacific University",
        //   description: "This was the project where I really internalized that I wanted to be a developer rather than a designer who codes. I took mockups and some static code from our senior web designer and built the 10+ components in C# for the Sitecore CMS. It pushed me out of my comfort zone, as up until that point I had dealt mainly with Wordpress (HTML/CSS/JS/PHP).",
        //   linkURL1: "https://spu.edu",
        //   linkText1: "View site",
        //   image1x: spu_home_img1x,
        //   image2x: spu_home_img2x,
        //   imageAltText: "A screenshot of the Seattle Pacific University homepage"
        // },
        {
          title: "Price calculator",
          client: "Motion Printshop",
          description: "While I was a freelancer, Motion Printshop enlisted me to build them a new website, with functionality for site visitors to get estimates on t-shirt and sticker order pricing. Using jQuery, I built an interactive calculator that took quantities, styles, and materials, and spit out a final price for potential customers. It’s been a treat to see other developers use this code on Codepen!",
          linkURL1: "https://codepen.io/jeffbass/pen/ZxdmLz",
          linkText1: "Codepen",
          linkURL2: "https://github.com/jeffbass9/price-calculator",
          linkText2: "GitHub",
          image1x: motion_calculator_img1x,
          image2x: motion_calculator_img2x,
          imageAltText: "A screenshot of the Motion Printshop homepage"
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
        {this.state.projects.map((project, index) => (
          <Project
            key={"project-" + index}
            title={project.title}
            client={project.client}
            description={project.description}
            linkURL1={project.linkURL1}
            linkText1={project.linkText1}
            linkURL2={project.linkURL2}
            linkText2={project.linkText2}
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
