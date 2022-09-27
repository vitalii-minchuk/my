import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function TypeWriter({}: Props) {
  const [text, count] = useTypewriter({
    words: ["<Hi, Im Vitalii />", "<Lets make some coding />", "<Its nice />"],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className="flex flex-col justify-center space-y-8 text-center overflow-hidden items-center h-screen">
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}

export default TypeWriter;
