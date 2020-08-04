import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ReactQueryDevtools } from "react-query-devtools";
import Pokemon from "./Components/Pokemon";
import Count from "./Components/Count";
import Berries from "./Components/Berries";
import Search from "./Components/Search";

function App() {
    return (
        <div>
            <Count qk="pokemon" />
            <Pokemon qk="pokemon" />
            <Count qk="berries" />
            <Berries qk="berries" />
            <Search />
            <ReactQueryDevtools />
        </div>
    );
}

export default App;
