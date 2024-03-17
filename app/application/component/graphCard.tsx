"use client";

import { faMessage, type IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { faGem, faGift, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

interface category {
  icon: IconDefinition;
  name: string;
}

interface data {
  name: string;
  value: number;
}
const GraphCard: React.FC = () => {
  const [active, setActive] = useState<string>("Like");
  const [datas, setDatas] = useState<data[]>([
    { name: "10", value: 40 },
    { name: "11", value: 38 },
    { name: "12", value: 50 },
    { name: "13", value: 60 },
    { name: "14", value: 50 },
    { name: "15", value: 58 },
    { name: "16", value: 55 },
  ]);
  const categorys: category[] = [
    { icon: faThumbsUp, name: "Like" },
    { icon: faMessage, name: "Comment" },
    { icon: faGift, name: "Point" },
    { icon: faGem, name: "Diamond" },
  ];

  useEffect(() => {
    if (active === "Like")
      setDatas([
        { name: "10", value: 40 },
        { name: "11", value: 38 },
        { name: "12", value: 50 },
        { name: "13", value: 60 },
        { name: "14", value: 50 },
        { name: "15", value: 58 },
        { name: "16", value: 55 },
      ]);
    else if (active === "Comment")
      setDatas([
        { name: "10", value: 35 },
        { name: "11", value: 45 },
        { name: "12", value: 40 },
        { name: "13", value: 50 },
        { name: "14", value: 75 },
        { name: "15", value: 35 },
        { name: "16", value: 65 },
      ]);
    else if (active === "Point")
      setDatas([
        { name: "10", value: 100 },
        { name: "11", value: 150 },
        { name: "12", value: 780 },
        { name: "13", value: 180 },
        { name: "14", value: 240 },
        { name: "15", value: 160 },
        { name: "16", value: 195 },
      ]);
    else setDatas([]);
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
      <div className="flex flex-col w-full h-fit p-4">
        <LineChart width={400} height={300} data={datas} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
          <Line
            type="linear"
            dataKey="value"
            stroke="#305eff"
            strokeWidth={2}
            dot={{ fill: "#305eff", fontSize: 20 }}
            isAnimationActive
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, (dataMax: number) => (dataMax > 100 ? 800 : 80)]} />
          <Tooltip />
          <Legend />
        </LineChart>
      </div>
    </>
  );
};

export default GraphCard;
