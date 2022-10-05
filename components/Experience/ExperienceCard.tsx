import { motion } from "framer-motion";
import Image from "next/image";

function ExperienceCard() {
  return (
    <article className="transition hover:shadow-md hover:shadow-[#999999] p-10 bg-[#292929] flex flex-col rounded-lg items-center space-y-6 flex-shrink-0 w-[300px] md:w-[400px] snap-center">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: [0, 0, 0.2, 1],
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        className="w-[50px] h-[50px] xl:w-[100px] xl:h-[100px] rounded-full overflow-hidden"
      >
        <Image
          width={100}
          height={100}
          layout="responsive"
          src="/image_1.jpg"
          alt="photo"
        />
      </motion.div>
      <div className="px-0 md:ps-10 text-gray-500">
        <h4 className="text-xl text-white font-light">Manager</h4>
        <p className="text-bold text-lg mt-1">company name</p>
        <div className="flex gap-2 my-2">
          <div className="w-4 h-4 lg:w-6 lg:h-6">
            <Image
              width={100}
              height={100}
              layout="responsive"
              src="/ts.jpg"
              alt="ts"
            />
          </div>
          <div className="w-4 h-4 lg:w-6 lg:h-6">
            <Image
              width={100}
              height={100}
              layout="responsive"
              src="/redux.jpg"
              alt="ts"
            />
          </div>
          <div className="w-4 h-4 lg:w-6 lg:h-6">
            <Image
              width={100}
              height={100}
              layout="responsive"
              src="/react.png"
              alt="ts"
            />
          </div>
        </div>
        <p className="text-xs">Started work... - Ended...</p>
        <ul className="list-disc my-2 space-y-2">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
