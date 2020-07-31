import React from "react";
import { usePokemon } from "../Queries/usePokemon";

export default function Pokemon({ qk }) {
    const queryInfo = usePokemon(qk);

    return queryInfo.isLoading ? (
        "Loading ..."
    ) : queryInfo.isError ? (
        queryInfo.error.message
    ) : (
        <div>
            {queryInfo.data.map((result) => (
                <div key={result.name}>{result.name}</div>
            ))}

            <br />
            {queryInfo.isFetching ? "Updating ..." : null}
        </div>
    );
}
