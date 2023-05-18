import BlogCard from "../../../components/blog/blogCard";
import UserNavbar from "../../../components/userNavbar/navbar";

const MyBlogs = () => {
  return (
    <div>
      <UserNavbar />
      <div className="my-6">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};
export default MyBlogs;
