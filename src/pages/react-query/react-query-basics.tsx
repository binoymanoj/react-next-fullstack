import Button from "@/components/common/button";
import Spinner from "@/components/common/spinner";
import { useSuperHeroes } from "@/components/hooks/useSuperHeroes.query";
import { getLayout } from "@/components/layouts/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

//to activate port 4000 - terminal ->yarn serve-json
// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };

function ReactQueryBasics() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState([]);

  const onSuccess = (data: any) => {
    console.log("Perform any action after success.", data);
  };

  const onError = (err: any) => {
    console.log("Perform any action after encountering an error.", err);
  };

  const { isLoading, data, isError, error, isFetching, refetch }: any =
    useSuperHeroes(onSuccess, onError);

  // useQuery("super-heroes", fetchSuperHeroes, {
  // cacheTime: 5000,
  // staleTime: 30000,
  // refetchInterval: 5000,
  // refetchIntervalInBackground: true,
  // refetchOnMount: true,
  // enabled: false,
  // onSuccess: onSuccess, //when the function is of same name just call it.
  //   onSuccess,
  //   onError,
  //   select(data) {
  //     const superHeroNames = data.data.map((hero: any) => hero.name);
  //     return superHeroNames;
  //   },
  // });
  // console.log("dataaa", data?.data);

  console.log({ isLoading, isFetching });

  if (isLoading || isFetching) {
    return <Spinner />;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2 className="text-3xl mb-6">React Query Basics</h2>
      {/* <div onClick={refetch} className="mb-6">
        <Button text={"fetch heroes"} />
      </div> */}
      <div>
        {/* {data?.data.map((hero: any) => (
          <div key={hero?.name}>{hero?.name}</div>
        ))} */}
        {data.map((heroName: any) => {
          return <div key={heroName}>{heroName}</div>;
        })}
      </div>
    </div>
  );
}

export default ReactQueryBasics;
ReactQueryBasics.getLayout = getLayout;
