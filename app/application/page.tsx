"use client";

import { faChartSimple, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { DatepickerEvent } from "@meinefinsternis/react-horizontal-date-picker";
import { Datepicker } from "@meinefinsternis/react-horizontal-date-picker";
import { enUS } from "date-fns/locale";
import React, { useState } from "react";

import Tap from "@/component/tap";

import BotNavigationBar from "./component/botNavigationBar";
import CategoryCard from "./component/categoryCard";
import DateBar from "./component/dateBar";
import GraphCard from "./component/graphCard";
import ListCard from "./component/listCard";
import TopNavigationBar from "./component/topNavigationBar";

export default function application() {
  const [activeTab, setActiveTab] = useState("Daily");
  const [activeIcon, setActiveIcon] = useState(0);

  const [date, setDate] = React.useState<{
    endValue: Date | null;
    startValue: Date | null;
    rangeDates: Date[] | null;
  }>({
    startValue: null,
    endValue: null,
    rangeDates: [],
  });

  const handleChange = (d: DatepickerEvent) => {
    const [startValue, endValue, rangeDates] = d;
    setDate((prev) => ({ ...prev, endValue, startValue, rangeDates }));
  };
  return (
    <>
      <div className="flex flex-col w-full items-center h-full min-h-screen justify-between">
        <TopNavigationBar></TopNavigationBar>
        <div className="flex flex-1 w-full justify-center h-full bg-gray-100">
          <div className="flex flex-col max-w-[500px] bg-white w-full text-black items-center">
            <Tap></Tap>

            {/* calendar */}
            <div className="flex flex-col items-center w-full p-2 mt-2 border-b-2">
              <div className="flex flex-row mb-4 items-center justify-center w-full gap-3">
                {["Daily", "Weekly", "Monthly"].map((tab) => (
                  <div
                    key={tab}
                    className={`px-4 py-2 text-sm font-semibold mx-2 cursor-pointer w-full flex items-center justify-center ${activeTab === tab ? " text-black border-b border-blue-500" : " text-gray-400 border-b border-gray-200"}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </div>
                ))}
                {[faChartSimple, faList].map((tab, i) => (
                  <div
                    key={i}
                    className={`px-4 py-2 text-xl font-semibold mx-2 cursor-pointer w-full flex items-center justify-center ${activeIcon === i ? " text-blue-500 " : " text-gray-400 "}`}
                    onClick={() => setActiveIcon(i)}
                  >
                    <FontAwesomeIcon className="" icon={tab} />
                  </div>
                ))}
              </div>
              <Datepicker onChange={handleChange} locale={enUS} startValue={date.startValue} endValue={date.endValue} />
            </div>
            <DateBar></DateBar>
            {activeTab === "Daily" && activeIcon === 0 && <CategoryCard></CategoryCard>}
            {activeTab === "Weekly" && activeIcon === 0 && <GraphCard></GraphCard>}
            {activeTab === "Weekly" && activeIcon === 1 && <ListCard></ListCard>}
          </div>
        </div>
        <BotNavigationBar></BotNavigationBar>
      </div>
    </>
  );
}
