"use client";

import { useState } from "react";

const Tap: React.FC = () => {
  const [active, setActive] = useState<string>("Engagement");
  return (
    <div className="flex flex-row w-full border">
      <div className="flex flex-row w-full h-fit my-2">
        <div className="flex w-full py-5 cursor-pointer" onClick={() => setActive("Submission")}>
          <div className="flex justify-center border-r  border-gray-300 w-full">
            <span className={`${active === "Submission" ? "text-blue-500 " : " text-gray-400 "} font-bold`}>
              <b>Submission</b>
            </span>
          </div>
        </div>
        <div className="flex w-full py-5 cursor-pointer" onClick={() => setActive("Engagement")}>
          <div className="flex justify-center border-l border-gray-300 w-full">
            <span className={`${active === "Engagement" ? "text-blue-500 " : " text-gray-400 "} font-bold`}>
              <b>Engagement</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tap;
