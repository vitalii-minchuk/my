import { motion } from "framer-motion";
import Image from "next/image";

function About() {
  return (
    <section id="about" className="snap-center">
      <div className="flex flex-col relative text-center h-screen md:text-left md:flex-row max-w-6xl mx-auto px-10 justify-center md:justify-between items-center gap-[30px]">
        <h3 className="absolute top-24 left-[50%] translate-x-[-50%] tracking-[20px] uppercase text-gray-500">
          About
        </h3>
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
          }}
          className="flex-shrink-0 w-[150px] md:w-[220px] xl:w-[400px] h-[150px] md:h-[220px] xl:h-[400px] rounded-full md:rounded-lg overflow-hidden"
        >
          <Image
            width={100}
            height={100}
            layout="responsive"
            src="/image_1.jpg"
            alt="photo"
          />
        </motion.div>
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
          }}
        >
          <h4 className="pb-[30px] text-lg">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            voluptatibus autem excepturi odio vel doloribus pariatur cum
            quisquam earum, deserunt, hic voluptatum explicabo praesentium a
            corrupti delectus! Officia aperiam ad, omnis voluptas delectus aut,
            cupiditate tempora excepturi molestias unde velit deleniti.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
