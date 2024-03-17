import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const TopNavigationBar: React.FC = () => {
  const router = useRouter();
  return (
    <div className="sticky top-0 w-full">
      <div className="flex flex-row w-full bg-blue-500 justify-between h-[100px] items-end">
        <div className="m-3 cursor-pointer">
          <FontAwesomeIcon icon={faHome} onClick={() => router.push("/")} />
        </div>
        <div className="m-3">
          <select
            id="underline_select"
            className="bg-transparent w-[150px] text-center  focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            defaultValue={"All Report"}
          >
            <option className="text-black" value="All Report">
              All Report
            </option>
            <option className="text-black" value="Daily Report">
              Daily Report
            </option>
            <option className="text-black" value="Weekly Report">
              Weekly Report
            </option>
            <option className="text-black" value="Monthly Report">
              Monthly Report
            </option>
          </select>
        </div>
        <div className="m-3">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  );
};

export default TopNavigationBar;
