import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-14 border-4 flex flex-wrap justify-center items-center gap-10">
      <Link href="/user">
        <ul className="">Home</ul>
      </Link>
      <Link href="/blog/writeBlog">
        <ul className="">Create</ul>
      </Link>
    </div>
  );
};
export default Navbar;
