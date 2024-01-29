import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResult from '../GuessResult/GuessResult';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [list, setList] = React.useState([]);
  const [status, setStatus] = React.useState('');
  const [disable, setDisable] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const newGuess = {
      guess,
      id: crypto.randomUUID(),
    };
    const nextList = [...list, newGuess];
    setGuess('');
    setList(nextList);
    if (newGuess.guess === answer) {
      setStatus('win');
    }
    if (newGuess.guess !== answer && nextList.length === 6) {
      setStatus('lose');
      setDisable(true);
    }
  }

  return (
    <>
      <GuessResult results={list} answer={answer} />
      <GuessInput
        input={guess}
        setInput={setGuess}
        handleSubmit={handleSubmit}
        disable={disable}
      />
      <Banner status={status} numOfGuess={list.length} answer={answer} />
    </>
  );
}

export default Game;
