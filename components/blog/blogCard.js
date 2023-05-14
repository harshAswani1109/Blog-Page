import { RiStarSFill } from "react-icons/ri";
const BlogCard = () => {
  return (
    <div>
      <div className="h-screen bg-[#895ac7] flex flex-wrap justify-center items-center ">
        <div class="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 px-6 flex flex-col pb-6 w-72">
          <div className="flex flex-row justify-between items-center mb-2 mt-4">
            <div class="text-white text-lg font-medium ">Harsh Aswani</div>
            <div class="text-white right-2 flex">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
          </div>
          <div class="text-white font-normal">
            "Atomic Habits" is a practical guide to building good habits and
            breaking bad ones, using a four-step model and real-life examples.
            The writing is clear and engaging, making it an easy and highly
            recommended read for anyone looking to make positive changes in
            their life.
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
