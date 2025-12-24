import React from "react";
import { useNavbarContext } from "../contexts/NavbarContext";
import useDevice from "../hooks/useDevice";
import ScrollOpacity from "../global/ScrollOpacity";
import SplitLineText from "../global/SplitLineText";

const aboutStory = [
  {
    index: "1",
    story:
      "Frontend-focused Software Engineer with over 3 years of experience building scalable web applications. Passionate about AI and bringing designs to life by creating intuitive, high-performance interfaces that solve real-world problems.",
  },
  {
    index: "2",
    story:
      "I take strong ownership of every project I contribute to, treating each one as an extension of myself.",
  },
];

const About = () => {

  return (
    <section className="w-full h-screen flex justify-center relative bg-myDusk text-myWhite">
      <div className="flex flex-col justify-center w-[85%] md:w-[75%] lg:w-[50%] absolute top-[50%] translate-y-[-50%]">
        <ScrollOpacity>
          <SplitLineText
            text={"About Me"}
            textstyles={"text-16-body mb-[40px] text-myGray"}
          />
        </ScrollOpacity>

        <div>
          {aboutStory.map(({ story }, i) => (
            <ScrollOpacity key={i}>
              <div
                key={i}
                className="flex flex-col gap-y-[25px] lg:gap-y-0 lg:flex-row lg:items-baseline first:md:mb-[40px] first:mb-[50px] relative"
              >
                <SplitLineText
                  text={story}
                  textstyles={"text-25-body md:text-32-body leading-tight"}
                />
              </div>
            </ScrollOpacity>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
