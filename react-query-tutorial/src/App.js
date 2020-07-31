import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ReactQueryDevtools } from "react-query-devtools";
import Pokemon from "./Components/Pokemon";
import Count from "./Components/Count";

function App() {
    return (
        <div>
            <Count qk="pokemon1" />
            <Pokemon qk="pokemon1" />
            <Pokemon qk="pokemon1" />
            <ReactQueryDevtools />
        </div>
    );
}

export default App;
