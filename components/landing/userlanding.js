import Link from "next/link";

const UserLanding = () => {
  return (
    <div>
      <div className="h-screen w-full py-[2.5%] text-white">
        <div className="border-8 h-full mx-[3%] rounded-3xl flex justify-start flex-col items-end bg-[url('https://i.gifer.com/J2q.gif')] overflow-hidden bg-no-repeat bg-cover">
          <div className=" flex flex-col px-[5%] py-[6%] gap-2 text-6xl font-semibold">
            <h1>Write</h1>
            <h1>Your Own</h1>
            <h1>Blogs</h1>
          </div>
          <div className="flex px-[5%] gap-2 absolute h-[550px] justify-end items-end">
            <Link href="/blog/writeBlog">
              <button className="text-xl text-black px-6 py-4 rounded-xl bg-white flex justify-center items-center gap-4">
                start writing
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserLanding;
