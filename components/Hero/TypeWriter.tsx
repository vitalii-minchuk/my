import React from "react";
import { useTypewriter } from "react-simple-typewriter";

type Props = {};

function TypeWriter({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, Im Vitalii", "Lets make some coding", "<Its nice>"],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

export default TypeWriter;
