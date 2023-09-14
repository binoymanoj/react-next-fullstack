import Breadcrumbs from "@/components/common/breadcrumbs";
import { getLayout } from "@/components/layouts/layout";
import React, { useState } from "react";
import Usestate from "./use-state";

export default function ReactHooks() {

  return (
    <main className="max-w-7xl mx-auto p-2">
        <Breadcrumbs />
        <Usestate />
    </main>
  );
}

ReactHooks.getLayout = getLayout