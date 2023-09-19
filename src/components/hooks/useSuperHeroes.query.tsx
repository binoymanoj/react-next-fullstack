import axios from "axios";
import { useQuery } from "react-query";

//to activate port 4000 - terminal ->yarn serve-json
const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroes = (onSuccess:any, onError:any) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    // cacheTime: 5000,
    // staleTime: 30000,
    // refetchInterval: 5000,
    // refetchIntervalInBackground: true,
    // refetchOnMount: true,
    // enabled: false,
    // onSuccess: onSuccess, //when the function is of same name just call it.
    onSuccess,
    onError,
    select(data) {
      const superHeroNames = data.data.map((hero: any) => hero.name);
      return superHeroNames;
    },
  });
};
