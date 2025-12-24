import React, { useRef, useState } from "react";
import { useNavbarContext } from "../contexts/NavbarContext";
import { Link } from "react-router-dom";
import CopyIcon from "../../assets/icons/CopyIcon";
import CustomButton from "../../components/buttons/CustomButton";
import SlideIn from "../global/SlideIn";

const Footer = () => {
  const { socials } = useNavbarContext();
  const containerRef = useRef();

  const openEmail = () => {
    window.location.href =
      "mailto:okolichimarume@gmail.com?subject=Collaboration%20Proposal";
  };

  return (
    <footer
      ref={containerRef}
      className=" overflow-hidden mt-24 h-full lg:h-[50vh] w-full px-mobile lg:px-desktop-h flex flex-col justify-between pb-[30px] lg:pb-[50px]"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-y-[60px] lg:gap-y-[unset] mb-[60px] lg:mb-[unset]">
        <div className="text-45-title lg:text-large-m font-bold flex flex-wrap items-center gap-x-[10px] w-full md:w-[70%]">
          <SlideIn>
            <span> Get in Touch </span>
          </SlideIn>
        </div>

        {/* MOBILE EMAIL */}
        <div className="inline-block lg:hidden">
          <CustomButton
            icon={<CopyIcon />}
            text={"okolichimarume@gmail.com"}
            full={true}
            handleClick={openEmail}
          />
        </div>

        <div className="basis-[30%] text-myGray">
          <div className="flex justify-between mb-[35px] text-14-body opacity-60">
            <SlideIn>
              <span>Socials</span>
            </SlideIn>
          </div>
          <div className="flex justify-between text-16-body">
            {socials.map((item, i) => (
              <SlideIn key={i} delay={0.05 * i}>
                <Link key={i} to={item.link} target="_blank">
                  {item.title}
                </Link>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE BORDER-LINE */}
      <span className="w-full h-[1px] top-0 left-0 bg-myBlack opacity-25 block mb-[30px] lg:hidden" />

      {/* DESKTOP COPY EMAIL */}
      <div className="grid">
        <CustomButton
          icon={<CopyIcon />}
          text={"okolichimarume@gmail.com"}
          full={true}
          handleClick={openEmail}
        />
      </div>

      <div className="w-full flex justify-between">
        <SlideIn>
          <span>{new Date().getFullYear()}</span>
        </SlideIn>
        <SlideIn>
          <span>All Rights Reserved &copy;</span>
        </SlideIn>
      </div>
    </footer>
  );
};

export default Footer;
