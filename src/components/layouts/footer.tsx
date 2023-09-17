import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="h-14 bg-zinc-800 text-white px-4 flex items-center justify-between">
      <Link href={"https://instagram.com/binoy_manoj"}>@binoy_manoj</Link>
    </div>
  );
}

export default Footer;
