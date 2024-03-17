"use client";

import { faGem } from "@fortawesome/free-regular-svg-icons/faGem";
import { faMessage } from "@fortawesome/free-regular-svg-icons/faMessage";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons/faThumbsUp";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface category {
  icon: IconDefinition;
  name: string;
  unit: string;
  amount: number;
}

const CategoryCard: React.FC = () => {
  const categorys: category[] = [
    { icon: faThumbsUp, name: "Like", amount: 34, unit: "Likes" },
    { icon: faMessage, name: "Comment", amount: 56, unit: "Comments" },
    { icon: faGift, name: "Point", amount: 450, unit: "Point" },
    { icon: faGem, name: "Diamond", amount: 40, unit: "Diamond" },
  ];
  return (
    <div className="flex flex-col w-full h-fit p-4">
      <div className="grid grid-cols-2 gap-4">
        {categorys.map(({ icon, name, amount, unit }, index) => {
          return (
            <div
              key={index}
              className="flex flex-col p-5 cursor-pointer border border-gray-400 hover:bg-gray-100 items-center"
            >
              <div className="m-4 text-xl text-blue-500 font-bold">
                <FontAwesomeIcon icon={icon} />
                <span> {name}</span>
              </div>
              <div className="mt-6 text-6xl text-black font-bold">{amount}</div>
              <div className="mb-6 text-lg text-gray-400">{unit}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryCard;
