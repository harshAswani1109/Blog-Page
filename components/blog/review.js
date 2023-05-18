import React from "react";
import { RiStarSFill } from "react-icons/ri";

const Review = () => {
  return (
    <div>
      <div className="h-screen flex flex-wrap justify-center items-center">
        <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 px-6 flex flex-col pb-6 w-72">
          <div className="flex flex-row justify-between items-center mb-2 mt-4">
            <div className="text-white text-lg font-medium">Harsh Aswani</div>
            <div className="text-white flex">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
          </div>
          <div className="text-white font-normal">
            Atomic Habits is a practical guide to building good habits and
            breaking bad ones, using a four-step model and real-life examples.
            The writing is clear and engaging, making it an easy and highly
            recommended read for anyone looking to make positive changes in
            their life.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
