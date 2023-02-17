import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">Angel Camargo </span>
            de <span className="purple"> Zulia, Venezuela.</span>
            <br />Egresado de la Universidad Rafael Belloso Chacin como Ingeniero Informático.
            <br />
            <br />
            Actividades que me gustan realizar fuera de la programación
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Pasar tiempo con mi familia
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "El esfuerzo que realizamos siempre es retribuido!"{" "}
          </p>
          <footer className="blockquote-footer">Camargo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
