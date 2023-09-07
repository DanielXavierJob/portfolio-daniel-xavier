import { projects } from "../constants";
import styles from "../style";
import { FeedbackCard } from "./FeedbackCard";
import * as assets from "../assets";
import { ProjectCard } from "./ProjectCard";
export const Projects = () => {
  return (
    <section
      id="projects"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>My projects</h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>    
                I currently have +30 projects, so I leave some of them below for viewing
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {projects.map((item, index) => (
          <ProjectCard
            key={`project-${index}`}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
};
