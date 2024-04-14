import { Banner } from "@/components/banner";
import { ElectionTime } from "@/components/election-time";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <div>
        <Banner />
      </div>
      <div className="-mt-28 z-40 relative">
        <ElectionTime />
      </div>
      <div></div>
    </main>
  );
}
