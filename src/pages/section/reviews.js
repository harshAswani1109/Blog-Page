import Navbar from "../../../components/navbar/navbar";
import Review from "../../../components/blog/review";
const Reviews = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen w-full py-[2.5%] text-white">
        <div className="border-8 h-full mx-[3%] rounded-3xl flex justify-evenly flex-wrap items-start bg-[url(https://i.gifer.com/5m5h.gif)] overflow-hidden bg-no-repeat bg-cover">
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </div>
  );
};
export default Reviews;
