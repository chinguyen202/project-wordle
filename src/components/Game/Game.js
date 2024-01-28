import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResult from '../GuessResult/GuessResult';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [list, setList] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newGuess = {
      guess,
      id: crypto.randomUUID(),
    };
    const nextList = [...list, newGuess];
    setList(nextList);
    setGuess('');
  }

  return (
    <>
      <GuessResult results={list} />
      <GuessInput
        input={guess}
        setInput={setGuess}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Game;
