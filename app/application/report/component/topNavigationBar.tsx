import { faAngleLeft, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const TopNavigationBar: React.FC = () => {
  const router = useRouter();
  return (
    <div className="sticky top-0 w-full">
      <div className="flex flex-row w-full bg-blue-500 justify-between h-[100px] items-end">
        <div className="m-3 w-full cursor-pointer" onClick={() => router.back()}>
          <FontAwesomeIcon icon={faAngleLeft} />
          Back
        </div>
        <div className="flex m-3 w-full items-center justify-center">OKRs Report</div>
        <div className="flex m-3 w-full items-center justify-end">
          <FontAwesomeIcon icon={faEllipsis} />
        </div>
      </div>
    </div>
  );
};

export default TopNavigationBar;
