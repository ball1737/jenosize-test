"use client";

import axios from "axios";
import type { FormEvent } from "react";
import { useState } from "react";

export default function twentyFour() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [is24, setIs24] = useState<string>();
  const [number, setNumber] = useState<number[]>([]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIs24("");
    setIsLoading(true);
    const res = await axios.post<any>(`/game24`, { setNumbers: number });
    setIs24(res.data);
    setIsLoading(false);
  }
  return (
    <>
      <div className="flex flex-col h-screen items-center w-full justify-center gap-2">
        <div className="flex items-center justify-center mt-5 text-5xl">GAME 24</div>
        <form onSubmit={onSubmit}>
          <div className="">
            {[...Array(4)].map((e, i) => {
              return (
                <input
                  key={i}
                  type="number"
                  name="number1"
                  className="text-black p-3 m-1 w-[50px] text-center"
                  max={9}
                  min={1}
                  value={number[i]}
                  onChange={(val) => {
                    if (Number(val.target.value) > 0 && Number(val.target.value) < 10)
                      setNumber((prev) => {
                        const ar = [...prev];
                        ar[i] = Number(val.target.value);
                        return ar;
                      });
                  }}
                />
              );
            })}
          </div>
          <div className="flex items-center justify-center text-white">*Fill 4 number to check</div>
          <div className=" flex items-center justify-center mt-5">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-transparent border-spacing-1 border-2 border-green-500 text-green-500 p-1 rounded-md hover:bg-green-500 active:bg-green-700 hover:text-white"
            >
              {isLoading ? "Loading..." : "Check"}
            </button>
          </div>
        </form>
        <div className={`${is24 === "NO" ? "text-red-600" : "text-green-600"} flex items-center justify-center mt-5`}>
          {is24}
        </div>
      </div>
    </>
  );
}
