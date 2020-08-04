import { useQuery } from "react-query";
import axios, { CancelToken } from "axios";

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

export const useBerries = (qk) => {
    return useQuery(qk, async () => {
        await new Promise((resolve, reject) => setTimeout(resolve, 1000));

        return axios
            .get("https://pokeapi.co/api/v2/berry")
            .then((res) => res.data.results)
            .catch((err) => err.response);
    });
};

export const usePokemonSearch = (pokemon) => {
    return useQuery(
        pokemon,
        () => {
            const source = CancelToken.source();

            const promise = new Promise((resolve) => setTimeout(resolve, 1000))
                .then(() => {
                    return axios
                        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
                            cancelToken: source.token,
                        })
                        .then((res) => res.data);
                })
                .catch((err) => err.response);

            promise.cancel = () => {
                source.cancel("Query was cancelled by React Query");
            };

            return promise;
        },
        {
            enabled: pokemon,
        }
    );
};
