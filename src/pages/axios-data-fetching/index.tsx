import Breadcrumbs from "@/components/common/breadcrumbs";
import TextCard from "@/components/common/text-card";
import { getLayout } from "@/components/layouts/layout";
import React from "react";

const topics = [
  {
    title: "Axios Basic GET",
    link: "/axios-data-fetching/axios-basic-get",
  },
  {
    title: "Axios Basic POST",
    link: "/axios-data-fetching/axios-basic-post",
  },
  {
    title: "Axios GET (Promises)",
    link: "/axios-data-fetching/axios-get-promises",
  },
  {
    title: "Axios GET (Async Await)",
    link: "/axios-data-fetching/axios-get-async",
  },
  {
    title: "Axios Advanced",
    link: "/axios-data-fetching/axios-advanced",
  },
];

const AxiosDataFetch = () => {
  return (
    <div className="breadCrumbSpacing">
      <Breadcrumbs />
      <TextCard data={topics} />
    </div>
  );
};

export default AxiosDataFetch;
AxiosDataFetch.getLayout = getLayout;
