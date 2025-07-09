import { Timeline } from "./ui/Timeline";
import { experiences } from "../constants/const";

const Experience = () => {
  return (
    <section className="relative w-full z-10 my-10">
        <Timeline data={experiences} />
    </section>
  );
};

export default Experience;
