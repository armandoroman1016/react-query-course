import React from "react";
import { useBerries } from "../Queries/queries";

export default function Berries({ qk }) {
    const queryInfo = useBerries(qk);

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
