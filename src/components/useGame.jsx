import React from "react";

const useGame = (images) => {
    const [finishedItems, setFinishedItems] = React.useState([]);
    const [stepsCount, setStepsCount] = React.useState(0);

    const checkItems = (firstItem, secondItem) => {
      const fisrtImage = images.find(({ id }) => id === firstItem);
      const secondImage = images.find(({ id }) => id === secondItem);
      if (fisrtImage.url === secondImage.url) {
        setFinishedItems((items) => [...items, firstItem, secondItem]);
      }
      setStepsCount((i) => i + 1);
    };

    const handleReset = () => {
      setFinishedItems([]);
      setStepsCount(0);
    };

    const isGameOver = finishedItems.length === images.length;
    return {
      finishedItems,
      handleReset,
      checkItems,
      isGameOver,
      stepsCount,
    };
  };

export default useGame;