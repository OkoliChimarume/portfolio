import React, { useEffect, useRef } from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import { useNavbarContext } from "../contexts/NavbarContext";

const LandingPage = () => {
  const { setSectionRefs } = useNavbarContext();
  const heroRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();

  useEffect(() => {
    setSectionRefs((prev) => ({
      ...prev,
      hero: heroRef,
      about: aboutRef,
      projects: projectsRef,
    }));
  }, [setSectionRefs]);

  return (
    <div>
      <section ref={heroRef} id="hero">
        <Hero />
      </section>
      <section ref={aboutRef} id="about">
        <About />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section ref={projectsRef} id="projects">
        <Projects />
      </section>
    </div>
  );
};

export default LandingPage;
