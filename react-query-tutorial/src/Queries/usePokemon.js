import { useQuery } from "react-query";
import axios from "axios";

export const usePokemon = (qk) => {
    return useQuery(
        qk,
        async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            return axios
                .get("https://pokeapi.co/api/v2/pokemon")
                .then((res) => res.data.results)
                .catch((err) => err.response);
        },
        {
            // refetchOnWindowFocus: false,
            staleTime: 1000 * 10,
            cacheTime: 1000 * 5,
        }
    );
};
