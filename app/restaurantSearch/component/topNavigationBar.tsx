import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

import { restaurantStore } from "@/store/restaurant";

const TopNavigationBar: React.FC = () => {
  const [searchKey, setSearchKey] = useState<string>("");
  const { setRestaurant, resetRestaurant } = restaurantStore();

  const callApiService = async (search: string) => {
    resetRestaurant();
    const res = await axios.post<any>(`/search`, { search });
    setRestaurant(res.data);
  };

  return (
    <div className="flex flex-wrap w-full top-0 bg-white border-b border-gray-400 justify-between min-h-[120px] h-fit text-black">
      <div className="flex h-full items-center">
        <div className="m-3">
          <Image
            alt="Picture of the author"
            src={"https://cdn.apikst.com/wl/?id=1pFnITEsfiLnNoS9Rd1ZcopgL4R7HIi4"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            priority={false}
          ></Image>
        </div>
        <div className="m-3">Jenosize-test | Restaurant Search</div>
      </div>
      <div className="flex h-full items-end mt-auto">
        <div className="flex m-3 flex-col items-start">
          <div className="">
            <label>Search</label>
          </div>
          <div className="">
            <div className="relative">
              <input
                type="text"
                className="pl-2 pr-4 py-2 border"
                value={searchKey}
                placeholder="Search"
                onChange={(e) => setSearchKey(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") callApiService(searchKey);
                }}
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => callApiService(searchKey)}
              >
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigationBar;
