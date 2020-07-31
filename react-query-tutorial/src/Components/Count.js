import React from "react";
import { usePokemon } from "../Queries/usePokemon";

export default function Count({ qk }) {
    const queryInfo = usePokemon(qk);
    console.log(queryInfo);
    return (
        <div>
            {queryInfo.isSuccess
                ? `The amount of pokemon is ${queryInfo.data.length}`
                : null}
        </div>
    );
}
