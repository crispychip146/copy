import React, { useRef } from "react";
import Section from "./Section";
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine } from "./design/design/Hero";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Hero = () => {
  const parallaxRef = useRef(null);
  const Navigate = useNavigate();

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] "
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="Hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[67rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="h1 mb-6">
            Explore the World around us with
            <span className="inline-block relative">
              Climatter{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2 "
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Explore the world through the stories of climate change. At
            Climatter, we bring you powerful insights and narratives that reveal
            how our planet is evolving. Join us on a journey to better
            understand the world around us.
          </p>
          <Link to="/Map">
            <Button white>Get started</Button>
          </Link>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 ">
          <div className=" relative z-1 p-0.5 rounded-2xl  bg-conic-gradient">
            <img
              src={robot}
              className="w-full scale-[1]  md:scale-[1] md:translate-y-[10%] lg:-translate-y-[1px] rounded-2xl"
              width={1024}
              height={490}
              alt="ai"
            />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] ">
            <img
              src={heroBackground}
              className="w-full "
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
          <BackgroundCircles />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};
export default Hero;
