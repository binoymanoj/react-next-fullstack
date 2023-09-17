import Breadcrumbs from "@/components/common/breadcrumbs";
import TextCard from "@/components/common/text-card";
import { getLayout } from "@/components/layouts/layout";
import React from "react";

const topics = [
  {
    title: "React Query Basics",
    link: "/react-query/react-query-basics",
  },
];

function ReactQuery() {
  return (
    <div className="breadCrumbSpacing">
      <Breadcrumbs />
      <TextCard data={topics} />
    </div>
  );
}

export default ReactQuery;
ReactQuery.getLayout = getLayout
