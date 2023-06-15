"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/hooks/scroll-offset";

export default function Header() {
  const yOffset = useScroll();
  const headerClass =
    yOffset == 0
      ? "mt-[30px] lg:w-[70%] w-[80%] p-[20px]"
      : "mt-[0] w-full p-[10px]";

  return (
    <header className={`fixed top-0 left-0 right-0 z-[2] bg-c2 flex justify-center m-auto ease-in duration-150 ${headerClass}`}>
      <Link href="/">
        <Image src="/logo.png" alt="diagnoquest logo" className="ease-in duration-150" width={yOffset ==0 ? 120: 80} height={30} />
      </Link>
    </header>
  );
}
