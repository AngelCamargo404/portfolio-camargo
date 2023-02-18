import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEJAME <span className="purple"> HABLARTE </span> UN POCO DE MI
            </h1>
            <p className="home-about-body">
            Soy amante del mundo de la programación, siempre en constante búsqueda de aprender todo tipo de frameworks, herramientas y cualquier tipo de avance relevante a las tecnologías que uso.
              <br />
              <br />Me destaco en los lenguajes
              <i>
                <b className="purple"> JavaScript y PHP. </b>
              </i>
              <br />
              <br />
              Mi interés actual se basa en el &nbsp;
              <i>
                <b className="purple">desarrollo web y proyectos personales</b> ásí como también áreas relacionadas con {" "}
                <b className="purple">
                  el desarrollo personal profesional.
                </b>
              </i>
              <br />
              <br />
              Siempre que puedo intento aprender a fondo las tecnologías <b className="purple">Node.js</b>
              <i>
                <b className="purple">
                  {" "}
                  JavasScript moderno, y a su vez,
                </b>
              </i>
              &nbsp; 
              <i>
                <b className="purple"> MySQL con PHP y Laravel</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contáctame en</h1>
            <p>
              Sientete cómodo de <span className="purple">conectar </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AngelCamargo404"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/angel-camargo-942127241/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.link/wm3erq"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
