import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faChartPie, faCircleCheck, faGear, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface menu {
  icon: IconDefinition;
  name: string;
}

const BotNavigationBar: React.FC = () => {
  const [active, setActive] = useState<string>("Statistic");
  const menus: menu[] = [
    { icon: faPenToSquare, name: "White" },
    { icon: faCircleCheck, name: "Approval" },
    { icon: faPaperPlane, name: "Report" },
    { icon: faChartPie, name: "Statistic" },
    { icon: faGear, name: "Setting" },
  ];

  return (
    <div className="sticky bottom-0 w-full">
      <div className="flex flex-row w-full bg-white text-gray-400 justify-center h-fit items-center">
        <div className="flex w-full max-w-[500px] justify-between">
          {menus.map(({ icon, name }, index) => {
            return (
              <div
                key={index}
                className={`${active === name && "text-blue-500"} flex flex-col p-5 cursor-pointer hover:bg-gray-100`}
                onClick={() => setActive(name)}
              >
                <FontAwesomeIcon icon={icon} />
                <span className="mt-2 text-xs">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BotNavigationBar;
