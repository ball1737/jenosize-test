"use client";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function application() {
  return (
    <>
      <div className="flex fixed w-full bg-blue-500 justify-between h-[120px] items-end">
        <div className="m-3">
          <FontAwesomeIcon icon={faHome} />
        </div>
        <div className="m-3">123</div>
        <div className="m-3">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className="flex h-screen items-center w-full justify-center">application</div>
    </>
  );
}
