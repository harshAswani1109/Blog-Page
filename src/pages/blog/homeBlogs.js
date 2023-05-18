import Cricket from "../../../components/blog/cricCard";
import Football from "../../../components/blog/football";
import Navbar from "../../../components/navbar/navbar";

const HomeBlogs = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center items-center mt-8">
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col justify-center items-center gap-6">
            <h1 className="font-bold text-4xl">Football Blogs</h1>
            <div className="flex flex-wrap justify-center items-center gap-10">
              <Football />
              <Football />
              <Football />
              <Football />
            </div>
            <h1 className="font-bold text-4xl">Cricket Blogs</h1>
            <div className="flex flex-wrap justify-center items-center gap-10">
              <Cricket />
              <Cricket />
              <Cricket />
              <Cricket />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBlogs;
