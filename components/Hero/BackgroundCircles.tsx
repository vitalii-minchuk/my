import { motion } from "framer-motion";
import React from "react";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute mt-36 animate-ping border border-[#333333] rounded-full w-[200px] h-[200px]" />
      <div className="absolute mt-36 border border-[#333333] rounded-full w-[300px] h-[300px]" />
      <div className="absolute mt-36 border border-[#333333] rounded-full w-[500px] h-[500px]" />
      <div className="absolute mt-36 animate-pulse border border-[#F7AB0A] opacity-30 rounded-full w-[600px] h-[600px]" />
    </motion.div>
  );
};

export default BackgroundCircles;
