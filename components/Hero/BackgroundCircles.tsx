import React from "react";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute mt-36 animate-ping border border-[#333333] rounded-full w-[200px] h-[200px]" />
      <div className="absolute mt-36 border border-[#333333] rounded-full w-[300px] h-[300px]" />
      <div className="absolute mt-36 border border-[#333333] rounded-full w-[500px] h-[500px]" />
      <div className="absolute mt-36 animate-pulse border border-[#F7AB0A] rounded-full w-[600px] h-[600px]" />
      <div className="absolute mt-36 border border-[#333333] rounded-full w-[750px] h-[750px]" />
    </div>
  );
};

export default BackgroundCircles;
