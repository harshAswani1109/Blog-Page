import Image from "next/image";
import Landing from "../../components/landing/landing";
import Navbar from "../../components/navbar/navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
    </div>
  );
}
