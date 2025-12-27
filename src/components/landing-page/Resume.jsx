import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitLineText from "../global/SplitLineText";
import SuitcaseIcon from "../../assets/icons/SuitcaseIcon";
import HomeIcon from "../../assets/icons/HomeIcon";
import { experienceData } from "../app-const";
import CopyIcon from "../../assets/icons/CopyIcon";
import CustomButton from "../../components/buttons/CustomButton";

gsap.registerPlugin(ScrollTrigger);

const ResumeItem = ({
  period,
  role,
  company,
  university,
  location,
  description,
  index,
}) => {
  return (
    <div className="resume-item flex flex-col md:flex-row gap-y-8 md:gap-x-10 relative mb-16 last:mb-0 w-full">
      <div className="md:w-1/2 flex flex-col md:items-end md:text-right gap-y-1 pl-16 md:pl-0 md:pr-12 relative z-10">
        <h3 className="text-16-body md:text-25-body font-bold text-myWhite resume-role opacity-0 translate-y-4">
          {role}
        </h3>
        <p className="text-14-body text-myGray font-mono resume-period opacity-0 translate-y-4">
          {period}
        </p>
      </div>

      <div className="absolute left-0 md:left-1/2 top-0 md:transform md:-translate-x-1/2 z-20 flex flex-col items-center h-full pointer-events-none">
        <div className="w-[50px] h-[50px] rounded-full bg-myAccent flex justify-center items-center shadow-lg resume-icon scale-0">
          {index >= 4 ? (
            <HomeIcon width="24" height="24" color="#000" />
          ) : (
            <SuitcaseIcon width="24" height="24" color="#000" />
          )}
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col gap-y-4 pt-0 md:pt-0 relative z-10 pl-16 md:pl-12 mt-0 md:mt-0">
        <div className="flex items-center gap-x-2 opacity-0 translate-y-4 resume-company-block">
          <h4 className="text-16-body md:text-25-body font-bold text-myGray">
            {company ?? university}
          </h4>
        </div>

        <div className="inline-block bg-myGray/20 px-3 py-1 rounded w-fit opacity-0 translate-y-4 resume-location">
          <span className="text-12-body text-myGray">{location}</span>
        </div>

        <div className="flex flex-col gap-y-4">
          {description.map((desc, i) => (
            <p
              key={i}
              className="text-14-body text-myWhite leading-relaxed opacity-0 translate-y-4 resume-desc"
            >
              {desc}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Resume = () => {
  const containerRef = useRef();
  const lineRef = useRef();

  const downloadResume = async () => {
    const path = "/resume.pdf";
    setResumeDownloading(true);

    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error("Failed to fetch resume");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Okoli-Obianuju-Resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("downloadResume error:", error);
    } finally {
      // simple UI signal; adjust timing as needed
      setTimeout(() => setResumeDownloading(false), 2000);
    }
  };

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".resume-item");

      // Vertical line animation
      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }
      );

      items.forEach((item) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        });

        tl.to(item.querySelectorAll(".resume-icon"), {
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        })
          .to(
            item.querySelectorAll(".resume-role, .resume-period"),
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
            },
            "-=0.3"
          )
          .to(
            item.querySelectorAll(
              ".resume-company-block, .resume-location, .resume-desc"
            ),
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
            },
            "-=0.4"
          );
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="w-full min-h-screen py-24 flex flex-col items-center bg-myDusk text-myWhite relative overflow-hidden">
      <div className="mb-20 text-center">
        <SplitLineText
          text={"Experiences"}
          textstyles={
            "text-32-body md:text-60-title text-myAccent font-bold mb-4"
          }
        />
        <p className="text-14-body text-myGray">
          Learn more about my experiences, qualifications and skills.
        </p>
        <div className="grid mt-4">
          <CustomButton
            icon={<CopyIcon />}
            text={"Download Resume"}
            full={true}
            handleClick={downloadResume}
          />
        </div>
      </div>

      <div
        ref={containerRef}
        className="w-[90%] md:w-[85%] lg:w-[70%] relative"
      >
        <div className="absolute left-[25px] md:left-1/2 top-4 bottom-0 w-[2px] bg-myGray/20 transform md:-translate-x-1/2 h-full z-0"></div>

        <div
          ref={lineRef}
          className="absolute left-[25px] md:left-1/2 top-4 w-[2px] bg-myAccent transform md:-translate-x-1/2 z-0 h-0 origin-top"
        ></div>

        <div className="flex flex-col">
          {experienceData.map((item, index) => (
            <ResumeItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
