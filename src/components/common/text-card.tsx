import Link from "next/link";
import React from "react";

function TextCard({ data }: any) {
  return (
    <div className="flex flex-wrap gap-10">
      {data?.map((v: any, i: any) => (
        <Link
          href={v?.link}
          className="relative w-72 overflow-hidden bg-cover bg-no-repeat before:bg-white/10"
          key={i}
        >
          <div className="flex justify-center items-center rounded-3xl bg-zinc-800 h-40 w-72 transition duration-300 ease-in-out hover:scale-110">
            <h2 className="text-3xl text-center font-bold">{v?.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default TextCard;
