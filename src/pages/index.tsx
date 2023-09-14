import { getLayout } from "@/components/layouts/layout";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-10">
        <h2 className="text-4xl font-semibold mt-12">Topics Covered :</h2>

        <div className="flex flex-wrap gap-10">
          <Link href={"/react-hooks"} className="relative w-72 overflow-hidden bg-cover bg-no-repeat before:bg-white/10">
            <div className="flex justify-center items-center rounded-3xl bg-zinc-800 h-40 w-72 transition duration-300 ease-in-out hover:scale-110">
              <h2  className="text-3xl text-center font-bold">React Hooks</h2>
            </div>
          </Link>
          <Link href={"/basic-data-fetching"} className="relative w-72 overflow-hidden bg-cover bg-no-repeat before:bg-white/10">
            <div className="flex justify-center items-center rounded-3xl bg-zinc-800 h-40 w-72 transition duration-300 ease-in-out hover:scale-110">
              <h2 className="text-3xl text-center font-bold">Basic Data Fetching</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

Home.getLayout = getLayout;
