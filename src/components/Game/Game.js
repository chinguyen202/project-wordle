import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResult from '../GuessResult/GuessResult';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

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
    setGuess('');
    if (nextList.length > 6) {
      window.alert(`Maximum guesses are ${NUM_OF_GUESSES_ALLOWED}`);
      return;
    }
    setList(nextList);
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
