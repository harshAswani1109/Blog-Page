import BlogCard from "../../../components/blog/blogCard";
import Card from "../../../components/blog/card";
import UserNavbar from "../../../components/userNavbar/navbar";

const MyBlogs = () => {
  return (
    <div>
      <UserNavbar />
      <div>
        <BlogCard />
        <Card />
      </div>
    </div>
  );
};
export default MyBlogs;
