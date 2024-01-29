import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResult({ results }) {
  return (
    <div className="guess-results">
      {results.map((result) => (
        <Guess word={result.guess} key={result.id} />
      ))}
      {range(NUM_OF_GUESSES_ALLOWED - results.length).map((item) => (
        <Guess word="" key={item} />
      ))}
    </div>
  );
}

export default GuessResult;
