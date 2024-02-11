import React from "react";

const Video = () => {
  return (
    <video
      loop
      autoPlay
      muted
      src={"./videos/palm_trees.mp4"}
      className="object-cover w-full h-[60vh] lg:h-[80vh]"
    />
  );
};

export default Video;
