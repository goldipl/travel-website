import React from "react";
import Button from "../Button";
import Link from "next/link";

export const HeroText = () => {
  return (
    <div className="left-[4%] w-10/12 absolute regular-14 max-container top-1/3 z-1 xl:w-3/6 bg-indigo-100/[.15] p-4 rounded-3xl xl:left-[12%] xl:regular-18 lg:left-[7%] md:left-[7%] lg:w-4/6 md:w-4/5 sm:left-[3%]">
      <h1 className="regular-20 text-white mb-6 [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)] 2xl:regular-64 xl:regular-40 md:regular-32 sm:regular-24">
        Are you dreaming about special holidays?
      </h1>
      <Link href="#about_us">
        <Button
          type="button"
          title="Read more about Us"
          variant="btn_light_lime"
          width=""
        />
      </Link>
    </div>
  );
};
