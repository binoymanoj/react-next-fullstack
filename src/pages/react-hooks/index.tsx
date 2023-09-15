import Breadcrumbs from "@/components/common/breadcrumbs";
import { getLayout } from "@/components/layouts/layout";
import React, { useState } from "react";
import Usestate from "./use-state";
import TextCard from "@/components/common/text-card";

const topics = [
  {
    title: "Use State Hook",
    link : "/react-hooks/use-state",
  },
  // {
  //   title: "",
  //   link : "",
  // },
]

export default function ReactHooks() {

  return (
    <main className="breadCrumbSpacing">
        <Breadcrumbs />
        <TextCard data={topics} />
    </main>
  );
}

ReactHooks.getLayout = getLayout