import React from "react";

const MainVideo = ({title,overview}) => {
  return (
    <div className="absolute h-[80vh] p-4 z-10 text-white flex flex-col justify-center ">
      <p className="text-3xl font-semibold pb-5">{title}</p>
      <p className="max-w-[30rem] pb-5">
        {overview}
      </p>
      <div className="text-white">
        <button className="backdrop-blur-sm hover:bg-opacity-50  bg-white text-black p-2 px-4 text-xl   rounded-sm mr-2">Play Now</button>
        
        <button className="backdrop-blur-sm  bg-gray-500 hover:bg-opacity-50 text-white p-2 px-4 text-xl bg-opacity-20  rounded-sm mr-2">More Info</button>
      </div>
    </div>
  );
};

export default MainVideo;
