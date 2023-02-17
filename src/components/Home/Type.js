import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desarrollador Web",
          "Excelente Autodidacta",
          "FullStack Web Developer",
          "JS, PHP, REACT, NODE, LARAVEL Y MÁS",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
