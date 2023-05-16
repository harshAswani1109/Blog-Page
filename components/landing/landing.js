import GoogleLogin from "../auth/auth";

const Landing = () => {
  return (
    <div>
      <div className="h-screen w-full py-[2.5%] text-white">
        <div className="border-8 h-full mx-[3%] rounded-3xl flex justify-start flex-col items-baseline bg-[url(https://i.gifer.com/5m5h.gif)] overflow-hidden bg-no-repeat bg-cover">
          <div className=" flex flex-col px-[5%] py-[6%] gap-2 text-6xl font-semibold">
            <h1>Create</h1>
            <h1>Your Own</h1>
            <h1>Blogs</h1>
          </div>
          <div className="flex px-[5%] gap-2 absolute h-[550px] justify-end items-end">
            <GoogleLogin />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
