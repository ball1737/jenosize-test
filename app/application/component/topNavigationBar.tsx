import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const TopNavigationBar: React.FC = () => {
  const [restaurant, setResaurant] = useState();
  const [searchKey, setSearchKey] = useState<string>("");

  const callApiService = async (search: string) => {
    const res = await axios.post<any>(`/search`, { search });
    setResaurant(res.data);
    console.log(restaurant);
  };

  return (
    <div className="flex fixed w-full top-0 bg-white justify-between h-[120px] text-black">
      <div className="flex h-full items-center">
        <div className="m-3">
          <Image
            alt="Picture of the author"
            src={"https://cdn.apikst.com/wl/?id=1pFnITEsfiLnNoS9Rd1ZcopgL4R7HIi4"}
            width={75}
            height={0}
          ></Image>
        </div>
        <div className="m-3">Jenosize-test | Restaurant Search</div>
      </div>
      <div className="flex h-full items-end">
        <div className="m-3 flex-col items-start">
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
                className="absolute inset-y-0 right-0 pr-3  
                    flex items-center  
                    pointer-events-none"
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
