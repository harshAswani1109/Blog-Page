import Image from "next/image";
import blogImage from "../../public/blogImage.jpeg";
import Link from "next/link";
const BlogCard = () => {
  return (
    <div className="flex justify-center items-center h-full flex-wrap mt-10 gap-10">
      <div className="px-[5%] md:px-[10%]">
        <div className="flex justify-center items-center flex-row max-md:flex-col-reverse w-full h-full border-4 rounded-3xl">
          <div className="flex justify-center items-center flex-col px-6 py-2 sm:w-2/3">
            <h1 className="text-3xl max-md:text-xl font-bold w-full">
              Just a Blog
            </h1>
            <p className="my-6 max-sm:my-4 text-md max-md:text-sm w-full">
              Nature has a unique way of captivating our senses, immersing us in
              its beauty, and providing a sense of tranquility. In today's
              digital era, we have the privilege of experiencing nature's
              wonders through various mediums, including the mesmerizing Ultra
              HD nature GIFs.
            </p>
            <div className="flex justify-between items-center flex-row gap-2 w-full">
              <span class="font-bold rounded-full">01/07/2003</span>
              <Link href="/blogs/blog1">
                <button class="text-red-500 font-bold">Edit</button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center sm:w-1/3  ">
            <Image
              src={blogImage}
              className="h-60 w-80 md:p-4 xl:p-0 xl:py-4"
              alt="Blog Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
