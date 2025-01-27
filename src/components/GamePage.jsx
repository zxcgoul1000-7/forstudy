import React from "react";
import useGame from "./useGame.jsx";
import GameHeader from "./GameHeader.jsx";
import Grid from "./Grid.jsx";
import Modal from "./Modal.jsx";


function GamePage({ images = [], onShowResults, gameType }) {
    const {
      finishedItems,
      handleReset,
      checkItems,
      errorsCount,
      isGameOver,
      stepsCount,
    } = useGame(images);

    const handleResultsClick = () => {
      onShowResults(finishedItems.length / 2);
    };

    return (
      <section className="game container">
        <GameHeader value={finishedItems.length} max={images.length} />
        <p className="progress-description">
          Открыто <span>{finishedItems.length / 2}</span> / <span>6</span>
        </p>
        <div className="steps"> {stepsCount} шагов </div>
        <Grid
          gameType={gameType}
          images={images}
          finishedItems={finishedItems}
          checkItems={checkItems}
        />
        {isGameOver && (
          <Modal>
            <h3 className="modal-caption">Победа!</h3>
            <p className="modal-description">
              Теперь давайте узнаем результаты этой партии
            </p>
            <button
              onClick={handleResultsClick}
              className="button"
              type="button"
            >
              Показать результаты
            </button>
          </Modal>
        )}
      </section>
    );
  }

export default GamePage;