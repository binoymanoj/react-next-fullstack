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
import TextCard from "@/components/common/text-card";

const topics = [
  {
    title: "React Hooks",
    link: "/react-hooks",
  },
  {
    title: "Basic Data Fetching",
    link: "/basic-data-fetching",
  },
  {
    title: "Axios Data Fetching",
    link: "/axios-data-fetching",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-10">
        <h2 className="text-4xl font-semibold mt-12">Topics Covered :</h2>
        <TextCard data={topics} />
      </div>
    </div>
  );
}

Home.getLayout = getLayout;
