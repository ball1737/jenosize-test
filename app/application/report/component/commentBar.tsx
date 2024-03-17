import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faAt, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CommentBar: React.FC = () => {
  return (
    <div className="sticky bottom-0 w-full border-t border-gray-300">
      <div className="flex flex-row w-full bg-white text-gray-400 justify-center h-fit items-center">
        <div className="flex w-full max-w-[300px] justify-between items-center">
          <div className="flex py-4 px-2 cursor-pointer hover:bg-gray-100">
            <FontAwesomeIcon icon={faImage} />
          </div>
          <div className="flex py-4 px-2 cursor-pointer hover:bg-gray-100">
            <FontAwesomeIcon icon={faPaperclip} />
          </div>
          <div className="flex py-4 px-2 cursor-pointer hover:bg-gray-100">
            <FontAwesomeIcon icon={faAt} />
          </div>
          <div className="flex py-4 px-2 cursor-pointer hover:bg-gray-100 w-fit">
            <input className="border rounded-xl py-2 px-4 w-fit max-w-[200px]" placeholder="Comment"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentBar;
