import Image from "next/image";
import blogImage from "../../public/blogImage.jpeg";
import Link from "next/link";
const Card = () => {
  return (
    <div className="flex justify-center items-center h-full flex-wrap mt-10 gap-10">
      <div className="px-[5%]">
        <div className="flex justify-center items-center flex-row-reverse max-md:flex-col-reverse w-full h-full border-4 rounded-3xl">
          <div className="flex justify-center items-center flex-col px-6 py-2 sm:w-2/3">
            <h1 className="text-3xl max-md:text-xl font-bold w-full">
              Just a Blog
            </h1>
            <p className="my-6 max-sm:my-4 text-md max-md:text-sm w-full">
              Nature has a unique way of captivating our senses, immersing us in
              its beauty, and providing a sense of tranquility. In today's
              digital era, we have the privilege of experiencing nature's
              wonders through various mediums, including the mesmerizing Ultra
              HD nature GIFs. Ultra HD, also known as 4K resolution, takes
              visual quality to new heights. With a higher pixel density, these
              GIFs provide exceptional clarity, vibrant colors, and stunning
              detail, ensuring a truly immersive experience. Each frame captures
              the essence of nature's beauty, from the intricate patterns of a
              delicate flower petal to the majestic flow of a cascading
              waterfall. One of the remarkable qualities of nature is its
              ability to soothe our souls and ignite our creativity. Ultra HD
              nature GIFs serve as a source of inspiration, providing a
              momentary escape from the bustling world and a reminder of the
              inherent beauty that surrounds us. Whether you use them as a
              calming background or as a catalyst for creative projects, these
              GIFs have the power to uplift and inspire.
            </p>
            <div className="flex justify-between items-center flex-row gap-2 w-full">
              <span class="font-bold rounded-full">01/07/2003</span>
              <Link href="/blogs/blog1">
                <button class="text-red-500 font-bold">Read More</button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center sm:w-1/3  ">
            <Image src={blogImage} className="h-60 w-80 p-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
