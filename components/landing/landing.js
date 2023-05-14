import GoogleLogin from "../auth/auth";
const Landing = () => {
  return (
    <div>
      <div className="h-screen">
        <div className="h-full flex flex-col md:flex-row justify-center items-center">
          <div className="flex justify-center items-center w-1/2 h-full"></div>
          <div className="flex justify-center items-center w-1/2 h-full">
            <GoogleLogin />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
