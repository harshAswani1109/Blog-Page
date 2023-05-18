import GoogleLogin from "../auth/auth";
import { RxCross1 } from "react-icons/rx";
const MobileNav = (props) => {
  return (
    <div className="flex flex-col justify-start items-start p-4 right-[-16px] top-[1px] text-black bg-white w-screen gap-4 rounded-sm font-semibold absolute ">
      <div className="flex justify-between items-center flex-row w-full mr-6">
        YO! Blogs
        <span onClick={props.handler}>
          <RxCross1 />
        </span>
      </div>

      <div className="flex flex-col justify-start items-start gap-4 rounded-sm font-semibold w-full p-4 border">
        <Link href="/">
          <ul>Home</ul>
        </Link>
        <Link href="/blog/homeBlogs">
          <ul>Blogs</ul>
        </Link>
        <Link href="/section/reviews">
          <ul>Reviews</ul>
        </Link>
        <Link href="/section/topUsers">
          <ul>Rankings</ul>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
