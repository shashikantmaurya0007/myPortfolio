import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Pomodoro from "../../Assets/Projects/Pomodoro.png";
import VodkaUI from "../../Assets/Projects/VodkaUI.png";
import oshoMedia from "../../Assets/Projects/oshoMedia.png";
import FrontEndVideoLibrary from "../../Assets/Projects/FrontEndVideoLibrary.png";
import DrinksBreak from "../../Assets/Projects/DrinksBreak.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oshoMedia}
              isBlog={false}
              title="OshoMedia(Socail-Media)"
              description="OshoShare is a social media platform created for oshofollowers. features:authenticaion , infinitescroll,debounce search,toggle theme,user can add post, edit post ,comment on post, follow and  unfollow user ,add comment edit comment and deleted comment, share post "
              ghLink="https://github.com/shashikantmaurya0007/osho-media"
              demoLink="https://osho-media.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FrontEndVideoLibrary}
              isBlog={false}
              title="FrontEndVideoLibrary(Video-Library)"
              description="A frontEnd video library is created with an intention to provide frontend video resources at one point. featurs:authentication ,filter video by categories,like video ,add to watch later,create palylist ,debounce video search"
              ghLink="https://github.com/shashikantmaurya0007/video_lib"
              demoLink="https://frontend-library.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DrinksBreak}
              isBlog={false}
              title="DrinksBreak(E-Commerce)"
              description="DrinksBreak is an online store to buy alcohol.It has wide range of categories from whisky to beer.features: authentication ,debounce search and button click,filter on basis of rating,categories,price, add to wishlist,add to cart ,checkout,razorpay payment integration"
              ghLink="https://github.com/shashikantmaurya0007/Drinks-Break-ecommerce-app"
              demoLink="https://drinks-break-ecommerce-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VodkaUI}
              isBlog={false}
              title="Vodka-UI(component Library)"
              description="This component library provides you styled component which are fully responsive .If you have used bootstrap or tailwind before this component library will seems very much comfortable ."
              ghLink="https://github.com/shashikantmaurya0007/Vodka-component-library"
              demoLink="https://vodka-ui-componentlib.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pomodoro}
              isBlog={false}
              title="Pomodoro(Time-Management)"
              description="Pomodoro app helps you create Task list with timer.feature: user can create task,edit tast delete task,task list will persist on page refresh,Timer will start on click of task list,10 min break timer after each task,toggle theme"
              ghLink="https://github.com/shashikantmaurya0007/pomodora-app-react"
              demoLink="https://pomodora-app.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
