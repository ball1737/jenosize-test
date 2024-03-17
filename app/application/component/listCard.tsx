"use client";

import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faFile, faGem, faGift, faMessage, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface category {
  icon: IconDefinition;
  name: string;
}
interface list {
  userImg: string;
  name: string;
  type: string;
  icon: IconDefinition;
  amount: number;
  unit: string;
}

const ListCard: React.FC = () => {
  const [active, setActive] = useState<string>("Like");
  const [lists, setLists] = useState<list[]>([]);
  const router = useRouter();

  const categorys: category[] = [
    { icon: faThumbsUp, name: "Like" },
    { icon: faMessage, name: "Comment" },
    { icon: faGift, name: "Point" },
    { icon: faGem, name: "Diamond" },
  ];

  useEffect(() => {
    if (active === "Like")
      setLists([
        {
          userImg: "https://cdn.apikst.com/wl/?id=1zHC0AgTRUrDLbj3EdgAALvkmO2pXYAE",
          name: "Denis Villeneuve",
          type: "Daily Report",
          icon: faThumbsUp,
          amount: 30,
          unit: "People Likes",
        },
        {
          userImg: "https://cdn.apikst.com/wl/?id=1zHC0AgTRUrDLbj3EdgAALvkmO2pXYAE",
          name: "Jon Spaihts",
          type: "Daily Report",
          icon: faThumbsUp,
          amount: 22,
          unit: "People Likes",
        },
        {
          userImg: "https://cdn.apikst.com/wl/?id=1zHC0AgTRUrDLbj3EdgAALvkmO2pXYAE",
          name: "Frank Herbert",
          type: "Weekly Report",
          icon: faThumbsUp,
          amount: 14,
          unit: "People Likes",
        },
        {
          userImg: "https://cdn.apikst.com/wl/?id=1zHC0AgTRUrDLbj3EdgAALvkmO2pXYAE",
          name: "Mary Parent",
          type: "Daily Report",
          icon: faThumbsUp,
          amount: 12,
          unit: "People Likes",
        },
        {
          userImg: "https://cdn.apikst.com/wl/?id=1zHC0AgTRUrDLbj3EdgAALvkmO2pXYAE",
          name: "Cale Boyter",
          type: "Daily Report",
          icon: faThumbsUp,
          amount: 9,
          unit: "People Likes",
        },
        {
          userImg: "https://cdn.apikst.com/wl/?id=1zHC0AgTRUrDLbj3EdgAALvkmO2pXYAE",
          name: "Patrick McCormick",
          type: "Daily Report",
          icon: faThumbsUp,
          amount: 6,
          unit: "People Likes",
        },
        {
          userImg: "https://cdn.apikst.com/wl/?id=1zHC0AgTRUrDLbj3EdgAALvkmO2pXYAE",
          name: "Tanya Lapointe",
          type: "Daily Report",
          icon: faThumbsUp,
          amount: 4,
          unit: "People Likes",
        },
      ]);
    else if (active === "Comment")
      setLists([
        {
          userImg: "https://cdn.apikst.com/wl/?id=1zHC0AgTRUrDLbj3EdgAALvkmO2pXYAE",
          name: "Auditorio Nacional",
          type: "Weekly Report",
          icon: faMessage,
          amount: 30,
          unit: "Commented",
        },
        {
          userImg: "https://cdn.apikst.com/wl/?id=1zHC0AgTRUrDLbj3EdgAALvkmO2pXYAE",
          name: "Hans Zimmer",
          type: "Daily Report",
          icon: faMessage,
          amount: 22,
          unit: "Commented",
        },
        {
          userImg: "https://cdn.apikst.com/wl/?id=1zHC0AgTRUrDLbj3EdgAALvkmO2pXYAE",
          name: "Joe Walker",
          type: "Daily Report",
          icon: faMessage,
          amount: 14,
          unit: "Commented",
        },
        {
          userImg: "https://cdn.apikst.com/wl/?id=1zHC0AgTRUrDLbj3EdgAALvkmO2pXYAE",
          name: "Greig Fraser",
          type: "Daily Report",
          icon: faMessage,
          amount: 12,
          unit: "Commented",
        },
        {
          userImg: "https://cdn.apikst.com/wl/?id=1zHC0AgTRUrDLbj3EdgAALvkmO2pXYAE",
          name: "Javier Bardem",
          type: "Daily Report",
          icon: faMessage,
          amount: 9,
          unit: "Commented",
        },
        {
          userImg: "https://cdn.apikst.com/wl/?id=1zHC0AgTRUrDLbj3EdgAALvkmO2pXYAE",
          name: "Charlotte Rampling",
          type: "Daily Report",
          icon: faMessage,
          amount: 6,
          unit: "Commented",
        },
        {
          userImg: "https://cdn.apikst.com/wl/?id=1zHC0AgTRUrDLbj3EdgAALvkmO2pXYAE",
          name: "Stellan Skarsgård",
          type: "Daily Report",
          icon: faMessage,
          amount: 4,
          unit: "Commented",
        },
      ]);
    else setLists([]);
  }, [active]);
  return (
    <>
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
      <div className="flex w-full h-fit p-4">
        <div className="flex flex-col w-full justify-between gap-2">
          {lists.map(({ userImg, name, type, icon, amount, unit }, index) => {
            return (
              <div className="flex flex-row f-full">
                <div className="flex f-full justify-center items-center basis-1/6">
                  <div className="bg-black px-4 py-2 text-white rounded-full">{index + 1}</div>
                </div>
                <div
                  className="flex border-2 f-full justify-center items-center basis-5/6 text-xs rounded-md cursor-pointer hover:bg-gray-100"
                  onClick={() => router.push("/application/report")}
                >
                  <div className="flex flex-row w-full h-fit">
                    <div className="flex w-full py-1 basis-4/6">
                      <div className="flex justify-center border-r  border-gray-300 w-full">
                        <div className="flex flex-row w-full">
                          <div className="flex justify-center items-center m-1">
                            <Image
                              alt="Picture of the author"
                              src={userImg}
                              width={50}
                              height={0}
                              priority={false}
                            ></Image>
                          </div>
                          <div className="flex flex-col w-full">
                            <div className="flex m-1">{name}</div>
                            <div className="flex m-1">
                              <span>
                                <FontAwesomeIcon icon={faFile} className="text-xs" /> {type}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full py-1 cursor-pointer basis-2/6">
                      <div className="flex justify-center items-center border-l border-gray-300 w-full">
                        <span>
                          <FontAwesomeIcon icon={icon} className="text-lg text-blue-500" /> {amount} {unit}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListCard;
