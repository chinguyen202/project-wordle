import React, { useState } from 'react';

function GuessInput() {
  const [input, setInput] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    console.info({ input });
    setInput('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={input}
        pattern="[a-z A-Z]{5,5}"
        title="min and max 5 letters"
        onChange={(event) => setInput(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
