import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

function TypeWriter({}: Props) {
  const [text, count] = useTypewriter({
    words: ["<Hi, Im here />", "<Lets make some coding />", "<Its nice />"],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className="flex flex-col justify-center mt-[50px] text-center overflow-hidden items-center h-screen">
      <BackgroundCircles />
      <Image
        className="rounded-full"
        height={100}
        width={100}
        src="/image_1.jpg"
        alt="photo"
      />
      <h2 className="py-2 text-gray-500 text-sm uppercase tracking-[12px]">
        Software engineer
      </h2>
      <h1 className="text-xl z-20 pb-3 font-semibold lg:text-4xl">
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
      <div className="z-20">
        <Link href="#about">
          <button className="heroBtn">about</button>
        </Link>
        <Link href="#experience">
          <button className="heroBtn">experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroBtn">skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroBtn">projects</button>
        </Link>
      </div>
    </div>
  );
}

export default TypeWriter;
