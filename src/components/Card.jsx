import React from "react";
import TIMEOUT from "../settings";

function Card({ item, isFinished, isVisibled, onCardClick }) {
    const { url, id } = item;
    const className = `card ${isVisibled ? "card-show" : ""} ${
      isFinished ? "card-finished" : ""
    }`;

    const handleClick = () => {
      if (isFinished) {
        return;
      }
      onCardClick(id);
    };

    return (
      <li onClick={handleClick} className={className}>
        <img src={url} width="204" height="144" alt="Котик" />
      </li>
    );
  }

export default Card;