import Navbar from "../../../components/navbar/navbar";
import UserCard from "../../../components/users/userCard";

const TopUsers = () => {
  return (
    <div>
      <Navbar />
      <div className="flex-col flex justify-start items-center mt-12">
        <h1 className="text-6xl fond-bold">Top Users</h1>
        <div className="flex flex-wrap justify-center items-center mt-6 gap-8">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
    </div>
  );
};
export default TopUsers;
