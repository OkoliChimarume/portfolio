import React, { useState, useRef } from "react";
import { projectList } from "../app-const";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ArrowIcon from "../../assets/icons/ArrowIcon";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project, index, hoveredProject, setHoveredProject }) => {
  const isDimmed = hoveredProject !== null && hoveredProject !== index;

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative w-[85vw] md:w-[300px] h-[30vh] flex-shrink-0 cursor-pointer transition-all duration-700 ease-out  snap-center block
        ${isDimmed ? "opacity-30 blur-[1px]" : "opacity-100 scale-100"}
      `}
      onMouseEnter={() => setHoveredProject(index)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <div className="w-full h-full relative overflow-hidden group rounded-xl bg-myGray/5">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          style={{ backgroundImage: `url(${project.img})` }}
        ></div>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>

        {/* Visual Cue - Link Icon */}
        <div className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 md:translate-y-2 group-hover:translate-y-0 hover:bg-myAccent">
          <div className="-rotate-45 transform transition-transform duration-300">
            <ArrowIcon right={true} />
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-6 left-6 z-20">
          <span className="text-12-body font-mono text-white/60 mb-2 block">
            [{String(index + 1).padStart(2, "0")}]
          </span>
          <h3 className="text-25-body font-bold text-white uppercase opacity-100 transform translate-y-0 transition-all duration-300">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.type.map((t, i) => (
              <span
                key={i}
                className="text-[10px] uppercase tracking-wider border border-white/20 px-2 py-1 rounded-full text-white/80"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  const containerRef = useRef();
  const sliderRef = useRef();
  const [hoveredProject, setHoveredProject] = useState(null);

  // Time for the "current time" display
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString("en-US", { hour12: false });
  };
  const [time, setTime] = useState(getCurrentTime());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(getCurrentTime()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Horizontal scroll wheel handler
  const handleScroll = (e) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <section
      ref={containerRef}
      className="h-[80vh] md:min-h-screen pt-10 md:py-20 relative bg-myDusk flex flex-col overflow-hidden gap-10 md:gap-0 md:justify-between"
    >
      {/* Top Header Section */}
      <div className="relative w-full pl-6 md:pl-10 lg:pl-14 z-10 flex flex-col md:flex-row justify-between items-start md:items-end pr-6 md:pr-10 lg:pr-14 pb-10 md:pb-0 md:h-[25vh]">
        {/* Massive Title */}
        <h1 className="text-[10vw] md:text-[6vw] leading-[0.8] font-bold text-white uppercase tracking-tighter transition-all duration-300">
          {hoveredProject !== null
            ? projectList[hoveredProject].title
            : "Projects"}
        </h1>

        {/* Info Column */}
        <div className="flex-col gap-10 md:mb-4 text-right font-mono text-[10px] md:text-xs text-white/70 uppercase tracking-widest min-w-[200px] hidden md:flex">
          <div className="flex flex-col gap-1 transition-all duration-300">
            {hoveredProject !== null ? (
              projectList[hoveredProject].type.map((type, i) => (
                <span key={i}>{type}</span>
              ))
            ) : (
              <span></span>
            )}
          </div>

          <div className="flex flex-col gap-1 transition-all duration-300">
            {hoveredProject !== null ? (
              <span className="max-w-[300px] ml-auto">
                {projectList[hoveredProject].description}
              </span>
            ) : (
              <span>{time}</span>
            )}
          </div>
        </div>
      </div>
      <div>
        {/* Projects Slider */}
        <div
          ref={sliderRef}
          className="w-full relative z-10 flex overflow-x-auto gap-4 md:gap-8 px-6 md:px-14 pb-20 no-scrollbar snap-x snap-mandatory pt-10"
        >
          {projectList.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
            />
          ))}
          {/* Spacer for end padding */}
          <div className="min-w-[40px] md:min-w-[100px] flex-shrink-0"></div>
        </div>

        {/* Mobile Indicator */}
        <div className="mt-4 mx-4 text-white/50 text-xs font-mono">
          Swipe to explore &rarr;
        </div>
      </div>
    </section>
  );
};

export default Projects;
