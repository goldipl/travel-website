"use client";
import React from "react";
import Swiper from "./Swiper";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="max-container padding-container overflow-x-hidden pb-20"
    >
      <h1 className="flex flexCenter bg-opacity-50 bg-white p-8 rounded-3xl text-black font-bold mb-4 lg:m-10 regular-24 xl:regular-40">
        Gallery
      </h1>
      <Swiper />
    </section>
  );
};

export default Gallery;
