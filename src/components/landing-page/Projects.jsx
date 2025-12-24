import { useRef, useState } from "react";

const Projects = () => {
  const containerRef = useRef();

  return (
    <section
      ref={containerRef}
      className="w-full h-[60vh] relative group flex justify-center items-center"
    >
     <p className="text-[5rem] text-myGray">Projects here <span className="text-2xl">coming soon....</span></p>
    </section>
  );
};

export default Projects;
