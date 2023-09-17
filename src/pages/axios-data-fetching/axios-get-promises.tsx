import { getLayout } from "@/components/layouts/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";

function AxiosGET() {
  const [isLoading, setIsLoading] = useState(true);
  const [myData, setMyData] = useState<any[]>([]);
  // const [isError, setIsError] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res: any) => {
      setMyData(res.data), setIsLoading(false);
    });
    // .then((error:any) => console.log(setIsError(error.message)));
  }, []);

  if (isLoading) {
    return <h2 className="">Loading...</h2>
  }

  return (
    <div className="px-4">
      <h1 className="text-3xl font-semibold underline mb-8">
        Axios GET Using Promises
      </h1>
      {/* {isError !== "" && <h2>{isError}</h2>} */}
      <div className="grid grid-flow-row grid-cols-3 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1">
        {myData.map((post) => {
          const { id, title, body } = post;
          return (
            <div
              className="flex flex-col gap-3 text-center border border-zinc-300 p-4"
              key={id}
            >
              <h2 className="font-semibold text-lg font-sans">
                {title.slice(0, 15).toUpperCase()}
              </h2>
              <p>{body.slice(0, 150)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AxiosGET;
AxiosGET.getLayout = getLayout;
