import Image from "next/image";
import harsh from "../../public/harsh.jpg";
const UserCard = () => {
  return (
    <div>
      <div className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-blue-500 h-80 w-72 flex justify-center items-center flex-col">
        <div className="flex justify-center mt-4">
          <Image
            src={harsh}
            alt="user image"
            className="rounded-full border-solid border-white border-2 h-36 w-36"
          />
        </div>
        <div className="text-center px-3 pb-6 pt-2">
          <h3 className="text-white text-lg bold font-sans">Harsh Aswani</h3>

          <p className="mt-1 font-sans font-light text-white text-md">
            65 Blogs posted in last 3 months
          </p>
        </div>
        <div class="flex justify-center pb-3 text-white">
          <div class="text-center mr-3 border-r pr-3">
            <h2>599</h2>
            <span>Followers</span>
          </div>
          <div class="text-center">
            <h2>999</h2>
            <span>Blog Points</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
