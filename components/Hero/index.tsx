import React from "react";
import TypeWriter from "./TypeWriter";

type Props = {};

function Hero({}: Props) {
  return (
    <section id="hero" className="snap-center">
      <TypeWriter />
    </section>
  );
}

export default Hero;
