import Link from "next/link";
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
        <Link href="/user">
          <ul>Home</ul>
        </Link>
        <ul>My Blogs</ul>
        <Link href="/blog/writeBlog">
          <ul>Create</ul>
        </Link>
        <ul>Tutorials</ul>
        <ul>Help</ul>
      </div>
    </div>
  );
};

export default MobileNav;
