"use client";

import axios from "axios";
import { useState } from "react";

export default function xo() {
  const [x, setX] = useState<number[]>([]);
  const [o, setO] = useState<number[]>([]);
  const [win, setWin] = useState<{ player: string; match: number[] }>({ player: "", match: [] });
  const [free, setFree] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const defaultFree = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const reset = async () => {
    setX([]);
    setO([]);
    setFree(defaultFree);
    setWin({ player: "", match: [] });
  };

  const play = async (slot: number) => {
    if (!free.includes(slot)) return;
    x.push(slot);
    const index = free.indexOf(slot);
    if (index !== -1) free.splice(index, 1);
    const res = await axios.post<{
      x: number[];
      o: number[];
      free: number[];
      win: { player: string; match: number[] };
      nexto: number;
    }>(`/xo`, {
      x,
      o,
      free,
    });
    setO(res.data.o);
    setFree(res.data.free);
    if (res.data.win.player) {
      alert(`${res.data.win.player} ชนะ`);
      setWin(res.data.win);
      setFree([]);
    } else if (free.length === 0) alert(`เสมอ`);
  };

  return (
    <>
      <div className="flex flex-col h-screen items-center w-full justify-center">
        <div className=" grid grid-cols-3 gap-4">
          {defaultFree.map((e, i) => {
            return (
              <div
                key={i}
                className={`${free.includes(e) && "cursor-pointer"} ${win.match?.includes(e) && (win.player === "x" ? "bg-green-900" : "bg-red-900")} grid-rows-3 border-4 h-[100px] w-[100px] items-center flex justify-center text-7xl`}
                onClick={() => play(e)}
              >
                {x.includes(e) ? "x" : ""}
                {o.includes(e) ? "o" : ""}
              </div>
            );
          })}
        </div>
        <div className="items-center static mt-5 ">
          <button
            className="bg-transparent border-spacing-1 border-2 border-red-500 text-red-500 p-1 rounded-md hover:bg-red-500 active:bg-red-700 hover:text-white"
            onClick={() => reset()}
          >
            RESET
          </button>
        </div>
      </div>
    </>
  );
}
