import Breadcrumbs from "@/components/common/breadcrumbs";
import Button from "@/components/common/button";
import { getLayout } from "@/components/layouts/layout";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

// async
const JsonDataFetch = () => {
  const [data, setData] = useState<any[]>([]);

  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    //GET API implementation
    fetch(url, {
      headers: {
        companyId: "3793278373737",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json);
        setData(json);
      })
      .catch((e) => {
        console.log("err", e);
      });
  }, []);
  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //     // cache: "no-cache",
  //     // next: { revalidate: 10 },
  //   });
  //   const users: User[] = await res.json();

  //POST PUT API implementation
  const postPutEvent = () => {
    const data = {
      id: "def234",
      name: "Sample",
      mobile: "9838383838",
      designation: "developer",
      pincode: "983383",
    };

    const url = data.id
      ? "https://jsonplaceholder.typicode.com/comments/" + data.id
      : "https://jsonplaceholder.typicode.com/comments";
    fetch(url, {
      method: data.id ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log("response", response);
        if (response.status === 200) {
          alert("success");
        } else {
          alert("failed");
        }
      })
      .catch((e) => {
        console.log("err", e);
      });
  };

  return (
    <div className="breadCrumbSpacing">
      <Breadcrumbs />
      <h1>Users</h1>
      <div>
        {data?.map((v, i) => (
          <div key={i}>{v?.email}</div>
        ))}
      </div>
      <div onClick={postPutEvent}>
        <Button text={"Submit"} />
      </div>
    </div>
  );
};

export default JsonDataFetch;
JsonDataFetch.getLayout = getLayout;
