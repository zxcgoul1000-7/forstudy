import React from "react";
import InitialPage from "./InitialPage.jsx";
import GamePage from "./GamePage.jsx";
import ResultsPage from "./ResultsPage.jsx";
import AppRoute from "./Custom_hooks.js"
import getDeclension from '@dubaua/get-declension';
import { GameHeader } from "./GameHeader.jsx";
import getImages from "../data.js";
import { useGame } from "./useGame.jsx";

function App({ results = [] }) {
    const [page, setPage] = React.useState(AppRoute.Initial);
    const [result, setResult] = React.useState(0);
    const [images, setImages] = React.useState([]);
    const [gameType, setGameType] = React.useState([]);
    const showResults = (imagesCount) => {
      setResult(imagesCount);
      setPage(AppRoute.Results);
    };
    const handleReset = () => {
      setPage(AppRoute.Initial);
    };
    const handleStart = (type) => {
      setImages(getImages(type));
      setGameType(type);
      setPage(AppRoute.Game);
    };
    const getPage = (route) => {
      switch (route) {
        case AppRoute.Initial:
          return <InitialPage onStart={handleStart} />;
        case AppRoute.Game:
          return <GamePage images={images} gameType={gameType} onShowResults={showResults} />;
        case AppRoute.Results:
          return (
            <ResultsPage
              current={result}
              onResetGame={handleReset}
              results={results}
            />
          );
        default:
          return null;
      }
    };
    return getPage(page);
  }

export default App;