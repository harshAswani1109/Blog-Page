import Image from "next/image";
import cricImage from "../../public/cricImage.jpeg";
import Link from "next/link";
const Cricket = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col-reverse w-72 h-full rounded-3xl border-4 overflow-hidden">
        <div className="flex justify-center items-center flex-col px-6 py-2">
          <h1 className="text-xl font-bold w-full">Young Talent</h1>
          <p className="my-4 text-xs w-full">
            The world is constantly evolving, driven by the energy, innovation,
            and passion of young talent. These remarkable individuals possess a
            unique perspective, boundless creativity, and a desire to make a
            meaningful impact on society.
          </p>
          <div className="flex justify-between items-center flex-row gap-2 w-full text-sm">
            <span class="font-bold rounded-full">01/07/2003</span>
            <Link href="/blogs/blog1">
              <button class="text-red-500 font-bold">Read More</button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src={cricImage} className="" />
        </div>
      </div>
    </div>
  );
};
export default Cricket;
