import { getLayout } from "@/components/layouts/layout";
import Link from "next/link";
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      Home page
      <Link href={"/react-hooks"}>
        React Hooks
      </Link>
      <Link href={"/basic-data-fetching"}>Basic Data Fetching</Link>
      <Card
      isFooterBlurred
      radius="lg"
      className="border-none w-fit"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="/images/hero-card.jpeg"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Notify me
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}

Home.getLayout = getLayout
