import React from 'react';
import { range } from '../../utils';

function Guess({ word }) {
  let array = [];
  if (word) {
    for (let i = 0; i < word.length; i++) {
      array.push(word[i]);
    }
  }

  return (
    <p className="guess">
      {array.map((character, index) => (
        <span className="cell" key={index}>
          {character}
        </span>
      ))}
      {range(5 - array.length).map((item) => (
        <span className="cell" key={item}></span>
      ))}
    </p>
  );
}

export default Guess;
