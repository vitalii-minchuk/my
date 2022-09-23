import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

function Header() {
  const socialVariants = {
    hidden: {
      x: -200,
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };
  const getInTouchVariants = {
    hidden: {
      x: 200,
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };
  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="sticky top-0 z-20 mx-auto p-5 max-w-6xl flex justify-between items-center"
    >
      <motion.div
        variants={socialVariants}
        className="flex space-x-2 items-center"
      >
        <SocialIcon
          className="cursor-pointer hover:bg-slate-200 transition-all duration-500 rounded-full"
          fgColor="gray"
          bgColor="transparent"
          url="https://twitter.com"
        />
        <SocialIcon
          className="cursor-pointer hover:bg-slate-200 transition-all duration-500 rounded-full"
          fgColor="gray"
          bgColor="transparent"
          url="https://youtube.com"
        />
        <SocialIcon
          className="cursor-pointer hover:bg-slate-200 transition-all duration-500 rounded-full"
          fgColor="gray"
          bgColor="transparent"
          url="https://github.com"
        />
      </motion.div>
      <motion.div
        variants={getInTouchVariants}
        className="flex space-x-2 group items-center cursor-pointer"
      >
        <SocialIcon
          className="group-hover:bg-slate-200 transition-all duration-500 rounded-full"
          fgColor="gray"
          bgColor="transparent"
          network="email"
        />
        <p className="hidden text-gray-500 uppercase sm:inline-block">
          get in touch
        </p>
      </motion.div>
    </motion.header>
  );
}

export default Header;
