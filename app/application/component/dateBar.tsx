"use client";

import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DateBar: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-fit p-4">
      <div className="flex flex-row justify-between">
        <div>18 March 2024</div>
        <div className="text-lg text-blue-500">
          <FontAwesomeIcon icon={faArrowUpFromBracket} />
        </div>
      </div>
    </div>
  );
};

export default DateBar;
