import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import simonSays from "../../Assets/Projects/SimonSaysChallenge.png";
import drumKit from "../../Assets/Projects/DrumKitChallenge.png";
import keeperApp from "../../Assets/Projects/KepperApp-React.png";
import glitter from "../../Assets/Projects/glitter.png";
import proyectoBlogCafe from "../../Assets/Projects/ProyectoBlogCafe.png";
import alfaco from "../../Assets/Projects/Alfaco-App.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Varios de mis <strong className="purple">trabajos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui hay unos proyectos realizados por mi.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={glitter}
              isBlog={false}
              title="Glitter"
              description="Proyecto de ecommerce, tienda virtual realizada con react.js y node.js para propositos personales a futuro."
              ghLink="https://github.com/AngelCamargo404/Glitter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alfaco}
              isBlog={false}
              title="Alfaco App"
              description="Proyecto realizado para empresa de Peru AlfaCo SAC."
              demoLink="https://mesadepartes.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeperApp}
              isBlog={false}
              title="Keeper App"
              description="Blog de recordatorio realizado como proyecto para practicar y mejorar mis habilidades"
              ghLink="https://github.com/AngelCamargo404/Keeper-React-App"
              demoLink="https://keeper-app-acamargo.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simonSays}
              isBlog={false}
              title="Juego de Simón Dice"
              description="Debes recordar cada botón al que le das e irá aumentando su dificultad a medida que pasas de nivel"
              ghLink="https://github.com/AngelCamargo404/Simon-Says-Game"
              demoLink="https://simon-says-acamargo.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proyectoBlogCafe}
              isBlog={false}
              title="Blog de Café"
              description="Un blog que desarrollé acerca del café para los amantes a esta bebida!"
              ghLink="https://github.com/AngelCamargo404/Blog-Cafe-Solo-Front"
              demoLink="https://blog-de-cafe-solo-front.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drumKit}
              isBlog={false}
              title="KIT de Sonido!"
              description="Aprende a tocar simplemente usando tu teclado y los sonidos!"
              ghLink="https://github.com/AngelCamargo404/Drum-Kit-GAME"
              demoLink="https://drum-kit-acamargo.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
