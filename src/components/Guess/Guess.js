import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ word, answer }) {
  let array = [];
  if (word) {
    array = checkGuess(word, answer);
  }

  return (
    <p className="guess">
      {array.map((item, index) => (
        <span className={`cell ${item.status}`} key={index}>
          {item.letter}
        </span>
      ))}
      {range(5 - array.length).map((item) => (
        <span className="cell" key={item}></span>
      ))}
    </p>
  );
}

export default Guess;
