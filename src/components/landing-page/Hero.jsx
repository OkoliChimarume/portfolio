import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SlideIn from "../global/SlideIn";
import ScrollOpacity from "../global/ScrollOpacity";

const Hero = () => {
  const containerRef = useRef();
  const imgRef = useRef();

  useGSAP(
    () => {
      const img = imgRef.current;
      if (!img) return;

      // Entrance animation
      gsap.from(img, {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Floating animation
      gsap.to(img, {
        y: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <section 
      ref={containerRef} 
      className="w-full h-[80vh] lg:h-screen flex items-center lg:px-desktop-h relative bg-myDusk text-myWhite overflow-hidden"
    >
      <div className="flex flex-col gap-y-4 md:gap-y-6 absolute z-10 left-8 md:left-24 lg:left-32 top-1/3">
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

      {/* Animated Image */}
      <div className="absolute right-0 md:right-24 lg:right-32 top-20 md:top-1/4 opacity-100 flex justify-end">
        <div ref={imgRef} className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
             {/* Decorative circle glow behind */}
            <div className="absolute inset-0 bg-myAccent/20 blur-3xl rounded-full scale-90"></div>
            
            <img 
              src="/images/profile-picture.webp" 
              alt="Obianuju Okoli" 
              className="w-full h-full object-cover rounded-full border-4 border-myAccent/30 shadow-2xl relative z-10"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;
