import { getLayout } from "@/components/layouts/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

//to activate port 4000 - terminal ->yarn serve-json
const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes")
}

function ReactQueryBasics() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState([]);

  const { isLoading, data } = useQuery("super-heroes", fetchSuperHeroes);
  // console.log("dataaa", data?.data);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2 className="text-3xl mb-6">React Query Basics</h2>
      <div>
        {data?.data.map((hero:any) => (
          <div key={hero?.name}>{hero?.name}</div>
        ))}
      </div>
    </div>
  );
}

export default ReactQueryBasics;
ReactQueryBasics.getLayout = getLayout;
