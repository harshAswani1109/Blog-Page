import UserLanding from "../../components/landing/userlanding";
import Navbar from "../../components/navbar/navbar";
import BlogEditor from "./blog/writeBlog";

const User = () => {
  return (
    <div>
      <Navbar />
      <div>
        <UserLanding />
      </div>
    </div>
  );
};
export default User;
