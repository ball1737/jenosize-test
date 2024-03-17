"use client";

import { faClock, faMessage, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight, faCalendar, faGift, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import CommentBar from "./component/commentBar";
import TopNavigationBar from "./component/topNavigationBar";

interface comment {
  userImg: string;
  name: string;
  position: string;
  content: string;
  timeleft: number;
  likedAmount: number;
}

export default function application() {
  const comments: comment[] = [
    {
      userImg: "https://cdn.apikst.com/wl/?id=1zHC0AgTRUrDLbj3EdgAALvkmO2pXYAE",
      name: "Anankin Skywalker",
      position: "Degigner",
      content: "Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod",
      timeleft: 2,
      likedAmount: 2,
    },
    {
      userImg: "https://cdn.apikst.com/wl/?id=1zHC0AgTRUrDLbj3EdgAALvkmO2pXYAE",
      name: "Amanda Ray",
      position: "Degigner",
      content: "Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod",
      timeleft: 2,
      likedAmount: 0,
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full items-center h-full min-h-screen justify-between">
        <TopNavigationBar></TopNavigationBar>
        <div className="flex flex-1 w-full justify-center h-full bg-gray-100">
          <div className="flex flex-col max-w-[500px] bg-white w-full text-black items-center">
            <div className="flex flex-row w-full h-fit p-4">
              <div className="flex w-full py-1">
                <div className="flex justify-center  w-full">
                  <div className="flex flex-row w-full">
                    <div className="flex justify-center items-center m-1">
                      <Image
                        alt="Picture of the author"
                        src={"https://cdn.apikst.com/wl/?id=1zHC0AgTRUrDLbj3EdgAALvkmO2pXYAE"}
                        width={50}
                        height={0}
                        priority={false}
                      ></Image>
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="flex flex-row w-full justify-between items-end">
                        <div className="font-bold">Ekarach Sripen</div>
                        <div className="text-xs">
                          <FontAwesomeIcon icon={faCalendar} />
                          14/01/2020
                        </div>
                      </div>
                      <div className="flex"></div>
                      <div className="flex flex-row w-full justify-between">
                        <div className="text-xs">Design Director</div>
                        <div className="text-xs">
                          <FontAwesomeIcon icon={faClock} />
                          12:45
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full justify-start p-5">
              <div className="flex flex-col">
                <h1 className="text-gray-500">Content 1</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              </div>
              <div className="flex flex-col">
                <h1 className="text-gray-500">Content 2</h1>
                <p>Ut enim ad minim veniam, quis nostrudyewr Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <div className="flex flex-col">
                <h1 className="text-gray-500">Content 3</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </p>
              </div>
              <div className="flex flex-col">
                <h1 className="text-gray-500">Image</h1>
                <div className="flex flex-row gap-2">
                  <Image alt="Picture of the author" src={"/img.png"} width={85} height={0} priority={false}></Image>
                  <Image alt="Picture of the author" src={"/img.png"} width={85} height={0} priority={false}></Image>
                  <Image alt="Picture of the author" src={"/img.png"} width={85} height={0} priority={false}></Image>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start">
                <h1 className="text-gray-500">Attach File</h1>
                <div className="my-2">
                  <FontAwesomeIcon icon={faPaperclip} />
                  <span className="text-blue-500 cursor-pointer"> Update Design ORKs.pdf</span>
                </div>
              </div>
            </div>

            <div className="flex w-full bg-blue-100">
              <div className="flex flex-row w-full h-fit">
                <div className="flex w-full py-3 ">
                  <div className="flex justify-center border-r  border-gray-300 w-full">
                    <span className="text-gray-400 cursor-pointer">Read (12)</span>
                  </div>
                </div>
                <div className="flex w-full py-3 ">
                  <div className="flex justify-center border-l border-r border-gray-300 w-full">
                    <span className="text-gray-400 cursor-pointer">Unread (25)</span>
                  </div>
                </div>
                <div className="flex w-full py-3 ">
                  <div className="flex justify-center border-l border-gray-300 w-full">
                    <span className="text-gray-400 cursor-pointer">Likes (2)</span>
                  </div>
                </div>
                <div className="flex w-full py-3 ">
                  <div className="flex justify-center w-full">
                    <span className="text-blue-500 cursor-pointer">
                      View <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full h-fit p-4">
              <div className="flex flex-row justify-between">
                <div className="flex w-full items-center justify-center">
                  <button className="text-blue-500 border-spacing-1 border-2 border-blue-500  py-1 max-w-[200px] w-full rounded-full hover:bg-blue-500 active:bg-blue-700 hover:text-white">
                    <FontAwesomeIcon icon={faGift} /> Give Point
                  </button>
                </div>
                <div className="flex w-full items-center justify-center">
                  <button className="text-blue-500 border-spacing-1 border-2 border-blue-500  py-1 max-w-[200px] w-full rounded-full hover:bg-blue-500 active:bg-blue-700 hover:text-white">
                    <FontAwesomeIcon icon={faThumbsUp} /> Like
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full p-6 border border-gray-300">
              {comments.map(({ userImg, name, position, content, timeleft, likedAmount }, index) => {
                return (
                  <div
                    className={`flex flex-col w-full items-center ${index !== 0 && " border-t border-gray-300"} m-1`}
                  >
                    <div className="flex flex-col w-full items-center">
                      <div className="flex flex-row w-full h-full  my-2">
                        <div className="flex justify-center items-center m-1">
                          <Image
                            alt="Picture of the author"
                            src={userImg}
                            width={50}
                            height={0}
                            priority={false}
                          ></Image>
                        </div>
                        <div className="flex flex-col w-full items-center h-full justify-center">
                          <div className="flex flex-row w-full justify-start">
                            <div className="font-bold">{name}</div>
                          </div>
                          <div className="flex flex-row w-full justify-start">
                            <div className="text-xs">{position}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex my-2">{content}</div>
                    <div className="flex flex-row w-full my-2 text-xs">
                      <div className="flex flex-row w-full justify-start basis-2/5">
                        <div className="flex w-full text-gray-400">{timeleft} days left</div>
                        <div className="flex w-full">{likedAmount !== 0 ? `${likedAmount}People Likes` : "like"}</div>
                      </div>
                      <div className="flex flex-row w-full justify-center basis-1/5">
                        <div className="flex w-full text-blue-500"> </div>
                      </div>
                      <div className="flex flex-row w-full justify-end basis-2/5">
                        <div className="flex w-full justify-end items-center text-blue-500">
                          <FontAwesomeIcon icon={faMessage} /> Reply
                        </div>
                        <div className="flex w-full justify-end items-center text-blue-500">
                          <FontAwesomeIcon icon={faThumbsUp} /> Like
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <CommentBar></CommentBar>
      </div>
    </>
  );
}
