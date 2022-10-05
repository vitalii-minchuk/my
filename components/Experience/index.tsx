import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <section id="experience" className="snap-center">
      <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly items-center">
        <h3 className="absolute top-24 left-[50%] translate-x-[-50%] tracking-[20px] uppercase text-gray-500">
          Experience
        </h3>
        <div className="w-full mt-[50x] overflow-x-scroll flex gap-4 p-10 snap-x snap-mandatory">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </div>
    </section>
  );
}

export default Experience;
