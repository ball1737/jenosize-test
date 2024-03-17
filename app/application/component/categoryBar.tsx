"use client";

import { faMessage, type IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { faGem, faGift, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface category {
  icon: IconDefinition;
  name: string;
}
const CategoryBar: React.FC = () => {
  const [active, setActive] = useState<string>("Like");
  const categorys: category[] = [
    { icon: faThumbsUp, name: "Like" },
    { icon: faMessage, name: "Comment" },
    { icon: faGift, name: "Point" },
    { icon: faGem, name: "Diamond" },
  ];
  return (
    <div className="flex flex-col w-full h-fit p-4">
      <div className="flex flex-row justify-between">
        {categorys.map(({ icon, name }, index) => {
          return (
            <button
              key={index}
              className={`${active === name ? "bg-blue-500 text-white " : "bg-transparent text-blue-500"} border-spacing-1 border-2 border-blue-500  py-2 px-4 rounded-full hover:bg-blue-500 active:bg-blue-700 hover:text-white`}
              onClick={() => setActive(name)}
            >
              <FontAwesomeIcon icon={icon} /> {name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBar;
