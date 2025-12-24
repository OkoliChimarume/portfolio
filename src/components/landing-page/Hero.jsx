import React from "react";
import SlideIn from "../global/SlideIn";
import ScrollOpacity from "../global/ScrollOpacity";

const Hero = () => {

  return (
    <section className="w-full h-screen flex items-center lg:px-desktop-h relative bg-myDusk text-myWhite">
      <div className="flex flex-col gap-y-4 md:gap-y-6 absolute left-8 md:left-24 lg:left-32 top-1/3">
        <ScrollOpacity>
          <SlideIn>
            <h1 className="text-45-title md:text-large-m lg:text-[120px] leading-[0.9] font-bold tracking-tight">
              Obianuju <br /> Okoli
            </h1>
          </SlideIn>
        </ScrollOpacity>
        
        <ScrollOpacity>
          <SlideIn delay={0.2}>
            <div className="flex flex-col gap-2 mt-4 text-myGray text-16-body md:text-25-body font-light">
              <span>Software Engineer</span>
              <span>& AI Enthusiast</span>
            </div>
          </SlideIn>
        </ScrollOpacity>

        <ScrollOpacity>
          <SlideIn delay={0.4}>
             <div className="mt-8 flex gap-6 text-sm md:text-base text-myAccent">
                <a href="#projects" className="hover:underline">View Projects</a>
                <a href="#contact" className="hover:underline">Contact Me</a>
             </div>
          </SlideIn>
        </ScrollOpacity>
      </div>
    </section>
  );
};

export default Hero;
