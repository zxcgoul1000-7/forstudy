import React from 'react';
import  Card  from './Card.jsx';
import TIMEOUT from '../settings.js';

function Grid({ images, finishedItems, checkItems, gameType }) {
    const [visibledItems, setVisibledItems] = React.useState([]);

    const handleCardClick = (id) => {
      if (visibledItems.includes(id)) {
        return;
      }
      switch (visibledItems.length) {
        case 0:
          setVisibledItems([id]);
          break;
        case 1:
          setVisibledItems((items) => [...items, id]);
          checkItems(visibledItems[0], id);
          setTimeout(() => {
            setVisibledItems([]);
          }, TIMEOUT);
          break;
        default:
          setVisibledItems([]);
      }
    };

    const cards = images.map((item) => (
      <Card
        key={item.id}
        item={item}
        isVisibled={visibledItems.includes(item.id)}
        isFinished={finishedItems.includes(item.id)}
        onCardClick={handleCardClick}
      />
    ));
    return <ul className={`cards cards-theme-${gameType}`}>{cards}</ul>;
  }

export default Grid;