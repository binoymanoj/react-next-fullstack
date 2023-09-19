import Spinner from "@/components/common/spinner";
import { getLayout } from "@/components/layouts/layout";
import axios from "@/lib/axios";
import React, { useEffect, useState } from "react";

// const API = "https://jsonplaceholder.typicode.com";

function AxiosGET2() {
  const [isLoading, setIsLoading] = useState(true);
  const [myData, setMyData] = useState<any[]>([]);
  // const [isError, setIsError] = useState("");

  //url: any
  const getApiData = async () => {
    const res: any = await axios.get("/posts");
    setMyData(res.data), setIsLoading(false);
  };

  useEffect(() => {
    // getApiData(`${API}/posts`);
    getApiData();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="px-4">
      <h1 className="text-3xl font-semibold underline mb-8">
        Axios GET Using Promises
      </h1>
      {/* {isError !== "" && <h2>{isError}</h2>} */}
      <div className="grid grid-flow-row grid-cols-3 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1">
        {myData.slice(0, 12).map((post) => {
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

export default AxiosGET2;
AxiosGET2.getLayout = getLayout;
