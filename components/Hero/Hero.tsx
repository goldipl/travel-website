import React from "react";
import Video from "./Video";
import { HeroText } from "./HeroText";

export const Hero = () => {
  return (
    <div className="relative h-full">
      <Video />
      <HeroText />
    </div>
  );
};
