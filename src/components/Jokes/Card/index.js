import styles from "./card.module.css";

import React from "react";

const JokesCard = ({
  text,
  emoji = "🤣",
  vote = 0,
  onDecrement,
  onIncrement,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.vote}>
        <button onClick={onDecrement}>-</button>
        <span>{vote}</span>
        <button onClick={onIncrement}>+</button>
      </div>

      <div>
        <p>{text}</p>
      </div>

      <div className={styles.emoji}>{emoji}</div>
    </div>
  );
};

export default JokesCard;
