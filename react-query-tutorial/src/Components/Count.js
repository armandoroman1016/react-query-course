import React from "react";
import { usePokemon } from "../Queries/queries";

export default function Count({ qk }) {
    const queryInfo = usePokemon(qk);
    return (
        <div>
            {queryInfo.isSuccess
                ? `The amount of ${
                      qk.charAt(0).toUpperCase() + qk.substring(1)
                  } is ${queryInfo.data.length}`
                : null}
        </div>
    );
}
